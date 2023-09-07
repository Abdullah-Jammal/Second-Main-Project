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

// Start About

let pic1 = document.querySelector('#about .pic1')
let pic2 = document.querySelector('#about .pic2')
let pic3 = document.querySelector('#about .pic3')
let pic4 = document.querySelector('#about .pic4')
let pic5 = document.querySelector('#about .pic5')

pic1.onclick = () => {
  let url = ('../pages/lessons.html')
  window.open(url, '_self')
}
pic2.onclick = () => {
  let url = ('../pages/schools.html')
  window.open(url, '_self')
}
pic3.onclick = () => {
  let url = ('../pages/tums.html')
  window.open(url, '_self')
}
pic4.onclick = () => {
  let url = ('#advanced')
  window.open(url, '_self')
}


// gsap.registerPlugin(ScrollTrigger)

// let tl = gsap.timeline()

// gsap.from('.about-contain .info h2', {
//   scrollTrigger: {
//     trigger: '.about-contain .info h2',
//     start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
//   duration: 1,
//   opacity: 0,
//   x: 300,
//   ease: "power3.out"
// })
// gsap.from('.about-contain .info p', {
//   scrollTrigger: {
//     trigger: '.about-contain .info h2',
//     start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
//   duration: 1,
//   opacity: 0,
//   x: 300,
//   ease: "power3.out"
// })
// let list = document.querySelectorAll('.about-contain .list ul li')
// console.log(list)
// gsap.from(list[0], {
//   scrollTrigger: {
//     trigger: '.about-contain .list ul',
//     // start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
//   duration: .6,
//   x: 1000,
//   ease: "back.out"
// })
// gsap.from(list[1], {
//   scrollTrigger: {
//     trigger: '.about-contain .list ul',
//     // start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
//   duration: .6,
//   x: 1000,
//   ease: "back.out"
// })
// gsap.from(list[2], {
//   scrollTrigger: {
//     trigger: '.about-contain .list ul',
//     // start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
  
//   duration: .6,
//   x: 1000,
//   ease: "back.out"
// })
// gsap.from(list[3], {
//   scrollTrigger: {
//     trigger: '.about-contain .list ul',
//     // start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
//   duration: .6,
//   x: 1000,
//   ease: "back.out"
// })
// gsap.from(list[4], {
//   scrollTrigger: {
//     trigger: '.about-contain .list ul',
//     // start: 'top 70%',
//     toggleActions: 'restart pause resume pause'
//   },
//   duration: .6,
//   x: 1000,
//   ease: "back.out"
// })

// End About

// Satrt Biograph

// End Biograph

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

//  slider code 

sliderholder = document.querySelector(".slider-holder")
leftbutton = sliderholder.querySelector('#left button')
rightbutton = sliderholder.querySelector("#right button")
itemcontainer = document.querySelector(".main-bio-container")

console.log(sliderholder , leftbutton);
//  actions 
leftbutton.addEventListener("click" , ()=>{
  itemcontainer.scrollLeft -= itemcontainer.querySelector(".contain").offsetWidth + 20
  
})

rightbutton.addEventListener("click" , ()=>{
  itemcontainer.scrollLeft += itemcontainer.querySelector(".contain").offsetWidth + 20
  
})
