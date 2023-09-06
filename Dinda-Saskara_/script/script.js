// alert('hai');
// $.getJSON('data/coba.json', function (data) {
//     let menu = data.navbar;
//     $.each(menu, function (i, data) {
//         console.log(data)
//         // $('daftar-menu').append('')
//     });
// });


// // Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di click
document.querySelector('#bars-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// click di luar sidebar untuk menghilangkan nav
const bars = document.querySelector('#bars-menu');

document.addEventListener('click', function(e){
    if(!bars.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})



// Ini juga bisa untuk hamburger menu (optional)
// hasilnya sama seperti yang diatas, hanya berbeda cara 

// const openMenu = document.querySelector('#bars-menu');

// openMenu.addEventListener('click' ,show);


// function show() {
//     navbarNav.style.right = '0';
// };




// Scroll effect pada navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    navbar.classList.toggle('sticky', window.scrollY > 10);
})


// JS untuk custom 
// menu image
























