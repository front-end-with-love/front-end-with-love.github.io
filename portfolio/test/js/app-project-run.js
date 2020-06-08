(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  // video
  if ($('.cover__player').length) {
    playVideo();
  }

  function playVideo() {
    const myVideo = document.getElementById('cover__player');
    const playPromise = myVideo.play() || Promise.reject('');

    playPromise.then(() => {
    }).catch(err => {
      myVideo.muted = true;
      myVideo.play();
    });
  }

  // animation
  function animateDelivery(element) {
    $(window).scroll(function () {
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(element).offset().top;
      var eh = $(element).outerHeight();
      var dh = $(document).height();
      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        $(element).addClass('delivery--animate')
      }
    });
  }
  animateDelivery('.delivery');

  function animateCategory(element) {
    $(window).scroll(function () {
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(element).offset().top;
      var eh = $(element).outerHeight();
      var dh = $(document).height();
      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        $('.category__item').addClass('category__item--animate')
      }
    });
  }
  animateCategory('.category');

  // map
  if ($('#contacts__map').length) {
    // ymaps.ready(initDesktopMap);
  }

  function initDesktopMap() {
    let myMap;
    myMap = new ymaps.Map('contacts__map', {
      center: [
        [51.606462454467994, 45.92997430593719]
      ],
      zoom: 8,
      controls: []
    });
    // let myPlacemark = new ymaps.Placemark([51.606462454467994, 45.92997430593719], null, {
    //   // iconLayout: 'default#image',
    //   // iconImageHref: '../img/map/icon-marker.svg',
    //   // iconImageSize: [56, 68],
    //   // iconImageOffset: [-28, -68]
    // });
    // myMap.geoObjects.add(myPlacemark);
  }

  // mobile navigation
  function showHideNavIndexPage() {
    $('.cover__nav-btn--open').on('click', function () {
      $(this).removeClass('cover__nav-btn--active').next('.cover__nav-btn--close').addClass('cover__nav-btn--active')
      $('body').addClass('body--hidden');
      $('.nav').addClass('nav--active');
      $('.cover').addClass('cover--open');
    });
    $('.cover__nav-btn--close').on('click', function () {
      $(this).removeClass('cover__nav-btn--active').prev('.cover__nav-btn--open').addClass('cover__nav-btn--active')
      $('body').removeClass('body--hidden');
      $('.nav').removeClass('nav--active');
      $('.cover').removeClass('cover--open');
    });
  }
  showHideNavIndexPage();

  function showHideNavOtherPage() {
    $('.header__nav-btn--open').on('click', function () {
      $(this).removeClass('header__nav-btn--active').next('.header__nav-btn--close').addClass('header__nav-btn--active')
      $('body').addClass('body--hidden');
      $('.nav').addClass('nav--active');
    });
    $('.header__nav-btn--close').on('click', function () {
      $(this).removeClass('header__nav-btn--active').prev('.header__nav-btn--open').addClass('header__nav-btn--active')
      $('body').removeClass('body--hidden');
      $('.nav').removeClass('nav--active');
    });

  }
  showHideNavOtherPage();

  function showHideSecNav() {
    $('.nav__list-link--secondary-list').on('click', function () {
      $(this).toggleClass('nav__list-link--open');
      $(this).next('.nav__list--local').toggleClass('nav__list--active');
      setTimeout(function () {
        const ps = new PerfectScrollbar('.nav');
      }, 100);
    });
  }
  showHideSecNav();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIHZpZGVvXG4gIGlmICgkKCcuY292ZXJfX3BsYXllcicpLmxlbmd0aCkge1xuICAgIHBsYXlWaWRlbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVZpZGVvKCkge1xuICAgIGNvbnN0IG15VmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY292ZXJfX3BsYXllcicpO1xuICAgIGNvbnN0IHBsYXlQcm9taXNlID0gbXlWaWRlby5wbGF5KCkgfHwgUHJvbWlzZS5yZWplY3QoJycpO1xuXG4gICAgcGxheVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIG15VmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgbXlWaWRlby5wbGF5KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBhbmltYXRpb25cbiAgZnVuY3Rpb24gYW5pbWF0ZURlbGl2ZXJ5KGVsZW1lbnQpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB3dCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIHZhciB3aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIHZhciBldCA9ICQoZWxlbWVudCkub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIGVoID0gJChlbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIGRoID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XG4gICAgICBpZiAod3QgKyB3aCA+PSBldCB8fCB3aCArIHd0ID09IGRoIHx8IGVoICsgZXQgPCB3aCkge1xuICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKCdkZWxpdmVyeS0tYW5pbWF0ZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZURlbGl2ZXJ5KCcuZGVsaXZlcnknKTtcblxuICBmdW5jdGlvbiBhbmltYXRlQ2F0ZWdvcnkoZWxlbWVudCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHd0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHdoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgdmFyIGV0ID0gJChlbGVtZW50KS5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgZWggPSAkKGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgZGggPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcbiAgICAgIGlmICh3dCArIHdoID49IGV0IHx8IHdoICsgd3QgPT0gZGggfHwgZWggKyBldCA8IHdoKSB7XG4gICAgICAgICQoJy5jYXRlZ29yeV9faXRlbScpLmFkZENsYXNzKCdjYXRlZ29yeV9faXRlbS0tYW5pbWF0ZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZUNhdGVnb3J5KCcuY2F0ZWdvcnknKTtcblxuICAvLyBtYXBcbiAgaWYgKCQoJyNjb250YWN0c19fbWFwJykubGVuZ3RoKSB7XG4gICAgLy8geW1hcHMucmVhZHkoaW5pdERlc2t0b3BNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdERlc2t0b3BNYXAoKSB7XG4gICAgbGV0IG15TWFwO1xuICAgIG15TWFwID0gbmV3IHltYXBzLk1hcCgnY29udGFjdHNfX21hcCcsIHtcbiAgICAgIGNlbnRlcjogW1xuICAgICAgICBbNTEuNjA2NDYyNDU0NDY3OTk0LCA0NS45Mjk5NzQzMDU5MzcxOV1cbiAgICAgIF0sXG4gICAgICB6b29tOiA4LFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSk7XG4gICAgLy8gbGV0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTEuNjA2NDYyNDU0NDY3OTk0LCA0NS45Mjk5NzQzMDU5MzcxOV0sIG51bGwsIHtcbiAgICAvLyAgIC8vIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAvLyAgIC8vIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvbWFwL2ljb24tbWFya2VyLnN2ZycsXG4gICAgLy8gICAvLyBpY29uSW1hZ2VTaXplOiBbNTYsIDY4XSxcbiAgICAvLyAgIC8vIGljb25JbWFnZU9mZnNldDogWy0yOCwgLTY4XVxuICAgIC8vIH0pO1xuICAgIC8vIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgfVxuXG4gIC8vIG1vYmlsZSBuYXZpZ2F0aW9uXG4gIGZ1bmN0aW9uIHNob3dIaWRlTmF2SW5kZXhQYWdlKCkge1xuICAgICQoJy5jb3Zlcl9fbmF2LWJ0bi0tb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NvdmVyX19uYXYtYnRuLS1hY3RpdmUnKS5uZXh0KCcuY292ZXJfX25hdi1idG4tLWNsb3NlJykuYWRkQ2xhc3MoJ2NvdmVyX19uYXYtYnRuLS1hY3RpdmUnKVxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1oaWRkZW4nKTtcbiAgICAgICQoJy5uYXYnKS5hZGRDbGFzcygnbmF2LS1hY3RpdmUnKTtcbiAgICAgICQoJy5jb3ZlcicpLmFkZENsYXNzKCdjb3Zlci0tb3BlbicpO1xuICAgIH0pO1xuICAgICQoJy5jb3Zlcl9fbmF2LWJ0bi0tY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdjb3Zlcl9fbmF2LWJ0bi0tYWN0aXZlJykucHJldignLmNvdmVyX19uYXYtYnRuLS1vcGVuJykuYWRkQ2xhc3MoJ2NvdmVyX19uYXYtYnRuLS1hY3RpdmUnKVxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1oaWRkZW4nKTtcbiAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygnbmF2LS1hY3RpdmUnKTtcbiAgICAgICQoJy5jb3ZlcicpLnJlbW92ZUNsYXNzKCdjb3Zlci0tb3BlbicpO1xuICAgIH0pO1xuICB9XG4gIHNob3dIaWRlTmF2SW5kZXhQYWdlKCk7XG5cbiAgZnVuY3Rpb24gc2hvd0hpZGVOYXZPdGhlclBhZ2UoKSB7XG4gICAgJCgnLmhlYWRlcl9fbmF2LWJ0bi0tb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fbmF2LWJ0bi0tYWN0aXZlJykubmV4dCgnLmhlYWRlcl9fbmF2LWJ0bi0tY2xvc2UnKS5hZGRDbGFzcygnaGVhZGVyX19uYXYtYnRuLS1hY3RpdmUnKVxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1oaWRkZW4nKTtcbiAgICAgICQoJy5uYXYnKS5hZGRDbGFzcygnbmF2LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkKCcuaGVhZGVyX19uYXYtYnRuLS1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fbmF2LWJ0bi0tYWN0aXZlJykucHJldignLmhlYWRlcl9fbmF2LWJ0bi0tb3BlbicpLmFkZENsYXNzKCdoZWFkZXJfX25hdi1idG4tLWFjdGl2ZScpXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgICAgJCgnLm5hdicpLnJlbW92ZUNsYXNzKCduYXYtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gIH1cbiAgc2hvd0hpZGVOYXZPdGhlclBhZ2UoKTtcblxuICBmdW5jdGlvbiBzaG93SGlkZVNlY05hdigpIHtcbiAgICAkKCcubmF2X19saXN0LWxpbmstLXNlY29uZGFyeS1saXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnbmF2X19saXN0LWxpbmstLW9wZW4nKTtcbiAgICAgICQodGhpcykubmV4dCgnLm5hdl9fbGlzdC0tbG9jYWwnKS50b2dnbGVDbGFzcygnbmF2X19saXN0LS1hY3RpdmUnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcubmF2Jyk7XG4gICAgICB9LCAxMDApO1xuICAgIH0pO1xuICB9XG4gIHNob3dIaWRlU2VjTmF2KCk7XG59KTtcbiJdfQ==
