var headerItem = document.querySelector(".header");
var itemHeight = document.querySelector(".header").clientHeight;
var logoItem = document.querySelector(".logo");


window.onscroll = function() {
    if(window.scrollY > itemHeight){
        headerItem.classList.add("header-item")
        logoItem.classList.remove("logo")
        logoItem.classList.add("scroll-animate")
    }else  {
        headerItem.classList.remove("header-item")
        logoItem.classList.add("logo")
        logoItem.classList.remove("scroll-animate")
        document.body.style.paddingTop = '';
    }
}