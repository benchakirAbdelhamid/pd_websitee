/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350){
      scrollUp.classList.add('show-scroll')
  }else{
      scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)


/** navbar toggle */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
elemArr[i].addEventListener("click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});
}


const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
if (window.scrollY >= 350) {
  header.classList.add("active");
  goTopBtn.classList.add("active");
} else {
  header.classList.remove("active");
  goTopBtn.classList.remove("active");
}
});       


// 

let icon = document.getElementById('icon_dark')
icon.onclick = function () {
  document.body.classList.toggle('dark-theme')
  if(document.body.classList.contains("dark-theme")){
      icon.src = 'Assets/Icons/sun.png';
  }else{
      icon.src = 'Assets/Icons/moon.png';
  }
}



// loading and background white ==>refreach
const fadeOut = ()=>{
const loaderWrapper = document.querySelector('.wrapper')
loaderWrapper.classList.add('fade')
}

window.addEventListener('load',fadeOut)