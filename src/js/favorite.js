
const favList = document.querySelector(".list_favorite")

export function load(key) {
    try {
        const value = localStorage.getItem(key)
        return value === null ? undefined : JSON.parse(value)
    }
    catch (error) {
        console.log(error.message)
    }
}

favList.innerHTML = createMarkupFavorite(load("favorite"))

function createMarkupFavorite(arr) {
  const newArr = arr.map(({id, img, title, text }) => {
    return `
  <li class="result_item data-id="${id}" >
    <img src="${img}" alt="${title}" class="result_image" />
    <h3 class="result_title">${title}</h3>
    <p class="result_text">
    ${text}
    </p>
    <div class="result_btn_wrapper">
      <button type="button" class="result_btn_more">LEARN MORE</button>
      <button type="button" class="result_btn_favourite">
       <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M8 10.5V15.5M12 10.5V15.5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
    </div>
  </li>
    `
})
  return newArr.join('')
  
  
}


//  function createMarkupFavorite({ img, title, text }) {

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
