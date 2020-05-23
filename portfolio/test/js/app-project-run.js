(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  // cover
  $('.cover').addClass('cover--animation');

  // init scrollr
  skrollr.init();

  // items
  function animateItem(element) {
    $(window).scroll(function(){
    	var wt = $(window).scrollTop();
    	var wh = $(window).height();
    	var et = $(element).offset().top;
    	var eh = $(element).outerHeight();
    	var dh = $(document).height();
    	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
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
    $(window).scroll(function(){
    	var wt = $(window).scrollTop();
    	var wh = $(window).height();
    	var et = $(element).offset().top;
    	var eh = $(element).outerHeight();
    	var dh = $(document).height();
    	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
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
        autoPlayVideo('bCxyckRVgxQ', '100%');
      });
    }
    clickCover(videoCover);
    clickCover(videoPlayBtn);
  }
  playVideo();

  function autoPlayVideo(vcode, width) {
    $('.video__container').append('<iframe width="' + width + '" src="https://www.youtube.com/embed/' + vcode + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
  }

  function showHideForm (form, btn) {
    let overlay = $('.form__overlay');
    let close = $('.form__close');
    let body = $('body');

    function closeForm () {
      $(form).removeClass('form--active');
      $(overlay).removeClass('form__overlay--active');
      $(body).css({'overflow-x': 'hidden'});
    }

    $(btn).on('click', function () {
      $(form).addClass('form--active');
      $(overlay).addClass('form__overlay--active');
      $(body).css({'overflow': 'hidden'});
    });

    $(overlay).on('click', function () {
      closeForm();
    });

    $(close).on('click', function () {
      closeForm();
    });
  }
  showHideForm('.form--request-for-callback', '.header__btn');

  $('input[name="phone"]').mask("+7 (999) 999-99-99");
  // iframe(
  //   width="100%"
  //   src="https://www.youtube.com/embed/"
  //   frameborder="0"
  //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //   allowfullscreen=""
  // )
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIGNvdmVyXG4gICQoJy5jb3ZlcicpLmFkZENsYXNzKCdjb3Zlci0tYW5pbWF0aW9uJyk7XG5cbiAgLy8gaW5pdCBzY3JvbGxyXG4gIHNrcm9sbHIuaW5pdCgpO1xuXG4gIC8vIGl0ZW1zXG4gIGZ1bmN0aW9uIGFuaW1hdGVJdGVtKGVsZW1lbnQpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgd3QgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgXHR2YXIgd2ggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgXHR2YXIgZXQgPSAkKGVsZW1lbnQpLm9mZnNldCgpLnRvcDtcbiAgICBcdHZhciBlaCA9ICQoZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBcdHZhciBkaCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xuICAgIFx0aWYgKHd0ICsgd2ggPj0gZXQgfHwgd2ggKyB3dCA9PSBkaCB8fCBlaCArIGV0IDwgd2gpe1xuICAgIFx0XHQkKGVsZW1lbnQpLmZpbmQoJy5pdGVtc19faW1nJykuYWRkQ2xhc3MoJ2l0ZW1zX19pbWctLWFuaW1hdGlvbicpO1xuICAgIFx0XHQkKGVsZW1lbnQpLmZpbmQoJy5pdGVtc19fdGl0bGUnKS5hZGRDbGFzcygnaXRlbXNfX3RpdGxlLS1hbmltYXRpb24nKTtcbiAgICBcdFx0JChlbGVtZW50KS5maW5kKCcuaXRlbXNfX2Rlc2NyJykuYWRkQ2xhc3MoJ2l0ZW1zX19kZXNjci0tYW5pbWF0aW9uJyk7XG4gICAgXHR9XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZUl0ZW0oJy5pdGVtc19faXRlbS0tZmlyc3QnKTtcbiAgYW5pbWF0ZUl0ZW0oJy5pdGVtc19faXRlbS0tc2Vjb25kJyk7XG4gIGFuaW1hdGVJdGVtKCcuaXRlbXNfX2l0ZW0tLXRoaXJkJyk7XG4gIGFuaW1hdGVJdGVtKCcuaXRlbXNfX2l0ZW0tLWZvdXJ0aCcpO1xuICBhbmltYXRlSXRlbSgnLml0ZW1zX19pdGVtLS1maWZ0aCcpO1xuXG4gIC8vIGluc3RydWN0aW9uc1xuICBmdW5jdGlvbiBhbmltYXRlSWluc3RydWN0aW9ucyhlbGVtZW50KSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgIFx0dmFyIHd0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIFx0dmFyIHdoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgIFx0dmFyIGV0ID0gJChlbGVtZW50KS5vZmZzZXQoKS50b3A7XG4gICAgXHR2YXIgZWggPSAkKGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgXHR2YXIgZGggPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcbiAgICBcdGlmICh3dCArIHdoID49IGV0IHx8IHdoICsgd3QgPT0gZGggfHwgZWggKyBldCA8IHdoKXtcbiAgICBcdFx0JChlbGVtZW50KS5hZGRDbGFzcygnaW5zdHJ1Y3Rpb25fX2ltZy0tYW5pbWF0aW9uJylcbiAgICBcdH1cbiAgICB9KTtcbiAgfVxuICBhbmltYXRlSWluc3RydWN0aW9ucygnLmluc3RydWN0aW9uX19pbWctLWZpcnN0Jyk7XG4gIGFuaW1hdGVJaW5zdHJ1Y3Rpb25zKCcuaW5zdHJ1Y3Rpb25fX2ltZy0tc2Vjb25kJyk7XG4gIGFuaW1hdGVJaW5zdHJ1Y3Rpb25zKCcuaW5zdHJ1Y3Rpb25fX2ltZy0tdGhpcmQnKTtcblxuICAvLyBzbGlkZXJcbiAgJCgnLnNsaWRlcl9fc2xpZGVyLWZvcicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyBmYWRlOiB0cnVlLFxuICAgIGFzTmF2Rm9yOiAnLnNsaWRlcl9fc2xpZGVyLW5hdicsXG4gICAgcHJldkFycm93OiAkKCcuc2xpZGVyX19uYXYtaXRlbS0tcHJldicpLFxuICAgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fbmF2LWl0ZW0tLW5leHQnKVxuICB9KTtcbiAgJCgnLnNsaWRlcl9fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuc2xpZGVyX19zbGlkZXItZm9yJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICB9KTtcbiAgJCgnLnNsaWRlcl9fbmF2LWl0ZW0tLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuc2xpZGVyX19zbGlkZXItZm9yJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICB9KTtcbiAgJCgnLnNsaWRlcl9fc2xpZGVyLW5hdicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXNOYXZGb3I6ICcuc2xpZGVyX19zbGlkZXItZm9yJyxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIC8vIGRvdHM6IHRydWUsXG4gICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEzNjAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgIC8vICAgc2V0dGluZ3M6IHtcbiAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAvLyAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgLy8gICBzZXR0aW5nczoge1xuICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIC8vICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICBdXG4gIH0pO1xuXG4gIC8vIG1hcFxuICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xuICBpZiAod2luZG93V2lkdGggPj0gOTkyKSB7XG4gICAgeW1hcHMucmVhZHkoaW5pdERlc2t0b3BNYXApO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnV5YWtzYS9qcXVlcnkubmljZXNjcm9sbFxuICAgIC8vICQoJy5zdGF0aXN0aWNzJykubmljZVNjcm9sbCgpO1xuXG4gICAgLy8gaGVhZGVyLiBmaXhlZCB0b3AgcG9zaXRpb25cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2FyYW5kL3N0aWNreVxuICAgIC8vICQoJy5oZWFkZXInKS5zdGlja3koe1xuICAgIC8vICAgdG9wU3BhY2luZzogMCxcbiAgICAvLyAgIHpJbmRleDogNFxuICAgIC8vIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdERlc2t0b3BNYXAoKSB7XG4gICAgLy8gbWFpbiAoZGVza3RvcCkgcGFnZVxuICAgIGxldCBteU1hcDtcbiAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcC1pbmRleC1wYWdlJywge1xuICAgICAgY2VudGVyOiBbNTUuNzU1NTQyODk5NTgwMjYsIDM3LjgyMjA5MzAwMDAwMDAxXSxcbiAgICAgIHpvb206IDksXG4gICAgICBjb250cm9sczogW11cbiAgICB9KTtcblxuICAgIGxldCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1NTU0Mjg5OTU4MDI2LCAzNy42MjIwOTMwMDAwMDAwMV0sIG51bGwsIHtcbiAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvbWFwL2ljb24tbWFya2VyLnN2ZycsXG4gICAgICBpY29uSW1hZ2VTaXplOiBbNTYsIDY4XSxcbiAgICAgIGljb25JbWFnZU9mZnNldDogWy0yOCwgLTY4XVxuICAgIH0pO1xuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgfVxuXG4gIC8vIHZpZGVvXG4gIGZ1bmN0aW9uIHBsYXlWaWRlbygpIHtcbiAgICBsZXQgdmlkZW9Db3ZlciA9ICQoJy52aWRlb19fY292ZXInKTtcbiAgICBsZXQgdmlkZW9QbGF5QnRuID0gJCgnLnZpZGVvX19wbGF5Jyk7XG4gICAgbGV0IHZpZGVvSWZyYW1lID0gJCgnLnZpZGVvIGlmcmFtZScpO1xuXG4gICAgZnVuY3Rpb24gY2xpY2tDb3ZlcihlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHZpZGVvQ292ZXIpLmhpZGUoKTtcbiAgICAgICAgJCh2aWRlb1BsYXlCdG4pLmhpZGUoKTtcbiAgICAgICAgYXV0b1BsYXlWaWRlbygnYkN4eWNrUlZneFEnLCAnMTAwJScpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNsaWNrQ292ZXIodmlkZW9Db3Zlcik7XG4gICAgY2xpY2tDb3Zlcih2aWRlb1BsYXlCdG4pO1xuICB9XG4gIHBsYXlWaWRlbygpO1xuXG4gIGZ1bmN0aW9uIGF1dG9QbGF5VmlkZW8odmNvZGUsIHdpZHRoKSB7XG4gICAgJCgnLnZpZGVvX19jb250YWluZXInKS5hcHBlbmQoJzxpZnJhbWUgd2lkdGg9XCInICsgd2lkdGggKyAnXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZjb2RlICsgJz9hdXRvcGxheT0xJmxvb3A9MSZyZWw9MCZ3bW9kZT10cmFuc3BhcmVudFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbiB3bW9kZT1cIk9wYXF1ZVwiPjwvaWZyYW1lPicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0hpZGVGb3JtIChmb3JtLCBidG4pIHtcbiAgICBsZXQgb3ZlcmxheSA9ICQoJy5mb3JtX19vdmVybGF5Jyk7XG4gICAgbGV0IGNsb3NlID0gJCgnLmZvcm1fX2Nsb3NlJyk7XG4gICAgbGV0IGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZUZvcm0gKCkge1xuICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnZm9ybS0tYWN0aXZlJyk7XG4gICAgICAkKG92ZXJsYXkpLnJlbW92ZUNsYXNzKCdmb3JtX19vdmVybGF5LS1hY3RpdmUnKTtcbiAgICAgICQoYm9keSkuY3NzKHsnb3ZlcmZsb3cteCc6ICdoaWRkZW4nfSk7XG4gICAgfVxuXG4gICAgJChidG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2Zvcm0tLWFjdGl2ZScpO1xuICAgICAgJChvdmVybGF5KS5hZGRDbGFzcygnZm9ybV9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgICAkKGJvZHkpLmNzcyh7J292ZXJmbG93JzogJ2hpZGRlbid9KTtcbiAgICB9KTtcblxuICAgICQob3ZlcmxheSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfSk7XG5cbiAgICAkKGNsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KTtcbiAgfVxuICBzaG93SGlkZUZvcm0oJy5mb3JtLS1yZXF1ZXN0LWZvci1jYWxsYmFjaycsICcuaGVhZGVyX19idG4nKTtcblxuICAkKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAvLyBpZnJhbWUoXG4gIC8vICAgd2lkdGg9XCIxMDAlXCJcbiAgLy8gICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIlxuICAvLyAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gIC8vICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gIC8vICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgLy8gKVxufSk7XG4iXX0=
