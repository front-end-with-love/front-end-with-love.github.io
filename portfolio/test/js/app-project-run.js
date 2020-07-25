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

    $coverSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.cover__nav-item--prev').on('click', function () {
      $coverSlider.slick('slickPrev');
    });
    $('.cover__nav-item--next').on('click', function () {
      $coverSlider.slick('slickNext');
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
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2F0YWxvZyBzaG93L2hpZGVcbiAgZnVuY3Rpb24gbmF2U2hvd0hpZGVEZXNrdG9wKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fYnRuLS1hY3RpdmUnKVxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnbmF2X190aXRsZS0tYWN0aXZlJyk7XG4gICAgICAkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyX19vdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5oZWFkZXJfX2J0bicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX2J0bi0tYWN0aXZlJylcbiAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygnbmF2LS1hY3RpdmUnKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbiAgbmF2U2hvd0hpZGVEZXNrdG9wKCcuaGVhZGVyX19idG4nKTtcblxuICAvLyBQcm9maWxlIHNob3cvaGlkZVxuICBmdW5jdGlvbiBwcm9maWxlU2hvd0hpZGVEZXNrdG9wKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmhlYWRlcl9fcHJvZmlsZS13cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fcHJvZmlsZS13cmFwcGVyLS1hY3RpdmUnKTtcbiAgICAgICQoJy5oZWFkZXJfX292ZXJsYXknKS50b2dnbGVDbGFzcygnaGVhZGVyX19vdmVybGF5LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkKCcuaGVhZGVyX19vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLmhlYWRlcl9fcHJvZmlsZS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fcHJvZmlsZS13cmFwcGVyLS1hY3RpdmUnKTtcbiAgICAgICQoJy5oZWFkZXJfX292ZXJsYXknKS5yZW1vdmVDbGFzcygnaGVhZGVyX19vdmVybGF5LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBwcm9maWxlU2hvd0hpZGVEZXNrdG9wKCcuaGVhZGVyX19hZGQtbmF2LWl0ZW0tLXByb2ZpbGUnKTtcblxuICAvLyBTaWduIGluXG4gIGZ1bmN0aW9uIG1hc2tQaG9uZSAoKSB7XG4gICAgJC5tYXNrLmRlZmluaXRpb25zWyd+J10gPSAnWzldJztcbiAgICAkKCcuc2lnbi1pbl9fZm9ybS1pbnB1dC0tcGhvbmUnKS5tYXNrKCcrNyAofjk5KSA5OTktOTktOTknLCB7XG4gICAgICBhdXRvY2xlYXI6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgbWFza1Bob25lKCk7XG5cbiAgLy8gRm9vdGVyXG4gIGZ1bmN0aW9uIHNob3dIaWRlRm9vdGVyTmF2ICgpIHtcbiAgICAkKCcuZm9vdGVyX19uYXYtdGl0bGUtbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZm9vdGVyX19uYXYtZ3JvdXAtbW9iaWxlJykudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fbmF2LWdyb3VwLW1vYmlsZS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0hpZGVGb290ZXJOYXYoKTtcblxuICAvLyBDb3ZlciBzbGlkZXJcbiAgZnVuY3Rpb24gaW5pdFNsaWRlckNvdmVyICgpIHtcbiAgICBsZXQgJGNvdmVyU2xpZGVyID0gJCgnLmNvdmVyX19zbGlkZXInKTtcblxuICAgICRjb3ZlclNsaWRlci5zbGljayh7XG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiB0cnVlXG4gICAgfSk7XG4gICAgJCgnLmNvdmVyX19uYXYtaXRlbS0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICRjb3ZlclNsaWRlci5zbGljaygnc2xpY2tQcmV2Jyk7XG4gICAgfSk7XG4gICAgJCgnLmNvdmVyX19uYXYtaXRlbS0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICRjb3ZlclNsaWRlci5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgfSk7XG4gIH1cbiAgaW5pdFNsaWRlckNvdmVyKCk7XG5cbiAgLy8gUG9wdWxhciBjYXRlZ29yaWVzIHNsaWRlclxuICBmdW5jdGlvbiBpbml0U2xpZGVyUG9wQ2F0ZWdvcmllcygpIHtcbiAgICBsZXQgJHBvcHVsYXJDYXRlZ29yaWVzU2xpZGVyID0gJCgnLnBvcHVsYXItY2F0ZWdvcmllc19fc2xpZGVyJyk7XG5cbiAgICAkcG9wdWxhckNhdGVnb3JpZXNTbGlkZXIuc2xpY2soe1xuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZVxuICAgIH0pO1xuICAgICQoJy5wb3B1bGFyLWNhdGVnb3JpZXNfX25hdi1pdGVtLS1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHBvcHVsYXJDYXRlZ29yaWVzU2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICB9KTtcbiAgICAkKCcucG9wdWxhci1jYXRlZ29yaWVzX19uYXYtaXRlbS0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICRwb3B1bGFyQ2F0ZWdvcmllc1NsaWRlci5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgfSk7XG4gIH1cbiAgaW5pdFNsaWRlclBvcENhdGVnb3JpZXMoKTtcblxuICAvLyBQb3B1bGFyIHByb2R1Y3RzIHNsaWRlclxuICBmdW5jdGlvbiBpbml0U2xpZGVyUG9wUHJvZHVjdHMoKSB7XG4gICAgbGV0ICRwb3B1bGFyUHJvZHVjdHNTbGlkZXIgPSAkKCcucG9wdWxhci1wcm9kdWN0c19fc2xpZGVyJyk7XG5cbiAgICAkcG9wdWxhclByb2R1Y3RzU2xpZGVyLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWVcbiAgICB9KTtcbiAgICAkKCcucG9wdWxhci1wcm9kdWN0c19fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcG9wdWxhclByb2R1Y3RzU2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICB9KTtcbiAgICAkKCcucG9wdWxhci1wcm9kdWN0c19fbmF2LWl0ZW0tLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcG9wdWxhclByb2R1Y3RzU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyUG9wUHJvZHVjdHMoKTtcblxuICAvLyBUb29scyBieSB0eXBlIHNsaWRlclxuICBmdW5jdGlvbiBpbml0U2xpZGVyVG9vbHNCeVR5cGUoKSB7XG4gICAgbGV0ICR0b29sc0J5VHlwZVNsaWRlciA9ICQoJy50b29scy1ieS10eXBlX19zbGlkZXInKTtcblxuICAgICR0b29sc0J5VHlwZVNsaWRlci5zbGljayh7XG4gICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiB0cnVlXG4gICAgfSk7XG4gICAgJCgnLnRvb2xzLWJ5LXR5cGVfX25hdi1pdGVtLS1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHRvb2xzQnlUeXBlU2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICB9KTtcbiAgICAkKCcudG9vbHMtYnktdHlwZV9fbmF2LWl0ZW0tLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdG9vbHNCeVR5cGVTbGlkZXIuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgIH0pO1xuICB9XG4gIGluaXRTbGlkZXJUb29sc0J5VHlwZSgpO1xufSk7XG4iXX0=
