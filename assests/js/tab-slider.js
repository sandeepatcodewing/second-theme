const filterContainer = document.querySelector(".list-item-menu"),
menuList = document.querySelectorAll(".list-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("title__topics--link")){
       // deactivate existing active 'filter-item'
       filterContainer.querySelector(".navigation-active").classList.remove("navigation-active");

       // activate new 'filter-item'
       event.target.classList.add("navigation-active");
       const filterValue = event.target.getAttribute("data-filter");
       menuList.forEach((item) =>{
          if(item.classList.contains(filterValue)){
              item.classList.remove("hide-item");
              item.classList.add("show-item");
          }
          else{
              item.classList.remove("show-item");
              item.classList.add("hide-item");
          }
       });
  }
});
