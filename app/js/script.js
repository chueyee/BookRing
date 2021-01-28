// HEADER SCRIPT
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#overlay');
const wrap = document.querySelector('#wrap');
const wrapNavLinks = document.querySelector('#wrap_nav_links')

btnHamburger.addEventListener('click', function () {
    console.log('click hamburger');

    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        overlay.classList.remove('overlay');
        wrap.classList.add('wrap__close');
        wrapNavLinks.classList.add('wrap__menu_link_hide');

    } else {
        btnHamburger.classList.add('open');
        overlay.classList.add('overlay');
        wrap.classList.remove('wrap__close');
        wrapNavLinks.classList.remove('wrap__menu_link_hide');
    }
    
});