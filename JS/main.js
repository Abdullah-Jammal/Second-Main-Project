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



// Start Teachers Video


if (document.querySelector('#flagPageone')) {
  
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
}

if (document.querySelector('.sms-flag')) {
  // Start Display Youtube Video List

let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let ten = document.querySelector('.ten')
let eleven = document.querySelector('.eleven')
let twelve = document.querySelector('.twelve')
let thirteen = document.querySelector('.thirteen')
let fourteen = document.querySelector('.fourteen')
let fifteen = document.querySelector('.fifteen')
let sixteen = document.querySelector('.sixteen')
let seventeen = document.querySelector('.seventeen')
let eighteen = document.querySelector('.eighteen')
let ninteen = document.querySelector('.ninteen')
let twenty = document.querySelector('.twenty')
let newIfram = document.querySelector('.newIfram')
let btn_act = document.querySelectorAll('.btn-act')

one.onclick = () => {
  removeActive()
  addActive(one)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/eLkV6PPiaeo')
}

two.onclick = () => {
  removeActive()
  addActive(two)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/ip63CUhulzM')
}

three.onclick = () => {
  removeActive()
  addActive(three)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/386UX5BjQDc')
}

four.onclick = () => {
  removeActive()
  addActive(four)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/LwAQmMjC3yA')
}

five.onclick = () => {
  removeActive()
  addActive(five)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/XzDlrfg5wXY')
}

six.onclick = () => {
  removeActive()
  addActive(six)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/rj1NwxojI2Y')
}
seven.onclick = () => {
  removeActive()
  addActive(seven)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/RMNLZkFkCWE')
}

eight.onclick = () => {
  removeActive()
  addActive(eight)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/ewMuSTHx8_I')
}

nine.onclick = () => {
  removeActive()
  addActive(nine)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/tqiyccMUkpU')
}

ten.onclick = () => {
  removeActive()
  addActive(ten)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/seA_IycX-mw')
}
//
twelve.onclick = () => {
  removeActive()
  addActive(twelve)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/Zbb8bGpeQyU')
}

eleven.onclick = () => {
  removeActive()
  addActive(eleven)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/-SBj5UiaVQY')
}

thirteen.onclick = () => {
  removeActive()
  addActive(thirteen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/MLyqXPWO9Sc')
}

fourteen.onclick = () => {
  removeActive()
  addActive(fourteen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/5Vq1TIFZBVc')
}

fifteen.onclick = () => {
  removeActive()
  addActive(fifteen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/czImUpxNWow')
}

sixteen.onclick = () => {
  removeActive()
  addActive(sixteen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/ik6EEaZxZ9E')
}
seventeen.onclick = () => {
  removeActive()
  addActive(seventeen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/Gu6AJguOL00')
}

eighteen.onclick = () => {
  removeActive()
  addActive(eighteen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/bQLhrQfAoPU')
}

ninteen.onclick = () => {
  removeActive()
  addActive(ninteen)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/NjKBjgMfzFE')
}
twenty.onclick = () => {
  removeActive()
  addActive(twenty)
  newIfram.setAttribute('src', 'https://www.youtube.com/embed/nl5Xj8MLI5w')
}

function removeActive() {
  btn_act.forEach((ele) => {
    ele.classList.remove('active')
  })
}

function addActive(ele) {
  ele.classList.add('active')
}

// Start Athorized
let docList = [
  {
    name: 'baghdad_rasafa',
    img: '../Images/doc/G2.jpg'
  },
  {
    name: 'baghdad',
    img: '../Images/doc/G11.jpg'
  },
  {
    name: 'baghdad',
    img: '../Images/doc/G12.jpg'
  },
  {
    name: 'baghdad_rasafa',
    img: '../Images/doc/G3.jpg'
  },
  {
    name: 'baghdad',
    img: '../Images/doc/G5.jpg'
  },
  {
    name: 'karblaa',
    img: '../Images/doc/G1.jpg'
  },
  {
    name: 'karkok',
    img: '../Images/doc/G9.jpg'
  },
  {
    name: 'al-najaf',
    img: '../Images/doc/G4.jpg'
  },
  {
    name: 'al_basra',
    img: '../Images/doc/G7.jpg'
  },
  {
    name: 'de_kar',
    img: '../Images/doc/G8.jpg'
  },
  {
    name: 'al_kadesya',
    img: '../Images/doc/G10.jpg'
  },
  {
    name: 'al_anbar',
    img: '../Images/doc/G13.jpg'
  },
  {
    name: 'mesan',
    img: '../Images/doc/G6.jpg'
  }
]

let baghdad = document.querySelector('.baghdad') // Done
let baghdad_rasafa = document.querySelector('.baghdad-rasafa')
let al_anbar = document.querySelector('.al-anbar') // Done
let al_kadesya = document.querySelector('.al-kadesya') // Done
let karkok = document.querySelector('.karkok') // Done
let de_kar = document.querySelector('.de-kar') // Done
let al_basra = document.querySelector('.al-basra') // Done
let mesan = document.querySelector('.mesan') // Done
let al_najaf = document.querySelector('.al-najaf') // Done
let karblaa = document.querySelector('.karblaa')
let first_doc = document.querySelector('.documantation')
let province = document.querySelectorAll('.province')

//Baghdad
baghdad.addEventListener('click', displayBaghdad);
function displayBaghdad() {
  removeAll()
  removeActivate()
  activateBtn(baghdad)
  let filterBaghdad = docList.filter((ele, ind) => {
    return ele.name === 'baghdad'
  })
  for(let i = 0; i < filterBaghdad.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterBaghdad[i].img)
    first_doc.appendChild(newImg)
  }
}
displayBaghdad();

// Karkok
baghdad_rasafa.addEventListener('click', displayBagRasafa)
function displayBagRasafa() {
  removeAll()
  removeActivate()
  activateBtn(baghdad_rasafa)
  let filterRasafa = docList.filter((ele) => {
    return ele.name === 'baghdad_rasafa'
  })
  for(let i = 0; i < filterRasafa.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterRasafa[i].img)
    first_doc.appendChild(newImg)
  }
}

// Karkok
karkok.addEventListener('click', displayKarkok)
function displayKarkok() {
  removeAll()
  removeActivate()
  activateBtn(karkok)
  let filterKarkok = docList.filter((ele) => {
    return ele.name === 'karkok'
  })
  for(let i = 0; i < filterKarkok.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterKarkok[i].img)
    first_doc.appendChild(newImg)
  }
}

// Mesan
mesan.addEventListener('click', displayMesan)
function displayMesan() {
  removeAll()
  removeActivate()
  activateBtn(mesan)
  let filterMesan = docList.filter((ele) => {
    return ele.name === 'mesan'
  })
  for(let i = 0; i < filterMesan.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterMesan[i].img)
    first_doc.appendChild(newImg)
  }
}

// Al-anbar
al_anbar.addEventListener('click', displayAlanbar)
function displayAlanbar() {
  removeAll()
  removeActivate()
  activateBtn(al_anbar)
  let filterAnbar = docList.filter((ele) => {
    return ele.name === 'al_anbar'
  })
  for(let i = 0; i < filterAnbar.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterAnbar[i].img)
    first_doc.appendChild(newImg)
  }
}

// al_kadesya
al_kadesya.addEventListener('click', displayKadesya)
function displayKadesya() {
  removeAll()
  removeActivate()
  activateBtn(al_kadesya)
  let filterKadsya = docList.filter((ele) => {
    return ele.name === 'al_kadesya'
  })
  for(let i = 0; i < filterKadsya.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterKadsya[i].img)
    first_doc.appendChild(newImg)
  }
}

// de_kar
de_kar.addEventListener('click', displayDekar)
function displayDekar() {
  removeAll()
  removeActivate()
  activateBtn(de_kar)
  let filterDekar = docList.filter((ele) => {
    return ele.name === 'de_kar'
  })
  for(let i = 0; i < filterDekar.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterDekar[i].img)
    first_doc.appendChild(newImg)
  }
}

