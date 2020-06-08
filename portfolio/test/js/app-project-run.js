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

  // map
  if ($('#contacts__map').length) {
    ymaps.ready(initDesktopMap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gdmlkZW9cbiAgaWYgKCQoJy5jb3Zlcl9fcGxheWVyJykubGVuZ3RoKSB7XG4gICAgcGxheVZpZGVvKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5VmlkZW8oKSB7XG4gICAgY29uc3QgbXlWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Zlcl9fcGxheWVyJyk7XG4gICAgY29uc3QgcGxheVByb21pc2UgPSBteVZpZGVvLnBsYXkoKSB8fCBQcm9taXNlLnJlamVjdCgnJyk7XG5cbiAgICBwbGF5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgbXlWaWRlby5tdXRlZCA9IHRydWU7XG4gICAgICBteVZpZGVvLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIG1hcFxuICBpZiAoJCgnI2NvbnRhY3RzX19tYXAnKS5sZW5ndGgpIHtcbiAgICB5bWFwcy5yZWFkeShpbml0RGVza3RvcE1hcCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RGVza3RvcE1hcCgpIHtcbiAgICBsZXQgbXlNYXA7XG4gICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdjb250YWN0c19fbWFwJywge1xuICAgICAgY2VudGVyOiBbXG4gICAgICAgIFs1MS42MDY0NjI0NTQ0Njc5OTQsIDQ1LjkyOTk3NDMwNTkzNzE5XVxuICAgICAgXSxcbiAgICAgIHpvb206IDgsXG4gICAgICBjb250cm9sczogW11cbiAgICB9KTtcbiAgICAvLyBsZXQgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1MS42MDY0NjI0NTQ0Njc5OTQsIDQ1LjkyOTk3NDMwNTkzNzE5XSwgbnVsbCwge1xuICAgIC8vICAgLy8gaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIC8vICAgLy8gaWNvbkltYWdlSHJlZjogJy4uL2ltZy9tYXAvaWNvbi1tYXJrZXIuc3ZnJyxcbiAgICAvLyAgIC8vIGljb25JbWFnZVNpemU6IFs1NiwgNjhdLFxuICAgIC8vICAgLy8gaWNvbkltYWdlT2Zmc2V0OiBbLTI4LCAtNjhdXG4gICAgLy8gfSk7XG4gICAgLy8gbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICB9XG5cbiAgLy8gbW9iaWxlIG5hdmlnYXRpb25cbiAgZnVuY3Rpb24gc2hvd0hpZGVOYXZJbmRleFBhZ2UoKSB7XG4gICAgJCgnLmNvdmVyX19uYXYtYnRuLS1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY292ZXJfX25hdi1idG4tLWFjdGl2ZScpLm5leHQoJy5jb3Zlcl9fbmF2LWJ0bi0tY2xvc2UnKS5hZGRDbGFzcygnY292ZXJfX25hdi1idG4tLWFjdGl2ZScpXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgICAgJCgnLm5hdicpLmFkZENsYXNzKCduYXYtLWFjdGl2ZScpO1xuICAgICAgJCgnLmNvdmVyJykuYWRkQ2xhc3MoJ2NvdmVyLS1vcGVuJyk7XG4gICAgfSk7XG4gICAgJCgnLmNvdmVyX19uYXYtYnRuLS1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NvdmVyX19uYXYtYnRuLS1hY3RpdmUnKS5wcmV2KCcuY292ZXJfX25hdi1idG4tLW9wZW4nKS5hZGRDbGFzcygnY292ZXJfX25hdi1idG4tLWFjdGl2ZScpXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgICAgJCgnLm5hdicpLnJlbW92ZUNsYXNzKCduYXYtLWFjdGl2ZScpO1xuICAgICAgJCgnLmNvdmVyJykucmVtb3ZlQ2xhc3MoJ2NvdmVyLS1vcGVuJyk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0hpZGVOYXZJbmRleFBhZ2UoKTtcblxuICBmdW5jdGlvbiBzaG93SGlkZU5hdk90aGVyUGFnZSgpIHtcbiAgICAkKCcuaGVhZGVyX19uYXYtYnRuLS1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGVhZGVyX19uYXYtYnRuLS1hY3RpdmUnKS5uZXh0KCcuaGVhZGVyX19uYXYtYnRuLS1jbG9zZScpLmFkZENsYXNzKCdoZWFkZXJfX25hdi1idG4tLWFjdGl2ZScpXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgICAgJCgnLm5hdicpLmFkZENsYXNzKCduYXYtLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgICQoJy5oZWFkZXJfX25hdi1idG4tLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGVhZGVyX19uYXYtYnRuLS1hY3RpdmUnKS5wcmV2KCcuaGVhZGVyX19uYXYtYnRuLS1vcGVuJykuYWRkQ2xhc3MoJ2hlYWRlcl9fbmF2LWJ0bi0tYWN0aXZlJylcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0taGlkZGVuJyk7XG4gICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgfVxuICBzaG93SGlkZU5hdk90aGVyUGFnZSgpO1xuXG4gIGZ1bmN0aW9uIHNob3dIaWRlU2VjTmF2KCkge1xuICAgICQoJy5uYXZfX2xpc3QtbGluay0tc2Vjb25kYXJ5LWxpc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCduYXZfX2xpc3QtbGluay0tb3BlbicpO1xuICAgICAgJCh0aGlzKS5uZXh0KCcubmF2X19saXN0LS1sb2NhbCcpLnRvZ2dsZUNsYXNzKCduYXZfX2xpc3QtLWFjdGl2ZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5uYXYnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0hpZGVTZWNOYXYoKTtcbn0pO1xuIl19
