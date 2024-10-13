const openSidebar = document.querySelector('.show-mobile');
const sideBar = document.querySelector('.mobile-side-bar');
const closeSidebar = document.querySelector('.close');

openSidebar.addEventListener('click', ()=> {
    sideBar.style.display = 'flex'
})

closeSidebar.addEventListener('click', ()=> {
    sideBar.style.display = 'none';
})