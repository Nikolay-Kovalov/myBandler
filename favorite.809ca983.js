var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r.register("kPTke",(function(e,t){var n,r,o,l;n=e.exports,r="load",o=function(){return i},Object.defineProperty(n,r,{get:o,set:l,enumerable:!0,configurable:!0});function i(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.message)}}document.querySelector(".list_favorite").innerHTML=i("favorite").map((({id:e,img:t,title:n,text:r})=>`\n  <li class="result_item data-id="${e}" >\n    <img src="${t}" alt="${n}" class="result_image" />\n    <h3 class="result_title">${n}</h3>\n    <p class="result_text">\n    ${r}\n    </p>\n    <div class="result_btn_wrapper">\n      <button type="button" class="result_btn_more">LEARN MORE</button>\n      <button type="button" class="result_btn_favourite">\n       <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M8 10.5V15.5M12 10.5V15.5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n\n      </button>\n    </div>\n  </li>\n    `)).join("")})),r("kPTke");
//# sourceMappingURL=favorite.809ca983.js.map
