
const showMenu = document.querySelector("i.fa-bars");
const hideMenu = document.querySelector("i.fa-times")
const realMenu = document.querySelector("div.hamburger-menu")


showMenu.addEventListener("click", function(){
  
  realMenu.classList.add("active");
  
});

hideMenu.addEventListener("click", function(){
  
  realMenu.classList.remove("active");
  
});

