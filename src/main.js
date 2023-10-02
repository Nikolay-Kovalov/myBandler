import { load } from "./js/favorite";

const searchResult = document.querySelector(".list_result");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

searchResult.addEventListener("click", onLearnMoreBtnClick);
searchResult.addEventListener("click", onFavoriteBtnClick);

const arr = [];     

const localArr = load("favorite");


function save(key, value) {
    try {
        const parsedValue = JSON.stringify(value)
        localStorage.setItem(key, parsedValue)
    } 
    catch(error){
        console.log(error.message)
    }
}



const getCoctails = async () => {
    const BASE_URL = "https://drinkify.b.goit.study/api/v1"
  try {
    const resp = await fetch(`${BASE_URL}/cocktails/`)
    if (!resp.ok) {
        throw new Error(resp.statusText)
      
    }
        return resp.json()
    }
    catch (err) {
console.log(err.message)
    }
}

   for (let y = 1; y <= 9; y += 1) {
     getCoctails().then(data => {
        //  console.log(data)
  
       const markup = createMarkup(data[0])
       searchResult.insertAdjacentHTML("beforeend", markup)
           for (let i = 0; i < localArr.length; i += 1){
      if (localArr[i].title === data[0].drink) {
        console.log("yra")
            console.log(data[0].drink)
        console.log(searchResult.lastElementChild.lastElementChild.lastElementChild.firstElementChild.attributes.fill.value)
        searchResult.lastElementChild.lastElementChild.lastElementChild.firstElementChild.attributes.fill.value = "#fdfdff"
              searchResult.lastElementChild.lastElementChild.lastElementChild.firstElementChild.classList.add("enable");
}
} 
       }
       )
   }



// closeBtn.addEventListener("click", onCloseBtnClick)

function onCloseBtnClick() {
    backdrop.classList.toggle("js_open_bd");
    modal.classList.toggle("js_open");
  document.body.classList.toggle("backdrop_open")
      modal.innerHTML = "";
}


function onLearnMoreBtnClick(evt) {
  if (evt.target.classList.contains("result_btn_more")) {
    console.log("xbvaschxg")
    backdrop.classList.toggle("js_open_bd");
    modal.classList.toggle("js_open");
    document.body.classList.toggle("backdrop_open")
    backdrop.addEventListener("click", onBackdropClick);
    document.body.addEventListener("keydown", onEscClick)

      const name = evt.target.closest('li').children[1].textContent;
  console.log(name)
  getCoctail(name).then(data => {
    console.log(data)
    const markup = createModalCard(data[0]);
    modal.insertAdjacentHTML("beforeend", markup) 
    modal.children[0].addEventListener("click", onCloseBtnClick)
  })
  }
  // const id = evt.target.closest('li').dataset.id
  // console.log(id)

}


function onFavoriteBtnClick(evt) {
  if (evt.target.nodeName === "path") {
    evt.target.parentElement.attributes.fill.value = "none";
    evt.target.parentElement.classList.remove("enable")
    localArr.splice(localArr.findIndex(item => item.id === evt.target.closest("li").dataset.id), 1)
    console.log(localArr)
    console.log(evt.target.closest("li"))
         save("favorite", localArr)
    return
  }

  if (evt.target.firstElementChild.classList.contains("enable") ) {
    evt.target.firstElementChild.attributes.fill.value = "none";
    evt.target.firstElementChild.classList.remove("enable")
    localArr.splice(localArr.findIndex(item => item.id === evt.target.closest("li").dataset.id), 1)
    console.log(localArr)
    console.log(evt.target.closest("li"))
         save("favorite", localArr)
    return
  }


  if (evt.target.classList.contains("result_btn_favourite")) {
evt.target.firstElementChild.attributes.fill.value = "#fdfdff"
    evt.target.firstElementChild.classList.add("enable");
   
    const obj = {
      id: evt.target.closest("li").dataset.id,
      img: evt.target.closest("li").children[0].src,
      title: evt.target.closest("li").children[1].textContent,
      text: evt.target.closest("li").children[2].textContent,
      favorite: true
    } 
       if (arr.length === 0) {
      arr.push(obj)
           save("favorite", arr)
    }
    if (localArr.length > 0) {
             localArr.push(obj)

      save("favorite", localArr)
    }

  } else if (evt.target.classList.contains("fav")) {
evt.target.attributes.fill.value = "#fdfdff"
    evt.target.classList.add("enable");

    const obj = {
      img: evt.target.closest("li").children[0].src,
      title: evt.target.closest("li").children[1].textContent,
      text: evt.target.closest("li").children[2].textContent,
    }
    if (arr.length === 0) {
      arr.push(obj)
           save("favorite", arr)
    }
    if (localArr.length > 0) {
             localArr.push(obj)

      save("favorite", localArr)
    }

  }



}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
   backdrop.classList.toggle("js_open_bd");
    modal.classList.toggle("js_open");
    document.body.classList.toggle("backdrop_open")
          modal.innerHTML = "";
}
   
}

