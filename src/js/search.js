import { searchCoctailByName } from "./Apiservise";
import { createPaginationRow } from "./paginator";

const searchList = document.querySelector(".search_section_list_tabs");

const searchInput = document.querySelector(".search_section_input");

const searchResult = document.querySelector(".list_result");

const paginator = document.querySelector(".paginator");

const pageList = document.querySelector(".page_list");


const alphbet = [
    "A", "B", "C", "D",
    "E", "F", "G", "H",
    "I", "J", "K", "L",
    "M", "N", "O", "P",
    "Q", "R", "S", "T",
    "U", "V", "W", "X",
    "Y", "Z"
];



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createTabs(arr) {
    return arr.map(item => {
        return `
        <li class="search_list_item">
  <div class="search_list_item_tab">
    <span class="search_list_item_tab_text">${item}</span>
  </div>
</li>

        `
    }).join("")
}

const alphabetMarkup = createTabs(alphbet);
const numbersMarkup = createTabs(numbers);

searchList.insertAdjacentHTML("beforeend", alphabetMarkup);
searchList.insertAdjacentHTML("beforeend", numbersMarkup)

searchList.addEventListener("click", onTabClick);
searchInput.addEventListener("keydown", onSearch);
pageList.addEventListener("click", onPageListClick);

let name = null;

let currentPage = null;

let pageCounter = 0;

function onPageListClick(evt) {
  if (evt.target.classList.contains("page_item")) {
    if (currentPage !== null) {
      currentPage.classList.remove("page_active")
    } else if (pageList.firstElementChild.classList.contains("page_active")) {
      pageList.firstElementChild.classList.remove("page_active")
    }
     
    evt.target.classList.add("page_active")
    currentPage = evt.target;
  }


  if (Number(evt.target.textContent) > pageCounter / 9) {
    pageCounter += 9 * evt.target.textContent - (pageCounter)
  } else { pageCounter -= 9 * evt.target.textContent + (pageCounter) }
  console.log(Math.abs(pageCounter))

  searchCoctailByName(name).then(data => {
    const searchMarkup = createSearchMarkup(data.slice(Math.abs(pageCounter) -9,  Math.abs(pageCounter)))
       searchResult.innerHTML = searchMarkup;
})

}

function onTabClick(evt) {  
searchInput.value +=  evt.target.textContent.trim()   
}

function onSearch(evt) {
  currentPage = null;
  if (evt.code === "Enter") {
         paginator.classList.remove("show_paginator")
         name = evt.currentTarget.value;
        searchCoctailByName(name).then(data => {
          const searchMarkup = createSearchMarkup(data.slice(0 , 9))

          console.log(data);
          if (data.length > 9) {
            paginator.classList.add("show_paginator")
            createPaginationRow(data)
            if (currentPage === null) {
              pageList.firstElementChild.classList.add("page_active")
            }
          }

            searchResult.innerHTML = searchMarkup;
        }
           )
            evt.currentTarget.value = "";
    }

}

function createSearchMarkup(arr) {
    return arr.map((item) => {
        return `
<li class="result_item" data-id="${item._id}">
    <img src="${item.drinkThumb}" alt="${item.drink}" class="result_image" />
    <h3 class="result_title">${item.drink}</h3>
    <p class="result_text">
    ${item.description}
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
    }).join("")
    
}












