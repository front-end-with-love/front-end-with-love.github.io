// // Show/hide navigation
// function showHideNav() {
//   let btnBurger = document.getElementById('header__btn');
//   let nav = document.getElementById('nav');
//   let navOverlay = document.getElementById('nav__overlay');
//
//   btnBurger.addEventListener('click', event => {
//     btnBurger.classList.toggle('header__btn--close');
//     nav.classList.toggle('nav--active');
//     navOverlay.classList.toggle('nav__overlay--active');
//   });
// }
//
// showHideNav();


$(document).ready(function () {
  // init ticker
  function initSliderTicker() {
    $('.header__running-line').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 640,
          settings: 'unslick'
        }
      ]
    });
  }

  // show/hide search input
  function showHideSearchInput() {
    let $link = $('.header__btn.header__btn--search');
    let $textInputWrapper = $('.header__search-input-wrapper');

    $link.on('click', function () {
      $textInputWrapper.toggleClass('header__search-input-wrapper--active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
      if (!$textInputWrapper.is(e.target) && !$link.is(e.target) && $textInputWrapper.has(e.target).length === 0) { // и не по его дочерним элементам
        $textInputWrapper.removeClass('header__search-input-wrapper--active');
      }
    });
  }

  // show/hide mobile nav big
  function showHideMobileNavSmall() {
    let $link = $('.header__btn--burger');
    let $nav = $('.header__nav--mobile');

    $link.on('click', function () {
      $nav.toggleClass('header__nav--active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
      if (!$nav.is(e.target) && !$link.is(e.target) && $nav.has(e.target).length === 0) { // и не по его дочерним элементам
        $nav.removeClass('header__nav--active');
      }
    });
  }

  // show/hide mobile nav small
  function showHideMobileNavBig() {
    let $link = $('.header__menu-mobile-btn');
    let $nav = $('.header__menu-mobile-nav');

    $link.on('click', function () {
      $nav.toggleClass('header__menu-mobile-nav--active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
      if (!$nav.is(e.target) && !$link.is(e.target) && $nav.has(e.target).length === 0) { // и не по его дочерним элементам
        $nav.removeClass('header__menu-mobile-nav--active');
      }
    });
  }

  // cover slider
  function initSliderCover() {
    let $element = $('.cover__slider');
    if ($element.length) {
      $element.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        dots: true
      });
    }
  }

  // links to sections slider
  function initSliderLinksToSections() {
    let $element = $('.links-to-sections__slider');
    if ($element.length) {
      $element.slick({
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: true,
        initialSlide: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      });
    }
  }

  // models slider
  function initSliderModels() {
    let $element = $('.models__slider');
    if ($element.length) {
      $element.owlCarousel({
        autoPlay: 3000,
        navigation: false,
        items: 10,
        lazyLoad: true,
        responsive : {
          0 : {
            items: 1
          },
          320 : {
            items: 3
          },
          768 : {
            items: 5
          },
          1024 : {
            items: 7
          }
        }
      });
    }
  }

  // models slider
  function initSliderConceptModels() {
    $('.concept-models__slider').owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: false,
      items: 10,
      itemsDesktop: [1199, 6],
      itemsDesktopSmall: [979, 5],
      itemsTablet: [768, 3],
      itemsMobile: [479, 2],
      lazyLoad: true,
      responsive : {
        0 : {
          items: 1
        },
        320 : {
          items: 3
        },
        768 : {
          items: 5
        },
        1024 : {
          items: 7
        }
      }
    });
  }

  // video tabs
  function videoSwitchingTabs() {
    let control = $('.video__tabs-controls-item');
    $(control).on('click', function () {
      let dataNumber = $(this).data('tab');

      $(control).each(function (index, element) {
        $(element).removeClass('video__tabs-controls-item--active');
      });
      $('.video__tabs-content-item').each(function (index, element) {
        $(element).removeClass('video__tabs-content-item--active');
      });

      $('.video__tabs-controls-item[data-tab="' + dataNumber + '"]').addClass('video__tabs-controls-item--active');
      $('.video__tabs-content-item[data-tab="' + dataNumber + '"]').addClass('video__tabs-content-item--active');
    });
  }

  // init
  initSliderTicker();
  showHideSearchInput();
  initSliderCover();
  initSliderLinksToSections();
  initSliderModels();
  initSliderConceptModels();
  videoSwitchingTabs();
  showHideMobileNavSmall();
  showHideMobileNavBig();
});
