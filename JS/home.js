

if (document.querySelector('.home-main-page-flag')) {
// Start Header
let menu_icon = document.querySelector('.menu-icon');
let mobileNav = document.querySelector('.nav-on-mobile');
let close_btn = document.querySelector('.close-icon');

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


if(document.querySelector('#flagPageone')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.main-header').style.transform = 'translate(50%, -100px)';
      document.querySelector('.main-header').style.opacity = 0;
    } else {
      document.querySelector('.main-header').style.transform = '';
      document.querySelector('.main-header').style.opacity = 1;
    }
  })
}
}


// IELTS 

if (document.querySelector('.ielts-flag')) {
let menu_icon = document.querySelector('.menu-icon');
let mobileNav = document.querySelector('.nav-on-mobile');
let close_btn = document.querySelector('.close-icon');

menu_icon.onclick = () => {
  mobileNav.style.width = '100%'
}

close_btn.onclick = () => {
  mobileNav.style.width = '0'
}


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

if(document.querySelector('#flagPageone')) {
    window.addEventListener('scroll', function() {
      if(window.scrollY >= 200) {
        document.querySelector('.main-header').style.transform = 'translate(50%, -100px)';
        document.querySelector('.main-header').style.opacity = 0;
      } else {
        document.querySelector('.main-header').style.transform = '';
        document.querySelector('.main-header').style.opacity = 1;
      }
    })
  }
}
