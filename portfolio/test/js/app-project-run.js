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
  function profileShowHideDesktop() {
    $('.header__add-nav-item--profile').on('click', function () {
      $(this).closest('.header__profile-wrapper').toggleClass('header__profile-wrapper--active');
      $('.header__overlay').toggleClass('header__overlay--active');
    });
    $('.header__overlay').on('click', function () {
      $('.header__profile-wrapper').removeClass('header__profile-wrapper--active');
      $('.header__overlay').removeClass('header__overlay--active');
    });

    $('.header__mobile-nav-item--profile').on('click', function () {
      $(this).closest('.header__profile-wrapper').toggleClass('header__profile-wrapper--active');
      $('.header--mobile').find('.header__profile-list').toggleClass('header__profile-list--active');
      $('.header__overlay').toggleClass('header__overlay--active');
    });
    $('.header__overlay').on('click', function () {
      $('.header__profile-list').toggleClass('header__profile-list--active');
      $('.header__overlay').removeClass('header__overlay--active');
    });
  }
  profileShowHideDesktop();

  // Sign in
  function maskPhone () {
    $.mask.definitions['~'] = '[9]';
    $('.sign-in__form-input--phone').mask('+7 (~99) 999-99-99', {
      autoclear: false
    });
  }
  maskPhone();

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
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
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
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2
          }
        }
      ]
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
      let dots = $('.tools-by-type .slick-dots');
      $('.tools-by-type__container:last-child').prepend(dots);
      $('.tools-by-type .slick-dots:first-child, .tools-by-type .slick-dots:nth-child(2), .tools-by-type .slick-dots:nth-child(3)').remove();
    });

    $toolsByTypeSlider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        }
      ]
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

  // Banners slider
  function initSliderBanners() {
    let $bannersSlider = $('.banners__slider');

    $bannersSlider.slick({
      mobileFirst: true,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: "unslick",
        slidesToShow: 1
      }]
    });
    $('.banners__nav-item--prev').on('click', function () {
      $bannersSlider.slick('slickPrev');
    });
    $('.banners__nav-item--next').on('click', function () {
      $bannersSlider.slick('slickNext');
    });
  }
  initSliderBanners();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIENhdGFsb2cgc2hvdy9oaWRlXG4gIGZ1bmN0aW9uIG5hdlNob3dIaWRlRGVza3RvcChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX2J0bi0tYWN0aXZlJylcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ25hdl9fdGl0bGUtLWFjdGl2ZScpO1xuICAgICAgJCgnLm5hdicpLnRvZ2dsZUNsYXNzKCduYXYtLWFjdGl2ZScpO1xuICAgICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgICQoJy5oZWFkZXJfX292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuaGVhZGVyX19idG4nKS5yZW1vdmVDbGFzcygnaGVhZGVyX19idG4tLWFjdGl2ZScpXG4gICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIG5hdlNob3dIaWRlRGVza3RvcCgnLmhlYWRlcl9fYnRuJyk7XG5cbiAgLy8gUHJvZmlsZSBzaG93L2hpZGVcbiAgZnVuY3Rpb24gcHJvZmlsZVNob3dIaWRlRGVza3RvcCgpIHtcbiAgICAkKCcuaGVhZGVyX19hZGQtbmF2LWl0ZW0tLXByb2ZpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkZXJfX3Byb2ZpbGUtd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX3Byb2ZpbGUtd3JhcHBlci0tYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyX19vdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5oZWFkZXJfX3Byb2ZpbGUtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX3Byb2ZpbGUtd3JhcHBlci0tYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyX19vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuaGVhZGVyX19tb2JpbGUtbmF2LWl0ZW0tLXByb2ZpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkZXJfX3Byb2ZpbGUtd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX3Byb2ZpbGUtd3JhcHBlci0tYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyLS1tb2JpbGUnKS5maW5kKCcuaGVhZGVyX19wcm9maWxlLWxpc3QnKS50b2dnbGVDbGFzcygnaGVhZGVyX19wcm9maWxlLWxpc3QtLWFjdGl2ZScpO1xuICAgICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgICQoJy5oZWFkZXJfX292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuaGVhZGVyX19wcm9maWxlLWxpc3QnKS50b2dnbGVDbGFzcygnaGVhZGVyX19wcm9maWxlLWxpc3QtLWFjdGl2ZScpO1xuICAgICAgJCgnLmhlYWRlcl9fb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIHByb2ZpbGVTaG93SGlkZURlc2t0b3AoKTtcblxuICAvLyBTaWduIGluXG4gIGZ1bmN0aW9uIG1hc2tQaG9uZSAoKSB7XG4gICAgJC5tYXNrLmRlZmluaXRpb25zWyd+J10gPSAnWzldJztcbiAgICAkKCcuc2lnbi1pbl9fZm9ybS1pbnB1dC0tcGhvbmUnKS5tYXNrKCcrNyAofjk5KSA5OTktOTktOTknLCB7XG4gICAgICBhdXRvY2xlYXI6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgbWFza1Bob25lKCk7XG5cbiAgLy8gQ292ZXIgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJDb3ZlciAoKSB7XG4gICAgbGV0ICRjb3ZlclNsaWRlciA9ICQoJy5jb3Zlcl9fc2xpZGVyJyk7XG4gICAgbGV0ICRwcmV2Q3RybCA9ICQoJy5jb3Zlcl9fbmF2LWl0ZW0tLXByZXYnKTtcbiAgICBsZXQgJG5leHRDdHJsID0gJCgnLmNvdmVyX19uYXYtaXRlbS0tbmV4dCcpO1xuXG4gICAgJGNvdmVyU2xpZGVyLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWVcbiAgICB9KTtcbiAgICAkcHJldkN0cmwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJGNvdmVyU2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICB9KTtcbiAgICAkbmV4dEN0cmwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJGNvdmVyU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcblxuICAgICRjb3ZlclNsaWRlci5ub3QoJy5zbGljay1kb3RzIGxpJykub24oJ21vdXNlZW50ZXIgbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5maW5kKCcuY292ZXJfX2l0ZW0uc2xpY2stYWN0aXZlJykuYWRkQ2xhc3MoJ2NvdmVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkY292ZXJTbGlkZXIub24oJ21vdXNlbGVhdmUgbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5jb3Zlcl9faXRlbS5zbGljay1hY3RpdmUnKS5yZW1vdmVDbGFzcygnY292ZXJfX2l0ZW0tLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgICRwcmV2Q3RybC5vbignbW91c2VlbnRlciBtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuY292ZXJfX2l0ZW0uc2xpY2stYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2NvdmVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkbmV4dEN0cmwub24oJ21vdXNlZW50ZXIgbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLmNvdmVyX19pdGVtLnNsaWNrLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdjb3Zlcl9faXRlbS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgJCgnLnNsaWNrLWRvdHMnKS5maW5kKCdsaScpLm9uKCdtb3VzZWVudGVyIG1vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkKCcuY292ZXJfX2l0ZW0uc2xpY2stYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2NvdmVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyQ292ZXIoKTtcblxuICAvLyBQb3B1bGFyIGNhdGVnb3JpZXMgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJQb3BDYXRlZ29yaWVzKCkge1xuICAgIGxldCAkcG9wdWxhckNhdGVnb3JpZXNTbGlkZXIgPSAkKCcucG9wdWxhci1jYXRlZ29yaWVzX19zbGlkZXInKTtcblxuICAgICRwb3B1bGFyQ2F0ZWdvcmllc1NsaWRlci5zbGljayh7XG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnLnBvcHVsYXItY2F0ZWdvcmllc19fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcG9wdWxhckNhdGVnb3JpZXNTbGlkZXIuc2xpY2soJ3NsaWNrUHJldicpO1xuICAgIH0pO1xuICAgICQoJy5wb3B1bGFyLWNhdGVnb3JpZXNfX25hdi1pdGVtLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHBvcHVsYXJDYXRlZ29yaWVzU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyUG9wQ2F0ZWdvcmllcygpO1xuXG4gIC8vIFBvcHVsYXIgcHJvZHVjdHMgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJQb3BQcm9kdWN0cygpIHtcbiAgICBsZXQgJHBvcHVsYXJQcm9kdWN0c1NsaWRlciA9ICQoJy5wb3B1bGFyLXByb2R1Y3RzX19zbGlkZXInKTtcblxuICAgICRwb3B1bGFyUHJvZHVjdHNTbGlkZXIuc2xpY2soe1xuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNjQwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcucG9wdWxhci1wcm9kdWN0c19fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcG9wdWxhclByb2R1Y3RzU2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcbiAgICB9KTtcbiAgICAkKCcucG9wdWxhci1wcm9kdWN0c19fbmF2LWl0ZW0tLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcG9wdWxhclByb2R1Y3RzU2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2xpZGVyUG9wUHJvZHVjdHMoKTtcblxuICAvLyBUb29scyBieSB0eXBlIHNsaWRlclxuICBmdW5jdGlvbiBpbml0U2xpZGVyVG9vbHNCeVR5cGUoKSB7XG4gICAgbGV0ICR0b29sc0J5VHlwZVNsaWRlciA9ICQoJy50b29scy1ieS10eXBlX19zbGlkZXInKTtcblxuICAgICR0b29sc0J5VHlwZVNsaWRlci5vbignaW5pdCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGRpcmVjdGlvbikge1xuICAgICAgbGV0IGRvdHMgPSAkKCcudG9vbHMtYnktdHlwZSAuc2xpY2stZG90cycpO1xuICAgICAgJCgnLnRvb2xzLWJ5LXR5cGVfX2NvbnRhaW5lcjpsYXN0LWNoaWxkJykucHJlcGVuZChkb3RzKTtcbiAgICAgICQoJy50b29scy1ieS10eXBlIC5zbGljay1kb3RzOmZpcnN0LWNoaWxkLCAudG9vbHMtYnktdHlwZSAuc2xpY2stZG90czpudGgtY2hpbGQoMiksIC50b29scy1ieS10eXBlIC5zbGljay1kb3RzOm50aC1jaGlsZCgzKScpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJHRvb2xzQnlUeXBlU2xpZGVyLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcudG9vbHMtYnktdHlwZV9fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdG9vbHNCeVR5cGVTbGlkZXIuc2xpY2soJ3NsaWNrUHJldicpO1xuICAgIH0pO1xuICAgICQoJy50b29scy1ieS10eXBlX19uYXYtaXRlbS0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR0b29sc0J5VHlwZVNsaWRlci5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgfSk7XG4gIH1cbiAgaW5pdFNsaWRlclRvb2xzQnlUeXBlKCk7XG5cbiAgLy8gVG9vbHMgYnkgdHlwZSBzaG93L2hpZGVcbiAgZnVuY3Rpb24gc2hvd0hpZGVUb29sc0J5VHlwZSgpIHtcbiAgICAkKCcudG9vbHMtYnktdHlwZV9fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd0b29scy1ieS10eXBlX19hcnJvdy0tYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0hpZGVUb29sc0J5VHlwZSgpO1xuXG4gIC8vIEJhbm5lcnMgc2xpZGVyXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJCYW5uZXJzKCkge1xuICAgIGxldCAkYmFubmVyc1NsaWRlciA9ICQoJy5iYW5uZXJzX19zbGlkZXInKTtcblxuICAgICRiYW5uZXJzU2xpZGVyLnNsaWNrKHtcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgfV1cbiAgICB9KTtcbiAgICAkKCcuYmFubmVyc19fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkYmFubmVyc1NsaWRlci5zbGljaygnc2xpY2tQcmV2Jyk7XG4gICAgfSk7XG4gICAgJCgnLmJhbm5lcnNfX25hdi1pdGVtLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJGJhbm5lcnNTbGlkZXIuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgIH0pO1xuICB9XG4gIGluaXRTbGlkZXJCYW5uZXJzKCk7XG59KTtcbiJdfQ==