// al_basra
al_basra.addEventListener('click', displayBasra)
function displayBasra() {
  removeAll()
  removeActivate()
  activateBtn(al_basra)
  let filterBasra = docList.filter((ele) => {
    return ele.name === 'al_basra'
  })
  for(let i = 0; i < filterBasra.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterBasra[i].img)
    first_doc.appendChild(newImg)
  }
}

// al_najaf
al_najaf.addEventListener('click', displayNajaf)
function displayNajaf() {
  removeAll()
  removeActivate()
  activateBtn(al_najaf)
  let filterNajaf = docList.filter((ele) => {
    return ele.name === 'al-najaf'
  })
  for(let i = 0; i < filterNajaf.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterNajaf[i].img)
    first_doc.appendChild(newImg)
  }
}

// Karbala
karblaa.addEventListener('click', displayKarbala)
function displayKarbala() {
  removeAll()
  removeActivate()
  activateBtn(karblaa)
  let filterKarbala = docList.filter((ele) => {
    return ele.name === 'karblaa'
  })
  for(let i = 0; i < filterKarbala.length; i++) {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', filterKarbala[i].img)
    first_doc.appendChild(newImg)
  }
}

// Remove All
function removeAll() {
  for(let i = 0; i < docList.length; i++) {
    first_doc.innerHTML = ''
  }
}

