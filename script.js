const nav = document.getElementById('mobile-navbar');
const openBtn = document.getElementById('menu-open-btn');
const closeBtn = document.getElementById('menu-close-btn');

function mobileNav() {
    nav.style.display = 'flex';
}

function mobileNavClose() {
    nav.style.display = 'none';
}

openBtn.addEventListener('click', mobileNav);
closeBtn.addEventListener('click', mobileNavClose);



// Smooth Scroll 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)