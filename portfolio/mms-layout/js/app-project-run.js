(function () {
  // Навигация по странице
  function initNav(element) {
    $(document).on("scroll", onScroll);

    $(element).on('click', function (event) {
      event.preventDefault();
      $(document).off("scroll");

      let data = $(this).data('section');
      let $section = $("section[data-section='" + data + "']");
      let $headerHeight = $('.header').outerHeight();
      let indent = ($section.offset().top) - $headerHeight;

      $(element).each(function () {
        $(this).removeClass('header__item--active');
      })
      $(this).addClass('header__item--active');

      let target = this.hash,
        menu = target;
      $target = $(target);

      $('html, body').animate({
        scrollTop: indent
      }, 1800, function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  }

  // Слушаем вертикальный скролл и определяем активный пункт навигации
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    $('.header__item--animate').each(function () {
      let curLink = $(this);
      let curLinkData = $(curLink).data('section');
      let refElement = $("section[data-section='" + curLinkData + "']");
      if (refElement.length) {
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
          $('.header__item--animate').removeClass('header__item--active');
          curLink.addClass('header__item--active');
        } else {
          curLink.removeClass('header__item--active');
        }
      }
    });
  }

  // Слайдер в карточках блока "Технологии"
  function initSliderTechnology(element, speed) {
    let $slider = $(element).find('.technology__item-slider');
    $slider.slick({
      autoplay: true,
      autoplaySpeed: speed,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      fade: true,
      cssEase: 'linear'
    });
  }

  // Открыть/закрыть мобильную навигацию
  function showHideMobileNav() {
    $('.header__btn.header__btn--mobile').on('click', function () {
      $('.header__nav--mobile').toggleClass('header__nav--active');
      $('.header__btn.header__btn--mobile').toggleClass('header__btn--close');
    });

    $('.header__nav--mobile .header__item').on('click', function () {
      $('.header__nav--mobile').toggleClass('header__nav--active');
      $('.header__btn.header__btn--mobile').toggleClass('header__btn--close');
    });
  }

  // Продукты. Слайдер на мобильных устройствах : начало
  function initProductsSlider() {
    // При загрузке страницы
    $(window).on('load', function () {
      // Если область просмотра браузера больше 640 и меньше или равно 1024
      if (640 < $(window).outerWidth() && $(window).outerWidth() <= 1024) {
        initSlickPrimary();
      } else {
        $('.products__container--primary-slider').filter('.slick-initialized').slick('unslick');
      }

      // Если область просмотра браузера меньше или равно 1024
      if ($(window).outerWidth() <= 1024) {
        initSlickSecondary();
      } else {
        $('.products__container--secondary-slider').filter('.slick-initialized').slick('unslick');
      }
    });

    // При изменении размера окна
    $(window).on('resize', function () {
      // Если область просмотра браузера больше 640 и меньше или равно 1024
      if (640 < $(window).outerWidth() && $(window).outerWidth() <= 1024) {
        initSlickPrimary();
      } else {
        $('.products__container--primary-slider').filter('.slick-initialized').slick('unslick');
      }

      // Если область просмотра браузера меньше или равно 1024
      if ($(window).outerWidth() <= 1024) {
        initSlickSecondary();
      } else {
        $('.products__container--secondary-slider').filter('.slick-initialized').slick('unslick');
      }
    });

    function initSlickPrimary() {
      $('.products__container--primary-slider').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 2,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 640,
            settings: 'unslick'
          }
        ]
      });
    }

    function initSlickSecondary() {
      $('.products__container--secondary-slider').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        prevArrow: $('.products__arrow--left'),
        nextArrow: $('.products__arrow--right'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              centerPadding: '0',
              dots: false,
              arrows: true,
              prevArrow: $('.products__arrow--left'),
              nextArrow: $('.products__arrow--right'),
            }
          }
        ]
      });
    }
  }

  // Продукты. Слайдер на мобильных устройствах : конец

  // Init
  initNav('.header__item--animate');
  initSliderTechnology('.technology__item--with-slider[data-slider="1"]', 4900);
  initSliderTechnology('.technology__item--with-slider[data-slider="2"]', 5800);
  initSliderTechnology('.technology__item--with-slider[data-slider="3"]', 6300);
  showHideMobileNav();
  initProductsSlider();
})();
