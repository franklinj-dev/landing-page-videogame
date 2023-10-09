let menu = document.getElementById('menu');
let menuMobile = document.querySelector('.menu-mobile');

function menuBar(){
    if(menuMobile.classList.contains('inactive')){
        menuMobile.classList.remove('inactive');
        menuMobile.classList.add('active');
    } else if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active');
        menuMobile.classList.add('inactive');
    }
}


console.log(menu);
console.log(menuMobile);

menu.addEventListener('click',menuBar);
