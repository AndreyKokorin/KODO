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

/* const sushiImg = document.querySelector(".sushi__img");

window.addEventListener("scroll", () => {
    console.log(window.pageYOffset)
    if(window.pageYOffset >= 335){
        sushiImg.classList.add("animImg");
    }
    else{
        sushiImg.classList.remove("animImg");
    }

}); */

