const toggle = document.querySelector(".header_toggle");
const heroTitle = document.querySelector(".hero_title");
const navLink = document.querySelector(".nav_link");
const favLink = document.querySelector(".nav_link_fav");
const logo = document.querySelector(".logo_link");
const heroText = document.querySelector(".hero_text");
const coctailCardList = document.querySelector(".list_result");



toggle.addEventListener("change", onToggleChange);

function onToggleChange(evt) {
    console.log(evt.currentTarget.checked)
    if (evt.currentTarget.checked === true) {
        document.body.classList.add("dark_body")
        heroTitle.classList.add("dark")
        navLink.classList.add("dark")
        favLink.classList.add("dark")
        logo.classList.add("dark")
        heroText.classList.add("dark")
        Array.from(coctailCardList.children).forEach(item => item.classList.add("card"))


        
    } else {
        document.body.classList.remove("dark_body")
        heroTitle.classList.remove("dark")
        navLink.classList.remove("dark")
        favLink.classList.remove("dark")
        logo.classList.remove("dark")
        heroText.classList.remove("dark")
        coctailCard.classList.remove("card_dark")
    }
}