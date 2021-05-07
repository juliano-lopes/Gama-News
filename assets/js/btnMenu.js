const $section_nav = document.querySelector('.section-nav');
const $iconBurgerOpen = document.querySelector('.zmdi-menu');
const $iconBurgerClose = document.querySelector('.icon-close-menu');

$iconBurgerOpen.addEventListener('click', function() {
    $section_nav.classList.add('active-nav')
})

$iconBurgerClose.addEventListener('click', function() {
    $section_nav.classList.remove('active-nav')
})