(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function () {
  // Catalog show/hide
  function navShowHideDesktop(element) {
    $(element).on('click', function () {
      $(this).toggleClass('header__btn--active')
      $(this).toggleClass('nav__title--active');
      $('.nav').toggleClass('nav--active');
      $('.header__overlay').toggleClass('header__overlay--active');
    });
    $('.header__overlay').on('click', function () {
      $('.header__btn').removeClass('header__btn--active')
      $('.nav').removeClass('nav--active');
      $(this).removeClass('header__overlay--active');
    });
  }
  navShowHideDesktop('.header__btn');

  // Profile show/hide
  function profileShowHideDesktop(element) {
    $(element).on('click', function () {
      $(this).closest('.header__profile-wrapper').toggleClass('header__profile-wrapper--active');
      $('.header__overlay').toggleClass('header__overlay--active');
    });
    $('.header__overlay').on('click', function () {
      $('.header__profile-wrapper').removeClass('header__profile-wrapper--active');
      $('.header__overlay').removeClass('header__overlay--active');
    });
  }
  profileShowHideDesktop('.header__add-nav-item--profile');

  // Sign in
  function maskPhone () {
    $.mask.definitions['~'] = '[9]';
    $('.sign-in__form-input--phone').mask('+7 (~99) 999-99-99', {
      autoclear: false
    });
  }
  maskPhone();

  // Footer
  function showHideFooterNav () {
    $('.footer__nav-title-mobile').on('click', function () {
      $(this).closest('.footer__nav-group-mobile').toggleClass('footer__nav-group-mobile--active');
    });
  }
  showHideFooterNav();

  // Cover slider
  function initSliderCover () {
    let $coverSlider = $('.cover__slider');
    let $prevCtrl = $('.cover__nav-item--prev');
    let $nextCtrl = $('.cover__nav-item--next');

    $coverSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $prevCtrl.on('click', function () {
      $coverSlider.slick('slickPrev');
    });
    $nextCtrl.on('click', function () {
      $coverSlider.slick('slickNext');
    });

    $coverSlider.not('.slick-dots li').on('mouseenter mousemove', function () {
      $(this).find('.cover__item.slick-active').addClass('cover__item--active');
    });
    $coverSlider.on('mouseleave mouseout', function () {
      $(this).find('.cover__item.slick-active').removeClass('cover__item--active');
    });
    $prevCtrl.on('mouseenter mousemove', function () {
      $('.cover__item.slick-active').removeClass('cover__item--active');
    });
    $nextCtrl.on('mouseenter mousemove', function () {
      $('.cover__item.slick-active').removeClass('cover__item--active');
    });
    $('.slick-dots').find('li').on('mouseenter mousemove', function (event) {
      event.stopPropagation();
      $('.cover__item.slick-active').removeClass('cover__item--active');
    });
  }
  initSliderCover();

  // Popular categories slider
  function initSliderPopCategories() {
    let $popularCategoriesSlider = $('.popular-categories__slider');

    $popularCategoriesSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.popular-categories__nav-item--prev').on('click', function () {
      $popularCategoriesSlider.slick('slickPrev');
    });
    $('.popular-categories__nav-item--next').on('click', function () {
      $popularCategoriesSlider.slick('slickNext');
    });
  }
  initSliderPopCategories();

  // Popular products slider
  function initSliderPopProducts() {
    let $popularProductsSlider = $('.popular-products__slider');

    $popularProductsSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.popular-products__nav-item--prev').on('click', function () {
      $popularProductsSlider.slick('slickPrev');
    });
    $('.popular-products__nav-item--next').on('click', function () {
      $popularProductsSlider.slick('slickNext');
    });
  }
  initSliderPopProducts();

  // Tools by type slider
  function initSliderToolsByType() {
    let $toolsByTypeSlider = $('.tools-by-type__slider');

    $toolsByTypeSlider.on('init', function (event, slick, direction) {
      let dots = $('.slick-dots');
      $('.tools-by-type__container:last-child').prepend(dots);
      $('.slick-dots:first-child, .slick-dots:nth-child(2), .slick-dots:nth-child(3)').remove();
      console.log(dots)
      // $("#yourElement").after("<p>Element was there</p>").appendTo("body");
    });

    $toolsByTypeSlider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.tools-by-type__nav-item--prev').on('click', function () {
      $toolsByTypeSlider.slick('slickPrev');
    });
    $('.tools-by-type__nav-item--next').on('click', function () {
      $toolsByTypeSlider.slick('slickNext');
    });
  }
  initSliderToolsByType();

  // Tools by type show/hide
  function showHideToolsByType() {
    $('.tools-by-type__arrow').on('click', function () {
      $(this).toggleClass('tools-by-type__arrow--active');
    });
  }
  showHideToolsByType();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIENhdGFsb2cgc2hvdy9oaWRlXG4gIGZ1bmN0aW9uIG5hdlNob3dIaWRlRGVza3RvcChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX2J0bi0tYWN0aXZlJylcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ25hdl9fdGl0bGUtLWFjdGl2ZScpO1xuICAgICAgJCgnLm5hdicpLnRvZ2dsZUNsYXNzKCduYXYtLWFjdGl2ZScpO1xuICAgICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgICQoJy5oZWFkZXJfX292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuaGVhZGVyX19idG4nKS5yZW1vdmVDbGFzcygnaGVhZGVyX19idG4tLWFjdGl2ZScpXG4gICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIG5hdlNob3dIaWRlRGVza3RvcCgnLmhlYWRlcl9fYnRuJyk7XG5cbiAgLy8gUHJvZmlsZSBzaG93L2hpZGVcbiAgZnVuY3Rpb24gcHJvZmlsZVNob3dIaWRlRGVza3RvcChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkZXJfX3Byb2ZpbGUtd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX3Byb2ZpbGUtd3JhcHBlci0tYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyX19vdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5oZWFkZXJfX3Byb2ZpbGUtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX3Byb2ZpbGUtd3JhcHBlci0tYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyX19vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbiAgcHJvZmlsZVNob3dIaWRlRGVza3RvcCgnLmhlYWRlcl9fYWRkLW5hdi1pdGVtLS1wcm9maWxlJyk7XG5cbiAgLy8gU2lnbiBpblxuICBmdW5jdGlvbiBtYXNrUGhvbmUgKCkge1xuICAgICQubWFzay5kZWZpbml0aW9uc1snfiddID0gJ1s5XSc7XG4gICAgJCgnLnNpZ24taW5fX2Zvcm0taW5wdXQtLXBob25lJykubWFzaygnKzcgKH45OSkgOTk5LTk5LTk5Jywge1xuICAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIG1hc2tQaG9uZSgpO1xuXG4gIC8vIEZvb3RlclxuICBmdW5jdGlvbiBzaG93SGlkZUZvb3Rlck5hdiAoKSB7XG4gICAgJCgnLmZvb3Rlcl9fbmF2LXRpdGxlLW1vYmlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvb3Rlcl9fbmF2LWdyb3VwLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX25hdi1ncm91cC1tb2JpbGUtLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIHNob3dIaWRlRm9vdGVyTmF2KCk7XG5cbiAgLy8gQ292ZXIgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJDb3ZlciAoKSB7XG4gICAgbGV0ICRjb3ZlclNsaWRlciA9ICQoJy5jb3Zlcl9fc2xpZGVyJyk7XG4gICAgbGV0ICRwcmV2Q3RybCA9ICQoJy5jb3Zlcl9fbmF2LWl0ZW0tLXByZXYnKTtcbiAgICBsZXQgJG5leHRDdHJsID0gJCgnLmNvdmVyX19uYXYtaXRlbS0tbmV4dCcpO1xuXG4gICAgJGNvdmVyU2xpZGVyLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWVcbiAgICB9KTtcbiAgICAkcHJldkN0cmwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJGNvdmVyU2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICB9KTtcbiAgICAkbmV4dEN0cmwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJGNvdmVyU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcblxuICAgICRjb3ZlclNsaWRlci5ub3QoJy5zbGljay1kb3RzIGxpJykub24oJ21vdXNlZW50ZXIgbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5maW5kKCcuY292ZXJfX2l0ZW0uc2xpY2stYWN0aXZlJykuYWRkQ2xhc3MoJ2NvdmVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkY292ZXJTbGlkZXIub24oJ21vdXNlbGVhdmUgbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5jb3Zlcl9faXRlbS5zbGljay1hY3RpdmUnKS5yZW1vdmVDbGFzcygnY292ZXJfX2l0ZW0tLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgICRwcmV2Q3RybC5vbignbW91c2VlbnRlciBtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuY292ZXJfX2l0ZW0uc2xpY2stYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2NvdmVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkbmV4dEN0cmwub24oJ21vdXNlZW50ZXIgbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLmNvdmVyX19pdGVtLnNsaWNrLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdjb3Zlcl9faXRlbS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgJCgnLnNsaWNrLWRvdHMnKS5maW5kKCdsaScpLm9uKCdtb3VzZWVudGVyIG1vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkKCcuY292ZXJfX2l0ZW0uc2xpY2stYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2NvdmVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyQ292ZXIoKTtcblxuICAvLyBQb3B1bGFyIGNhdGVnb3JpZXMgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJQb3BDYXRlZ29yaWVzKCkge1xuICAgIGxldCAkcG9wdWxhckNhdGVnb3JpZXNTbGlkZXIgPSAkKCcucG9wdWxhci1jYXRlZ29yaWVzX19zbGlkZXInKTtcblxuICAgICRwb3B1bGFyQ2F0ZWdvcmllc1NsaWRlci5zbGljayh7XG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiB0cnVlXG4gICAgfSk7XG4gICAgJCgnLnBvcHVsYXItY2F0ZWdvcmllc19fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcG9wdWxhckNhdGVnb3JpZXNTbGlkZXIuc2xpY2soJ3NsaWNrUHJldicpO1xuICAgIH0pO1xuICAgICQoJy5wb3B1bGFyLWNhdGVnb3JpZXNfX25hdi1pdGVtLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHBvcHVsYXJDYXRlZ29yaWVzU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyUG9wQ2F0ZWdvcmllcygpO1xuXG4gIC8vIFBvcHVsYXIgcHJvZHVjdHMgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJQb3BQcm9kdWN0cygpIHtcbiAgICBsZXQgJHBvcHVsYXJQcm9kdWN0c1NsaWRlciA9ICQoJy5wb3B1bGFyLXByb2R1Y3RzX19zbGlkZXInKTtcblxuICAgICRwb3B1bGFyUHJvZHVjdHNTbGlkZXIuc2xpY2soe1xuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZVxuICAgIH0pO1xuICAgICQoJy5wb3B1bGFyLXByb2R1Y3RzX19uYXYtaXRlbS0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICRwb3B1bGFyUHJvZHVjdHNTbGlkZXIuc2xpY2soJ3NsaWNrUHJldicpO1xuICAgIH0pO1xuICAgICQoJy5wb3B1bGFyLXByb2R1Y3RzX19uYXYtaXRlbS0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICRwb3B1bGFyUHJvZHVjdHNTbGlkZXIuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgIH0pO1xuICB9XG4gIGluaXRTbGlkZXJQb3BQcm9kdWN0cygpO1xuXG4gIC8vIFRvb2xzIGJ5IHR5cGUgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJUb29sc0J5VHlwZSgpIHtcbiAgICBsZXQgJHRvb2xzQnlUeXBlU2xpZGVyID0gJCgnLnRvb2xzLWJ5LXR5cGVfX3NsaWRlcicpO1xuXG4gICAgJHRvb2xzQnlUeXBlU2xpZGVyLm9uKCdpbml0JywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgZGlyZWN0aW9uKSB7XG4gICAgICBsZXQgZG90cyA9ICQoJy5zbGljay1kb3RzJyk7XG4gICAgICAkKCcudG9vbHMtYnktdHlwZV9fY29udGFpbmVyOmxhc3QtY2hpbGQnKS5wcmVwZW5kKGRvdHMpO1xuICAgICAgJCgnLnNsaWNrLWRvdHM6Zmlyc3QtY2hpbGQsIC5zbGljay1kb3RzOm50aC1jaGlsZCgyKSwgLnNsaWNrLWRvdHM6bnRoLWNoaWxkKDMpJykucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZyhkb3RzKVxuICAgICAgLy8gJChcIiN5b3VyRWxlbWVudFwiKS5hZnRlcihcIjxwPkVsZW1lbnQgd2FzIHRoZXJlPC9wPlwiKS5hcHBlbmRUbyhcImJvZHlcIik7XG4gICAgfSk7XG5cbiAgICAkdG9vbHNCeVR5cGVTbGlkZXIuc2xpY2soe1xuICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZVxuICAgIH0pO1xuICAgICQoJy50b29scy1ieS10eXBlX19uYXYtaXRlbS0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR0b29sc0J5VHlwZVNsaWRlci5zbGljaygnc2xpY2tQcmV2Jyk7XG4gICAgfSk7XG4gICAgJCgnLnRvb2xzLWJ5LXR5cGVfX25hdi1pdGVtLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHRvb2xzQnlUeXBlU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyVG9vbHNCeVR5cGUoKTtcblxuICAvLyBUb29scyBieSB0eXBlIHNob3cvaGlkZVxuICBmdW5jdGlvbiBzaG93SGlkZVRvb2xzQnlUeXBlKCkge1xuICAgICQoJy50b29scy1ieS10eXBlX19hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3Rvb2xzLWJ5LXR5cGVfX2Fycm93LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBzaG93SGlkZVRvb2xzQnlUeXBlKCk7XG59KTtcbiJdfQ==