function onEscClick(evt) {
  if (evt.code === "Escape") {
      backdrop.classList.toggle("js_open_bd");
    modal.classList.toggle("js_open");
    document.body.classList.toggle("backdrop_open")
    document.body.removeEventListener("keydown", onEscClick)
          modal.innerHTML = "";
  }
}


function createMarkup({ drinkThumb, drink, description, _id }) {
  return `<li class="result_item" data-id="${_id}">
    <img src="${drinkThumb}" alt="${drink}" class="result_image" />
    <h3 class="result_title">${drink}</h3>
    <p class="result_text">
    ${description}
    </p>
    <div class="result_btn_wrapper">
      <button type="button" class="result_btn_more">LEARN MORE</button>
      <button type="button" class="result_btn_favourite">
        <svg class="fav"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987Z"
            stroke="#FDFDFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
       

      </button>
    </div>
  </li>`  
}

const getCoctail = async (name) => {
  const BASE_URL = "https://drinkify.b.goit.study/api/v1"
  
  try {
    const resp = await fetch(`${BASE_URL}/cocktails/search?s=${name}`)
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json()
   }
  catch (err) {
    console.log(err.message)
  }
}


function createModalCard({drinkThumb,drink,instructions}) {
  return `
<div class="cross">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
    <div class="modal_wrapper">
    <img src="${drinkThumb}" alt="" class="modal_image" />
    <div class="modal_description_wrapper">
      <h3 class="modal_title">${drink}</h3>
      <h3 class="modal_ingredients_title">Ingredients:</h3>
      <h4 class="modal_cocktail">Per cocktail</h4>
      <ul class="modal_list">
        <li class="modal_item">Ice</li>
      </ul>
    </div>
  </div>
  <h3 class="modal_instruction_title">Instructions</h3>
  <p class="result_text">
${instructions}
  </p>
  <div class="modal_btn_wrapper">
    <button type="button" class="modal_btn_favourite">Add to favorite</button>
    <button type="button" class="modal_btn_back">BACK</button>
  </div>
</div>
  `
}


// function createMarkupFavorite(arr) {
//   const newArr = arr.map((img, title, text) => {
//     return `
//   <li class="result_item" >
//     <img src="${img}" alt="${title}" class="result_image" />
//     <h3 class="result_title">${title}</h3>
//     <p class="result_text">
//     ${text}
//     </p>
//     <div class="result_btn_wrapper">
//       <button type="button" class="result_btn_more">LEARN MORE</button>
//       <button type="button" class="result_btn_favourite">
//         <svg class="fav"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987Z"
//             stroke="#FDFDFF"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <svg class="trash" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//       </button>
//     </div>
//   </li>
//     `
// })
//   return newArr.join('')
  
  
// }

// function createMarkupFavorite({ img, title, text }) {

//     return `
//   <li class="result_item" >
//     <img src="${img}" alt="${title}" class="result_image" />
//     <h3 class="result_title">${title}</h3>
//     <p class="result_text">
//     ${text}
//     </p>
//     <div class="result_btn_wrapper">
//       <button type="button" class="result_btn_more">LEARN MORE</button>
//       <button type="button" class="result_btn_favourite">
//         <svg class="fav"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987Z"
//             stroke="#FDFDFF"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <svg class="trash" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//       </button>
//     </div>
//   </li>
//     `
// }



