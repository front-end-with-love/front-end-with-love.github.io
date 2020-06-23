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
  function animateDeliveryIndex(element) {
    let target = $(element);
    if (target.length) {
      let targetPos = target.offset().top;
      let winHeight = $(window).height();
      let scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop() - 150;
        if (winScrollTop > scrollToElem) {
          $(element).addClass('delivery--animate');
        }
      });
    }
  }
  animateDeliveryIndex('.delivery--index');

  function animateDeliveryTerms(element) {
    let target = $(element);
    $(element).addClass('delivery--animate');
  }

  window.addEventListener("load", function (event) {
    animateDeliveryTerms(".delivery--for-terms-of-delivery");
  });

  function animateAboutCompany(element) {
    let target = $(element);
    if (target.length) {
      let targetPos = target.offset().top;
      let winHeight = $(window).height();
      let scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop() - 80;
        if (winScrollTop > scrollToElem) {
          $(element).addClass("about-company--animate");
        }
      });
    }
  }
  animateAboutCompany('.about-company');

  function animateCategory(element) {
    let target = $(element);
    if (target.length) {
      let targetPos = target.offset().top;
      let winHeight = $(window).height();
      let scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop() - 250;
        if (winScrollTop > scrollToElem) {
          $('.category__item').addClass(
            "category__item--animate"
          );
        }
      });
    }
  }
  animateCategory('.category');

  // descr
  if ($('.descr__item-title').length) {
    setHeightTitleForDescr();
  }
  function setHeightTitleForDescr() {
    $('.descr__item-title').matchHeight();
  }

  // cover
  if ($('a.cover__btn.cover__btn--blue').length) {
    coverBtnShowHide('.footer');
  }
  function coverBtnShowHide(element) {
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.cover__btn.cover__btn--blue').hide();
      }
      else {
        $('.cover__btn.cover__btn--blue').show();
      }
    });
  }

  // more info
  if ($('.catalog__more-info').length) {
    setHeightTitleForCatalogMoreInfo();
  }

  function setHeightTitleForCatalogMoreInfo() {
    let windowWidth = $(window).outerWidth();
    if (768 <= windowWidth <= 1024) {
      $('.catalog__more-info-col').matchHeight();
    }
  }

  // mobile navigation
  function showHideNavIndexPage() {
    $('.cover__nav-btn').on('click', function () {
      $(this).toggleClass('cover__nav-btn--open')
      $('body').toggleClass('body--hidden');
      $('.nav').toggleClass('nav--active');
      $('.cover').toggleClass('cover--open');
    });
  }
  showHideNavIndexPage();

  function showHideNavOtherPage() {
    $('.header__nav-btn').on('click', function () {
      $(this).toggleClass('header__nav-btn--open')
      $('body').toggleClass('body--hidden');
      $('.nav').toggleClass('nav--active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gdmlkZW9cbiAgaWYgKCQoJy5jb3Zlcl9fcGxheWVyJykubGVuZ3RoKSB7XG4gICAgcGxheVZpZGVvKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5VmlkZW8oKSB7XG4gICAgY29uc3QgbXlWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Zlcl9fcGxheWVyJyk7XG4gICAgY29uc3QgcGxheVByb21pc2UgPSBteVZpZGVvLnBsYXkoKSB8fCBQcm9taXNlLnJlamVjdCgnJyk7XG5cbiAgICBwbGF5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgbXlWaWRlby5tdXRlZCA9IHRydWU7XG4gICAgICBteVZpZGVvLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGFuaW1hdGlvblxuICBmdW5jdGlvbiBhbmltYXRlRGVsaXZlcnlJbmRleChlbGVtZW50KSB7XG4gICAgbGV0IHRhcmdldCA9ICQoZWxlbWVudCk7XG4gICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgIGxldCB0YXJnZXRQb3MgPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgbGV0IHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIGxldCBzY3JvbGxUb0VsZW0gPSB0YXJnZXRQb3MgLSB3aW5IZWlnaHQ7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpblNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkgLSAxNTA7XG4gICAgICAgIGlmICh3aW5TY3JvbGxUb3AgPiBzY3JvbGxUb0VsZW0pIHtcbiAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKCdkZWxpdmVyeS0tYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYW5pbWF0ZURlbGl2ZXJ5SW5kZXgoJy5kZWxpdmVyeS0taW5kZXgnKTtcblxuICBmdW5jdGlvbiBhbmltYXRlRGVsaXZlcnlUZXJtcyhlbGVtZW50KSB7XG4gICAgbGV0IHRhcmdldCA9ICQoZWxlbWVudCk7XG4gICAgJChlbGVtZW50KS5hZGRDbGFzcygnZGVsaXZlcnktLWFuaW1hdGUnKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBhbmltYXRlRGVsaXZlcnlUZXJtcyhcIi5kZWxpdmVyeS0tZm9yLXRlcm1zLW9mLWRlbGl2ZXJ5XCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBhbmltYXRlQWJvdXRDb21wYW55KGVsZW1lbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gJChlbGVtZW50KTtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgbGV0IHRhcmdldFBvcyA9IHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgICBsZXQgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgbGV0IHNjcm9sbFRvRWxlbSA9IHRhcmdldFBvcyAtIHdpbkhlaWdodDtcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2luU2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSAtIDgwO1xuICAgICAgICBpZiAod2luU2Nyb2xsVG9wID4gc2Nyb2xsVG9FbGVtKSB7XG4gICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImFib3V0LWNvbXBhbnktLWFuaW1hdGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhbmltYXRlQWJvdXRDb21wYW55KCcuYWJvdXQtY29tcGFueScpO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGVDYXRlZ29yeShlbGVtZW50KSB7XG4gICAgbGV0IHRhcmdldCA9ICQoZWxlbWVudCk7XG4gICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgIGxldCB0YXJnZXRQb3MgPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgbGV0IHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIGxldCBzY3JvbGxUb0VsZW0gPSB0YXJnZXRQb3MgLSB3aW5IZWlnaHQ7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpblNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkgLSAyNTA7XG4gICAgICAgIGlmICh3aW5TY3JvbGxUb3AgPiBzY3JvbGxUb0VsZW0pIHtcbiAgICAgICAgICAkKCcuY2F0ZWdvcnlfX2l0ZW0nKS5hZGRDbGFzcyhcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlfX2l0ZW0tLWFuaW1hdGVcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhbmltYXRlQ2F0ZWdvcnkoJy5jYXRlZ29yeScpO1xuXG4gIC8vIGRlc2NyXG4gIGlmICgkKCcuZGVzY3JfX2l0ZW0tdGl0bGUnKS5sZW5ndGgpIHtcbiAgICBzZXRIZWlnaHRUaXRsZUZvckRlc2NyKCk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0SGVpZ2h0VGl0bGVGb3JEZXNjcigpIHtcbiAgICAkKCcuZGVzY3JfX2l0ZW0tdGl0bGUnKS5tYXRjaEhlaWdodCgpO1xuICB9XG5cbiAgLy8gY292ZXJcbiAgaWYgKCQoJ2EuY292ZXJfX2J0bi5jb3Zlcl9fYnRuLS1ibHVlJykubGVuZ3RoKSB7XG4gICAgY292ZXJCdG5TaG93SGlkZSgnLmZvb3RlcicpO1xuICB9XG4gIGZ1bmN0aW9uIGNvdmVyQnRuU2hvd0hpZGUoZWxlbWVudCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gMTAwKSB7XG4gICAgICAgICQoJy5jb3Zlcl9fYnRuLmNvdmVyX19idG4tLWJsdWUnKS5oaWRlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCgnLmNvdmVyX19idG4uY292ZXJfX2J0bi0tYmx1ZScpLnNob3coKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIG1vcmUgaW5mb1xuICBpZiAoJCgnLmNhdGFsb2dfX21vcmUtaW5mbycpLmxlbmd0aCkge1xuICAgIHNldEhlaWdodFRpdGxlRm9yQ2F0YWxvZ01vcmVJbmZvKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWlnaHRUaXRsZUZvckNhdGFsb2dNb3JlSW5mbygpIHtcbiAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xuICAgIGlmICg3NjggPD0gd2luZG93V2lkdGggPD0gMTAyNCkge1xuICAgICAgJCgnLmNhdGFsb2dfX21vcmUtaW5mby1jb2wnKS5tYXRjaEhlaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vYmlsZSBuYXZpZ2F0aW9uXG4gIGZ1bmN0aW9uIHNob3dIaWRlTmF2SW5kZXhQYWdlKCkge1xuICAgICQoJy5jb3Zlcl9fbmF2LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NvdmVyX19uYXYtYnRuLS1vcGVuJylcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnYm9keS0taGlkZGVuJyk7XG4gICAgICAkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAkKCcuY292ZXInKS50b2dnbGVDbGFzcygnY292ZXItLW9wZW4nKTtcbiAgICB9KTtcbiAgfVxuICBzaG93SGlkZU5hdkluZGV4UGFnZSgpO1xuXG4gIGZ1bmN0aW9uIHNob3dIaWRlTmF2T3RoZXJQYWdlKCkge1xuICAgICQoJy5oZWFkZXJfX25hdi1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX25hdi1idG4tLW9wZW4nKVxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdib2R5LS1oaWRkZW4nKTtcbiAgICAgICQoJy5uYXYnKS50b2dnbGVDbGFzcygnbmF2LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBzaG93SGlkZU5hdk90aGVyUGFnZSgpO1xuXG4gIGZ1bmN0aW9uIHNob3dIaWRlU2VjTmF2KCkge1xuICAgICQoJy5uYXZfX2xpc3QtbGluay0tc2Vjb25kYXJ5LWxpc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCduYXZfX2xpc3QtbGluay0tb3BlbicpO1xuICAgICAgJCh0aGlzKS5uZXh0KCcubmF2X19saXN0LS1sb2NhbCcpLnRvZ2dsZUNsYXNzKCduYXZfX2xpc3QtLWFjdGl2ZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5uYXYnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0hpZGVTZWNOYXYoKTtcbn0pO1xuIl19
