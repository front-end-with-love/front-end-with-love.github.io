(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  // cover
  $('.cover').addClass('cover--animation');

  // init scrollr
  skrollr.init();

  // items
  function animateItem(element) {
    $(window).scroll(function() {
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(element).offset().top;
      var eh = $(element).outerHeight();
      var dh = $(document).height();
      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        $(element).find('.items__img').addClass('items__img--animation');
        $(element).find('.items__title').addClass('items__title--animation');
        $(element).find('.items__descr').addClass('items__descr--animation');
      }
    });
  }
  animateItem('.items__item--first');
  animateItem('.items__item--second');
  animateItem('.items__item--third');
  animateItem('.items__item--fourth');
  animateItem('.items__item--fifth');

  // instructions
  function animateIinstructions(element) {
    $(window).scroll(function() {
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(element).offset().top;
      var eh = $(element).outerHeight();
      var dh = $(document).height();
      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        $(element).addClass('instruction__img--animation')
      }
    });
  }
  animateIinstructions('.instruction__img--first');
  animateIinstructions('.instruction__img--second');
  animateIinstructions('.instruction__img--third');

  // slider
  $('.slider__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider__slider-nav',
    prevArrow: $('.slider__nav-item--prev'),
    nextArrow: $('.slider__nav-item--next')
  });
  $('.slider__nav-item--prev').on('click', function() {
    $('.slider__slider-for').slick('slickNext');
  });
  $('.slider__nav-item--next').on('click', function() {
    $('.slider__slider-for').slick('slickNext');
  });
  $('.slider__slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__slider-for',
    arrows: false,
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // map
  let windowWidth = $(window).outerWidth();
  if (windowWidth >= 992) {
    ymaps.ready(initDesktopMap);
    // https://github.com/inuyaksa/jquery.nicescroll
    // $('.statistics').niceScroll();

    // header. fixed top position
    // https://github.com/garand/sticky
    // $('.header').sticky({
    //   topSpacing: 0,
    //   zIndex: 4
    // });
  }

  function initDesktopMap() {
    // main (desktop) page
    let myMap;
    myMap = new ymaps.Map('map-index-page', {
      center: [55.75554289958026, 37.82209300000001],
      zoom: 9,
      controls: []
    });

    let myPlacemark = new ymaps.Placemark([55.75554289958026, 37.62209300000001], null, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map/icon-marker.svg',
      iconImageSize: [56, 68],
      iconImageOffset: [-28, -68]
    });
    myMap.geoObjects.add(myPlacemark);
  }

  // video
  function playVideo() {
    let videoCover = $('.video__cover');
    let videoPlayBtn = $('.video__play');
    let videoIframe = $('.video iframe');

    function clickCover(element) {
      $(element).on('click', function() {
        $(videoCover).hide();
        $(videoPlayBtn).hide();
        // $('#play').play();
        const plyr = new Plyr('#player', {
          autoplay: true,
          controls: [''],
          fullscreen: {
            enabeled: false
          },
          loop: {
            active: true
          }
        });

        // autoPlayVideo('bCxyckRVgxQ', '100%');
      });
    }
    clickCover(videoCover);
    clickCover(videoPlayBtn);
  }
  playVideo();

  function autoPlayVideo(vcode, width) {
    $('.video__container')
      .append('<iframe width="' + width + '" src="https://www.youtube.com/embed/' + vcode + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allow="autoplay" allowfullscreen wmode="Opaque"></iframe>');
  }

  // form
  function showHideForm(form, btn) {
    let overlay = $('.form__overlay');
    let close = $('.form__close');
    let body = $('body');

    function closeForm() {
      $(body).removeClass('body--hidden');
      $(form).removeClass('form--active');
      $(overlay).removeClass('form__overlay--active');
    }

    $(btn).on('click', function() {
      $(form).addClass('form--active');
      $(overlay).addClass('form__overlay--active');
      $(body).addClass('body--hidden');
    });

    $(overlay).on('click', function() {
      closeForm();
    });

    $(close).on('click', function() {
      closeForm();
    });
  }
  showHideForm('.form--request-for-callback', '.header__btn');
  showHideForm('.form--request-for-callback', '.map__btn');
  showHideForm('.form--ordering-product', '.descr__btn--order');
  showHideForm('.form--test-drive', '.descr__btn--test-drive');
  showHideForm('.form--test-drive', '.test__btn--test-drive');

  $.mask.definitions['~'] = '[9]';
  $('input[name="phone"]').mask('+7 (~99) 999-99-99', {
    autoclear: false
  });

  $('form').validate({
    highlight: function(element, errorClass) {
      $(element).add($(element).parent()).addClass('form__input-text--error');
    },
    unhighlight: function(element, errorClass) {
      $(element).add($(element).parent()).removeClass('form__input-text--error');
    },
    errorPlacement: function(error, element) {
      return true;
    }
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAvLyBjb3ZlclxuICAkKCcuY292ZXInKS5hZGRDbGFzcygnY292ZXItLWFuaW1hdGlvbicpO1xuXG4gIC8vIGluaXQgc2Nyb2xsclxuICBza3JvbGxyLmluaXQoKTtcblxuICAvLyBpdGVtc1xuICBmdW5jdGlvbiBhbmltYXRlSXRlbShlbGVtZW50KSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciB3dCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIHZhciB3aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIHZhciBldCA9ICQoZWxlbWVudCkub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIGVoID0gJChlbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIGRoID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XG4gICAgICBpZiAod3QgKyB3aCA+PSBldCB8fCB3aCArIHd0ID09IGRoIHx8IGVoICsgZXQgPCB3aCkge1xuICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5pdGVtc19faW1nJykuYWRkQ2xhc3MoJ2l0ZW1zX19pbWctLWFuaW1hdGlvbicpO1xuICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5pdGVtc19fdGl0bGUnKS5hZGRDbGFzcygnaXRlbXNfX3RpdGxlLS1hbmltYXRpb24nKTtcbiAgICAgICAgJChlbGVtZW50KS5maW5kKCcuaXRlbXNfX2Rlc2NyJykuYWRkQ2xhc3MoJ2l0ZW1zX19kZXNjci0tYW5pbWF0aW9uJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZUl0ZW0oJy5pdGVtc19faXRlbS0tZmlyc3QnKTtcbiAgYW5pbWF0ZUl0ZW0oJy5pdGVtc19faXRlbS0tc2Vjb25kJyk7XG4gIGFuaW1hdGVJdGVtKCcuaXRlbXNfX2l0ZW0tLXRoaXJkJyk7XG4gIGFuaW1hdGVJdGVtKCcuaXRlbXNfX2l0ZW0tLWZvdXJ0aCcpO1xuICBhbmltYXRlSXRlbSgnLml0ZW1zX19pdGVtLS1maWZ0aCcpO1xuXG4gIC8vIGluc3RydWN0aW9uc1xuICBmdW5jdGlvbiBhbmltYXRlSWluc3RydWN0aW9ucyhlbGVtZW50KSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciB3dCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIHZhciB3aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIHZhciBldCA9ICQoZWxlbWVudCkub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIGVoID0gJChlbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIGRoID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XG4gICAgICBpZiAod3QgKyB3aCA+PSBldCB8fCB3aCArIHd0ID09IGRoIHx8IGVoICsgZXQgPCB3aCkge1xuICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKCdpbnN0cnVjdGlvbl9faW1nLS1hbmltYXRpb24nKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFuaW1hdGVJaW5zdHJ1Y3Rpb25zKCcuaW5zdHJ1Y3Rpb25fX2ltZy0tZmlyc3QnKTtcbiAgYW5pbWF0ZUlpbnN0cnVjdGlvbnMoJy5pbnN0cnVjdGlvbl9faW1nLS1zZWNvbmQnKTtcbiAgYW5pbWF0ZUlpbnN0cnVjdGlvbnMoJy5pbnN0cnVjdGlvbl9faW1nLS10aGlyZCcpO1xuXG4gIC8vIHNsaWRlclxuICAkKCcuc2xpZGVyX19zbGlkZXItZm9yJykuc2xpY2soe1xuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIC8vIGZhZGU6IHRydWUsXG4gICAgYXNOYXZGb3I6ICcuc2xpZGVyX19zbGlkZXItbmF2JyxcbiAgICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX25hdi1pdGVtLS1wcmV2JyksXG4gICAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19uYXYtaXRlbS0tbmV4dCcpXG4gIH0pO1xuICAkKCcuc2xpZGVyX19uYXYtaXRlbS0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5zbGlkZXJfX3NsaWRlci1mb3InKS5zbGljaygnc2xpY2tOZXh0Jyk7XG4gIH0pO1xuICAkKCcuc2xpZGVyX19uYXYtaXRlbS0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5zbGlkZXJfX3NsaWRlci1mb3InKS5zbGljaygnc2xpY2tOZXh0Jyk7XG4gIH0pO1xuICAkKCcuc2xpZGVyX19zbGlkZXItbmF2Jykuc2xpY2soe1xuICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhc05hdkZvcjogJy5zbGlkZXJfX3NsaWRlci1mb3InLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgLy8gZG90czogdHJ1ZSxcbiAgICAvLyBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgYnJlYWtwb2ludDogMTM2MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgLy8gICBzZXR0aW5nczoge1xuICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIC8vICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgLy8gICB9XG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBicmVha3BvaW50OiA0ODAsXG4gICAgICAvLyAgIHNldHRpbmdzOiB7XG4gICAgICAvLyAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgLy8gICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgIF1cbiAgfSk7XG5cbiAgLy8gbWFwXG4gIGxldCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS5vdXRlcldpZHRoKCk7XG4gIGlmICh3aW5kb3dXaWR0aCA+PSA5OTIpIHtcbiAgICB5bWFwcy5yZWFkeShpbml0RGVza3RvcE1hcCk7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludXlha3NhL2pxdWVyeS5uaWNlc2Nyb2xsXG4gICAgLy8gJCgnLnN0YXRpc3RpY3MnKS5uaWNlU2Nyb2xsKCk7XG5cbiAgICAvLyBoZWFkZXIuIGZpeGVkIHRvcCBwb3NpdGlvblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJhbmQvc3RpY2t5XG4gICAgLy8gJCgnLmhlYWRlcicpLnN0aWNreSh7XG4gICAgLy8gICB0b3BTcGFjaW5nOiAwLFxuICAgIC8vICAgekluZGV4OiA0XG4gICAgLy8gfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RGVza3RvcE1hcCgpIHtcbiAgICAvLyBtYWluIChkZXNrdG9wKSBwYWdlXG4gICAgbGV0IG15TWFwO1xuICAgIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwLWluZGV4LXBhZ2UnLCB7XG4gICAgICBjZW50ZXI6IFs1NS43NTU1NDI4OTk1ODAyNiwgMzcuODIyMDkzMDAwMDAwMDFdLFxuICAgICAgem9vbTogOSxcbiAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0pO1xuXG4gICAgbGV0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU1NTQyODk5NTgwMjYsIDM3LjYyMjA5MzAwMDAwMDAxXSwgbnVsbCwge1xuICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9tYXAvaWNvbi1tYXJrZXIuc3ZnJyxcbiAgICAgIGljb25JbWFnZVNpemU6IFs1NiwgNjhdLFxuICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI4LCAtNjhdXG4gICAgfSk7XG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICB9XG5cbiAgLy8gdmlkZW9cbiAgZnVuY3Rpb24gcGxheVZpZGVvKCkge1xuICAgIGxldCB2aWRlb0NvdmVyID0gJCgnLnZpZGVvX19jb3ZlcicpO1xuICAgIGxldCB2aWRlb1BsYXlCdG4gPSAkKCcudmlkZW9fX3BsYXknKTtcbiAgICBsZXQgdmlkZW9JZnJhbWUgPSAkKCcudmlkZW8gaWZyYW1lJyk7XG5cbiAgICBmdW5jdGlvbiBjbGlja0NvdmVyKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodmlkZW9Db3ZlcikuaGlkZSgpO1xuICAgICAgICAkKHZpZGVvUGxheUJ0bikuaGlkZSgpO1xuICAgICAgICAvLyAkKCcjcGxheScpLnBsYXkoKTtcbiAgICAgICAgY29uc3QgcGx5ciA9IG5ldyBQbHlyKCcjcGxheWVyJywge1xuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgIGNvbnRyb2xzOiBbJyddLFxuICAgICAgICAgIGZ1bGxzY3JlZW46IHtcbiAgICAgICAgICAgIGVuYWJlbGVkOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9vcDoge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhdXRvUGxheVZpZGVvKCdiQ3h5Y2tSVmd4UScsICcxMDAlJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2xpY2tDb3Zlcih2aWRlb0NvdmVyKTtcbiAgICBjbGlja0NvdmVyKHZpZGVvUGxheUJ0bik7XG4gIH1cbiAgcGxheVZpZGVvKCk7XG5cbiAgZnVuY3Rpb24gYXV0b1BsYXlWaWRlbyh2Y29kZSwgd2lkdGgpIHtcbiAgICAkKCcudmlkZW9fX2NvbnRhaW5lcicpXG4gICAgICAuYXBwZW5kKCc8aWZyYW1lIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyB2Y29kZSArICc/YXV0b3BsYXk9MSZsb29wPTEmcmVsPTAmd21vZGU9dHJhbnNwYXJlbnRcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5XCIgYWxsb3dmdWxsc2NyZWVuIHdtb2RlPVwiT3BhcXVlXCI+PC9pZnJhbWU+Jyk7XG4gIH1cblxuICAvLyBmb3JtXG4gIGZ1bmN0aW9uIHNob3dIaWRlRm9ybShmb3JtLCBidG4pIHtcbiAgICBsZXQgb3ZlcmxheSA9ICQoJy5mb3JtX19vdmVybGF5Jyk7XG4gICAgbGV0IGNsb3NlID0gJCgnLmZvcm1fX2Nsb3NlJyk7XG4gICAgbGV0IGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgICAkKGJvZHkpLnJlbW92ZUNsYXNzKCdib2R5LS1oaWRkZW4nKTtcbiAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2Zvcm0tLWFjdGl2ZScpO1xuICAgICAgJChvdmVybGF5KS5yZW1vdmVDbGFzcygnZm9ybV9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgJChidG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJChmb3JtKS5hZGRDbGFzcygnZm9ybS0tYWN0aXZlJyk7XG4gICAgICAkKG92ZXJsYXkpLmFkZENsYXNzKCdmb3JtX19vdmVybGF5LS1hY3RpdmUnKTtcbiAgICAgICQoYm9keSkuYWRkQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgIH0pO1xuXG4gICAgJChvdmVybGF5KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNsb3NlRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgJChjbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KTtcbiAgfVxuICBzaG93SGlkZUZvcm0oJy5mb3JtLS1yZXF1ZXN0LWZvci1jYWxsYmFjaycsICcuaGVhZGVyX19idG4nKTtcbiAgc2hvd0hpZGVGb3JtKCcuZm9ybS0tcmVxdWVzdC1mb3ItY2FsbGJhY2snLCAnLm1hcF9fYnRuJyk7XG4gIHNob3dIaWRlRm9ybSgnLmZvcm0tLW9yZGVyaW5nLXByb2R1Y3QnLCAnLmRlc2NyX19idG4tLW9yZGVyJyk7XG4gIHNob3dIaWRlRm9ybSgnLmZvcm0tLXRlc3QtZHJpdmUnLCAnLmRlc2NyX19idG4tLXRlc3QtZHJpdmUnKTtcbiAgc2hvd0hpZGVGb3JtKCcuZm9ybS0tdGVzdC1kcml2ZScsICcudGVzdF9fYnRuLS10ZXN0LWRyaXZlJyk7XG5cbiAgJC5tYXNrLmRlZmluaXRpb25zWyd+J10gPSAnWzldJztcbiAgJCgnaW5wdXRbbmFtZT1cInBob25lXCJdJykubWFzaygnKzcgKH45OSkgOTk5LTk5LTk5Jywge1xuICAgIGF1dG9jbGVhcjogZmFsc2VcbiAgfSk7XG5cbiAgJCgnZm9ybScpLnZhbGlkYXRlKHtcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MpIHtcbiAgICAgICQoZWxlbWVudCkuYWRkKCQoZWxlbWVudCkucGFyZW50KCkpLmFkZENsYXNzKCdmb3JtX19pbnB1dC10ZXh0LS1lcnJvcicpO1xuICAgIH0sXG4gICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MpIHtcbiAgICAgICQoZWxlbWVudCkuYWRkKCQoZWxlbWVudCkucGFyZW50KCkpLnJlbW92ZUNsYXNzKCdmb3JtX19pbnB1dC10ZXh0LS1lcnJvcicpO1xuICAgIH0sXG4gICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=
