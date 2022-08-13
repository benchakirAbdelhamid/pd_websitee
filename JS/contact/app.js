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
  
  
  
  // validation form
  
  
  const nom = document.getElementById('nom');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const text = document.getElementById('text');
  const form = document.querySelector("form");
  const formBtn = document.getElementById("formBtn"); 
  const input_check = document.querySelectorAll('#input_check')
  
  let nbr = 0;
  formBtn.addEventListener('click',function(){
   
    const regexNom = /[a-zA-Z]{4,}/;
    const regexEmail = /[a-zA-Z0-9]{3,}@(gmail)[.]+(com|net)/;
    const regexPhone = /(06|07|05)[0-9]{8}/;
    const regexText = /[a-zA-Z0-9\s]{10,}/;
    
    let numChecked = 0;
    input_check.forEach(check => {
      if(check.checked){
        check.previousElementSibling.style.color = 'green'
        numChecked += 1;
      }else{
        check.previousElementSibling.style.color = 'red'
      }
    })
  
    
    if( 
      regexNom.test(nom.value) && 
      regexEmail.test(email.value) &&  
      regexPhone.test(phone.value) &&
      regexText.test(text.value) &&
      (numChecked == 1 || numChecked > 1)  ){
        form.submit();
      }else{
        // console.log('novalide')
        styleValidation(regexNom,nom)
        styleValidation(regexEmail,email)
        styleValidation(regexPhone,phone)
        styleValidation(regexText,text)
        nbr += 1
    }
  
    function styleValidation(regex , input){
      if( regex.test(input.value)  ){
          input.style.border = '3px solid green'
      }else{
          input.style.border = '3px solid red'
      }
  }
  })
  
  

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