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

// Start Open Our Services Links
let pic_1 = document.querySelector('.box-one .pic-1');
let pic_2 = document.querySelector('.box-one .pic-2')
let pic_3 = document.querySelector('.box-one .pic-3')
let pic_4 = document.querySelector('.box-two .pic-4')
let pic_5 = document.querySelector('.box-two .pic-5')
let pic_6 = document.querySelector('.box-two .pic-6')

pic_1.onclick = () => {
  let url = '../pages/lessons.html'
  window.open(url, '_self')
}

pic_5.onclick = () => {
  let url = '../pages/schools.html'
  window.open(url, '_self')
}

pic_3.onclick = () => {
  let url = '../pages/ta3lemPlus.html'
  window.open(url, '_self')
}

pic_2.onclick = () => {
  let url = '#advanced'
  window.open(url, '_self')
}

pic_6.onclick = () => {
  let url = '#ums'
  window.open(url, '_self')
}
// End Open Our Services Links

// Satrt Biograph
let biograph_one = document.querySelectorAll('.biography .one')

biograph_one.forEach((ele) => {
  ele.onclick = () => {
    removeBio()
    ele.classList.add('active')
  }
})

function removeBio() {
  for(let i = 0; i < biograph_one.length; i++) {
    biograph_one[i].classList.remove('active')
  }
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


