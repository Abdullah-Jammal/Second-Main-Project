// Start Header
let menu_icon = document.querySelector('.menu-icon');
let mobileNav = document.querySelector('.nav-on-mobile');
let close_btn = document.querySelector('.close-icon')

menu_icon.onclick = () => {
  mobileNav.style.width = '100%'
}

close_btn.onclick = () => {
  mobileNav.style.width = '0'
}
// End Header

// Scroll Up
let scroll_up = document.querySelector('.scroll-up')

window.onscroll = function () {
  if(scrollY >= 700) {
    scroll_up.classList.add("show");
  } else {
    scroll_up.classList.remove("show");
  }
}

scroll_up.onclick = () => {
  scrollTo({
    top : 0,
    behavior : 'smooth'
  })
}

// Statr Slider code 
sliderholder = document.querySelector(".slider-holder")
leftbutton = sliderholder.querySelector('#left button')
rightbutton = sliderholder.querySelector("#right button")
itemcontainer = document.querySelector(".main-bio-container")

rightbutton.addEventListener("click" , ()=>{
  itemcontainer.scrollLeft -= itemcontainer.querySelector(".contain").offsetWidth + 20
})

leftbutton.addEventListener("click" , ()=>{
  itemcontainer.scrollLeft += itemcontainer.querySelector(".contain").offsetWidth + 20
})
// End Slider Code
