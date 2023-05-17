let ul = document.getElementsByClassName("main-list");
let hamburger = document.getElementsByClassName("hamburger");
let closeIcon = document.getElementsByClassName("close");

hamburger[0].addEventListener("click",()=>{
    hamburger[0].classList.remove("active");
    closeIcon[0].classList.add("active");
    ul[0].classList.add("show");
});
closeIcon[0].addEventListener("click",()=>{
    hamburger[0].classList.add("active");
    closeIcon[0].classList.remove("active");
    ul[0].classList.remove("show");
});


