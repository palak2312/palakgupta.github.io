burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-resp');
    rightnav.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');

})