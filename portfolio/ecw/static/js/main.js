$(document).ready(function () {
    // change lang
    $('.header__lang').on('click', function () {
       $('.header__lang-list').toggleClass('header__lang-list_active');
       $(this).toggleClass('header__lang_active');
    });

    // mobile nav show/hide
    $('.header__burger').on('click', function () {
        $('.header__nav').toggleClass('header__nav_active');
    });
});