// Remove Activate Btn
function removeActivate() {
  province.forEach((ele) => {
    ele.classList.remove('active')
  })
}
// Active Btn Function
function activateBtn(item) {
  item.classList.add('active')
}

window.addEventListener('scroll', function() {
  if(window.scrollY >= 200) {
    document.querySelector('.TSMS .tums-header').style.transform = 'translate(50%, -100px)';
    document.querySelector('.TSMS .tums-header').style.opacity = 0;
  } else {
    document.querySelector('.TSMS .tums-header').style.transform = '';
    document.querySelector('.TSMS .tums-header').style.opacity = 1;
  }
})
}

if (document.querySelector('.tums-main-page')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.first-picture .tums-header').style.transform = 'translate(50%, -100px)';
      document.querySelector('.first-picture .tums-header').style.opacity = 0;
    } else {
      document.querySelector('.first-picture .tums-header').style.transform = '';
      document.querySelector('.first-picture .tums-header').style.opacity = 1;
    }
  })
}

if(document.querySelector('.lesson-main-page')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.tums-header').style.transform = 'translate(50%, -100px)';
      document.querySelector('.tums-header').style.opacity = 0;
    } else {
      document.querySelector('.tums-header').style.transform = '';
      document.querySelector('.tums-header').style.opacity = 1;
    }
  })
}

if (document.querySelector('.English-Advanced-Flag')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.tums-header').style.transform = 'translate(50%, -100px)';
      document.querySelector('.tums-header').style.opacity = 0;
    } else {
      document.querySelector('.tums-header').style.transform = '';
      document.querySelector('.tums-header').style.opacity = 1;
    }
  })
}

if(document.querySelector('.Englis-TUMS-Flag')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.tums-header').style.transform = 'translate(50%, -100px)';
      document.querySelector('.tums-header').style.opacity = 0;
    } else {
      document.querySelector('.tums-header').style.transform = '';
      document.querySelector('.tums-header').style.opacity = 1;
    }
  })
}

if(document.querySelector('.English-Proctored-Flag')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.protection-head').style.transform = 'translate(50%, -100px)';
      document.querySelector('.protection-head').style.opacity = 0;
    } else {
      document.querySelector('.protection-head').style.transform = '';
      document.querySelector('.protection-head').style.opacity = 1;
    }
  })
}

if(document.querySelector('.English-Flag-Lesson')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.school-head').style.transform = 'translate(50%, -100px)';
      document.querySelector('.school-head').style.opacity = 0;
    } else {
      document.querySelector('.school-head').style.transform = '';
      document.querySelector('.school-head').style.opacity = 1;
    }
  })
}

if(document.querySelector('.Arabic-Flag-Lesson')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.school-head').style.transform = 'translate(50%, -100px)';
      document.querySelector('.school-head').style.opacity = 0;
    } else {
      document.querySelector('.school-head').style.transform = '';
      document.querySelector('.school-head').style.opacity = 1;
    }
  })
}

if(document.querySelector('.Arabic-Flag-Protection')) {
  window.addEventListener('scroll', function() {
    if(window.scrollY >= 200) {
      document.querySelector('.protection-head').style.transform = 'translate(50%, -100px)';
      document.querySelector('.protection-head').style.opacity = 0;
    } else {
      document.querySelector('.protection-head').style.transform = '';
      document.querySelector('.protection-head').style.opacity = 1;
    }
  })
}

if(document.querySelector('.Flag-Advance-Arabic')) {
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
