(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  function openCloseModal(clickedElement, modal, modalOverlay, dataModal) {
    var modalClassLength = $(modal).toString().length;
    var activeClassModal = (modal.substr(1, modalClassLength - 1) + '--active');

    $(clickedElement).on('click', function() {
      $(modal).addClass(activeClassModal);
    });

    $(modalOverlay).on('click', function() {
      $(modal).removeClass(activeClassModal);
    });

    $('.modal-auth-reg__input-text--phone, .cover-sign-up__input-text--phone, .modal-receive-consultation__input-text--phone').mask('+7 (999)999-9999');
  }
  openCloseModal('.header__link', '.modal-auth-reg', '.modal-auth-reg__overlay', 0);

  function switchRegLoginForm() {
    $('.modal-auth-reg__nav-item').on('click', function() {
      var currentData = $(this).data('content');
      $('.modal-auth-reg__nav-item--active').removeClass('modal-auth-reg__nav-item--active');
      $('.modal-auth-reg__content-item--active').removeClass('modal-auth-reg__content-item--active');
      $(this).addClass('modal-auth-reg__nav-item--active');
      $('.modal-auth-reg__content-item[data-content="' + currentData + '"]').addClass('modal-auth-reg__content-item--active');
    });
  }
  switchRegLoginForm();

  function switchFaq() {
    $('.faq__item-question').on('click', function() {
      $(this).toggleClass('faq__item-question--active');
      $(this).next().toggleClass('faq__item-answer--active');
    });
  }
  switchFaq();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvcGVuQ2xvc2VNb2RhbChjbGlja2VkRWxlbWVudCwgbW9kYWwsIG1vZGFsT3ZlcmxheSwgZGF0YU1vZGFsKSB7XG4gICAgdmFyIG1vZGFsQ2xhc3NMZW5ndGggPSAkKG1vZGFsKS50b1N0cmluZygpLmxlbmd0aDtcbiAgICB2YXIgYWN0aXZlQ2xhc3NNb2RhbCA9IChtb2RhbC5zdWJzdHIoMSwgbW9kYWxDbGFzc0xlbmd0aCAtIDEpICsgJy0tYWN0aXZlJyk7XG5cbiAgICAkKGNsaWNrZWRFbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQobW9kYWwpLmFkZENsYXNzKGFjdGl2ZUNsYXNzTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgJChtb2RhbE92ZXJsYXkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJChtb2RhbCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3NNb2RhbCk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwtYXV0aC1yZWdfX2lucHV0LXRleHQtLXBob25lLCAuY292ZXItc2lnbi11cF9faW5wdXQtdGV4dC0tcGhvbmUsIC5tb2RhbC1yZWNlaXZlLWNvbnN1bHRhdGlvbl9faW5wdXQtdGV4dC0tcGhvbmUnKS5tYXNrKCcrNyAoOTk5KTk5OS05OTk5Jyk7XG4gIH1cbiAgb3BlbkNsb3NlTW9kYWwoJy5oZWFkZXJfX2xpbmsnLCAnLm1vZGFsLWF1dGgtcmVnJywgJy5tb2RhbC1hdXRoLXJlZ19fb3ZlcmxheScsIDApO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaFJlZ0xvZ2luRm9ybSgpIHtcbiAgICAkKCcubW9kYWwtYXV0aC1yZWdfX25hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudERhdGEgPSAkKHRoaXMpLmRhdGEoJ2NvbnRlbnQnKTtcbiAgICAgICQoJy5tb2RhbC1hdXRoLXJlZ19fbmF2LWl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtb2RhbC1hdXRoLXJlZ19fbmF2LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgJCgnLm1vZGFsLWF1dGgtcmVnX19jb250ZW50LWl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtb2RhbC1hdXRoLXJlZ19fY29udGVudC1pdGVtLS1hY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21vZGFsLWF1dGgtcmVnX19uYXYtaXRlbS0tYWN0aXZlJyk7XG4gICAgICAkKCcubW9kYWwtYXV0aC1yZWdfX2NvbnRlbnQtaXRlbVtkYXRhLWNvbnRlbnQ9XCInICsgY3VycmVudERhdGEgKyAnXCJdJykuYWRkQ2xhc3MoJ21vZGFsLWF1dGgtcmVnX19jb250ZW50LWl0ZW0tLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIHN3aXRjaFJlZ0xvZ2luRm9ybSgpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEZhcSgpIHtcbiAgICAkKCcuZmFxX19pdGVtLXF1ZXN0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXFfX2l0ZW0tcXVlc3Rpb24tLWFjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ2ZhcV9faXRlbS1hbnN3ZXItLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIHN3aXRjaEZhcSgpO1xufSk7XG4iXX0=
