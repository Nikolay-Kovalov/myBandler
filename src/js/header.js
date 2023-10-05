const favBtn = document.querySelector(".favorite_icon");
const favMenu = document.querySelector(".favorite_wrapper")

favBtn.addEventListener("click", onFavBtnClick);

function onFavBtnClick() {
  favMenu.classList.toggle("show")
}