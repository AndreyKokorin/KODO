// Running text
const nav = document.querySelectorAll(".nav");
const main = document.querySelector(".discount");
const about = document.querySelector(".about");
const kitchen = document.querySelector(".aboutKitchen");
const beverages = document.querySelector(".beverages");
const delivery = document.querySelector(".togo");
const kontacts = document.querySelector(".footer");

const scrollBlocks = [main, about ,kitchen, beverages, delivery, kontacts];
 

nav.forEach((item, i) => {
    item.addEventListener("click", () => {
        const topOffset = document.querySelector('.header').offsetHeight;
 
        const elementPosition = scrollBlocks[i].getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }) 
})

// animate sushi

const sushiImg = document.querySelector(".sushi__img");

window.addEventListener("scroll", () => {

    if(window.pageYOffset >= 335){
        sushiImg.classList.add("animImg");
    }
    else{
        sushiImg.classList.remove("animImg");
    }

});

// menu-burger

const burgerBtn = document.querySelector(".header__burger"); 
const menu = document.querySelector(".header_menu");

burgerBtn.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    burgerBtn.classList.toggle("header__burger_active");

})

menu.addEventListener("click", (e) => {
        if(e.target.tagName = "LI"){
            menu.classList.remove("active");
            burgerBtn.classList.remove("header__burger_active");
        }
})

