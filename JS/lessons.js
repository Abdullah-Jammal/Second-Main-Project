window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.school-head').style.transform = 'translate(50%, -100px)';
      document.querySelector('.school-head').style.opacity = 0;
    } else {
      document.querySelector('.school-head').style.transform = '';
      document.querySelector('.school-head').style.opacity = 1;
    }
  })
  // Scroll Up
let scroll_up = document.querySelector('.scroll-up')

window.onscroll = function () {
  if(scrollY >= 1100) {
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


// High School
let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let item5 = document.querySelector('.item5')
let item6 = document.querySelector('.item6')
let item7 = document.querySelector('.item7')
let item8 = document.querySelector('.item8')
let item9 = document.querySelector('.item9')
let item10 = document.querySelector('.item10')
let item11 = document.querySelector('.item11')
let item12 = document.querySelector('.item12')
let item13 = document.querySelector('.item13')

item1.onclick = () => {
  window.open('https://www.youtube.com/watch?v=Q5FJPMuvol8')
}

item2.onclick = () => {
  window.open('https://www.youtube.com/watch?v=mKGmdTUgTzM')
}

item3.onclick = () => {
  window.open('https://www.youtube.com/watch?v=mmRFjop2iHU')
}

item4.onclick = () => {
  window.open('https://www.youtube.com/watch?v=HJ8VcH_tLIw')
}

item5.onclick = () => {
  window.open('https://www.youtube.com/watch?v=FjAnQ-dL2_0')
}

item6.onclick = () => {
  window.open('https://www.youtube.com/watch?v=GcXE11Cpegk')
}

item7.onclick = () => {
  window.open('https://www.youtube.com/watch?v=ivJOa588tnI')
}

item8.onclick = () => {
  window.open('https://www.youtube.com/watch?v=U-Ibb5CyugE')
}

item9.onclick = () => {
  window.open('https://www.youtube.com/watch?v=Z1uw0NKAKcM')
}

item10.onclick = () => {
  window.open('https://www.youtube.com/watch?v=1YOe_Z4_C_0')
}

item11.onclick = () => {
  window.open('https://www.youtube.com/watch?v=dJwyb157VcU')
}

item12.onclick = () => {
  window.open('https://www.youtube.com/watch?v=V4B4teFxwE4&t=2s')
}

item13.onclick = () => {
  window.open('https://www.youtube.com/watch?v=h1jSDTgZEHQ')
}

// Primary School
let primary_school = document.querySelectorAll('.primary-school .primary-container > div')

primary_school.forEach((ele) => {
  ele.onclick = () => {
    window.open('https://learner.ta3leem.iq/apps/')
  }
})

// Elementry School
let elementry_school = document.querySelectorAll('.elementry-container > div')

elementry_school.forEach((ele) => {
  ele.onclick = () => {
    window.open('https://learner.ta3leem.iq/apps/')
  }
})
// End Teachers Video