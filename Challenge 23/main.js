const closeBtn = document.querySelector('.close-btn');
const hamberger = document.querySelector('.hamburger');
const mobileNavigation = document.querySelector('.mobile-nav');

closeBtn.addEventListener('click', ()=>{
    mobileNavigation.classList.remove('active')
    
})

hamberger.addEventListener('click', ()=> {
    mobileNavigation.classList.add('active');
})