const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


//show sidebar menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})


//hide sidebar menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//toggle dark mode

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})