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
