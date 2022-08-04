const buttonItem = document.querySelector(".two-category__buttons--link");
const imageItem = document.querySelector(".loading-image");
const blogItem = document.querySelector(".second-section");


buttonItem.addEventListener("click", () =>{
    imageItem.classList.remove("loading-image");
    imageItem.classList.add("loading-image__show");
    setTimeout(showLoader,2000);
})

function showLoader(){
    imageItem.classList.remove("loading-image__show");
    imageItem.classList.add("loading-image");
    blogItem.classList.add("second-section__show");
}