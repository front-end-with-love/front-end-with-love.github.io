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

  // Анимация появления элементов в блоке "Технологии"
  function animateElementsInTechnology() {
    $(window).scroll(function () {
      let $curElement = $('.technology');
      if ($curElement.length) {
        let top_of_element = $curElement.offset().top;
        let bottom_of_element = $curElement.offset().top + $curElement.outerHeight();
        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
          $curElement.addClass('technology--animate');
        } else {
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
  function showHideMobileNav () {
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
  function initProductsSlider () {
    $(window).on('load', function () {
      if ($(window).outerWidth() <= 1024) {
        initSlick();
      } else {
        $('.products__container--list').filter('.slick-initialized').slick('unslick');
      }
    });

    $(window).on('resize', function () {
      if ($(window).outerWidth() <= 1024) {
        initSlick();
      } else {
        $('.products__container--list').filter('.slick-initialized').slick('unslick');
      }
    });

    function initSlick() {
      $('.products__container--list').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
  // Продукты. Слайдер на мобильных устройствах : конец

  // Init
  initNav('.header__item--animate');
  animateElementsInTechnology();
  initSliderTechnology('.technology__item--with-slider[data-slider="1"]', 4900);
  initSliderTechnology('.technology__item--with-slider[data-slider="2"]', 5800);
  initSliderTechnology('.technology__item--with-slider[data-slider="3"]', 6300);
  showHideMobileNav();
  initProductsSlider();
})();
