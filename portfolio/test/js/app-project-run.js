(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  function faqShowHide(element) {
    $(element).on('click', function() {
      $(this).toggleClass('service__faq-item--active');
    });
  }
  faqShowHide('.service__faq-item');

  function calcHeightServices () {
    var windowWidth = $(window).outerWidth();
    if (windowWidth > 768) {
      var heightContainer = $('.services__container').outerHeight();
      var newHeightContainer = heightContainer - 80;
      $('.services__container').css('height', newHeightContainer + 'px')
    }
  }
  calcHeightServices();

  function toggleMobileNav () {
    $('.header__btn').on('click', function () {
      $(this).toggleClass('header__btn_active');
      $('.header__inner-wrapper').toggleClass('header__inner-wrapper_active');
    });
  }
  toggleMobileNav();

  function fixHeaderAfterScroll () {
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.header').addClass('header_fixed');
      } else {
        $('.header').removeClass('header_fixed');
      }
    });
  }
  // fixHeaderAfterScroll();
 });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGZhcVNob3dIaWRlKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc2VydmljZV9fZmFxLWl0ZW0tLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIGZhcVNob3dIaWRlKCcuc2VydmljZV9fZmFxLWl0ZW0nKTtcblxuICBmdW5jdGlvbiBjYWxjSGVpZ2h0U2VydmljZXMgKCkge1xuICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS5vdXRlcldpZHRoKCk7XG4gICAgaWYgKHdpbmRvd1dpZHRoID4gNzY4KSB7XG4gICAgICB2YXIgaGVpZ2h0Q29udGFpbmVyID0gJCgnLnNlcnZpY2VzX19jb250YWluZXInKS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIG5ld0hlaWdodENvbnRhaW5lciA9IGhlaWdodENvbnRhaW5lciAtIDgwO1xuICAgICAgJCgnLnNlcnZpY2VzX19jb250YWluZXInKS5jc3MoJ2hlaWdodCcsIG5ld0hlaWdodENvbnRhaW5lciArICdweCcpXG4gICAgfVxuICB9XG4gIGNhbGNIZWlnaHRTZXJ2aWNlcygpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU5hdiAoKSB7XG4gICAgJCgnLmhlYWRlcl9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGVhZGVyX19idG5fYWN0aXZlJyk7XG4gICAgICAkKCcuaGVhZGVyX19pbm5lci13cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9faW5uZXItd3JhcHBlcl9hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVNb2JpbGVOYXYoKTtcblxuICBmdW5jdGlvbiBmaXhIZWFkZXJBZnRlclNjcm9sbCAoKSB7XG4gICAgJCh3aW5kb3cpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlcl9maXhlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBmaXhIZWFkZXJBZnRlclNjcm9sbCgpO1xuIH0pO1xuIl19
