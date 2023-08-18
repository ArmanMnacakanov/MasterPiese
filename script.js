var swiper = new Swiper('.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    }
});
var Menu_Btn = document.getElementById('Menu_Btn');
var Menu_Box = document.getElementById('Menu_Box');
var click = 0;

function myFunction(x) {
    if (x.matches) { // If media query matches
        Menu_Box.style.display = 'none'
    } else {
        Menu_Box.style.display = 'block'
    }
}
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
Menu_Btn.onclick = function () {
    if (click % 2 == 0) {
        Menu_Box.style.display = 'block'
    } else {
        Menu_Box.style.display = 'none'
    }
    click++
}
var Links = document.getElementsByClassName('Link')

function clickLink(){
    Menu_Box.style.display = 'none';
}
