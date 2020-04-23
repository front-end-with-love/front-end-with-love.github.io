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

  function switchTooltip() {
    $('.content-header__tooltip-title').on('click', function() {
      $(this)
        .closest('.content-header__tooltip-item')
        .toggleClass('content-header__tooltip-item--active')
        .siblings()
        .removeClass('content-header__tooltip-item--active');
    });
    $(document).bind('click', function(e) {
      if (!$(e.target).parents().hasClass('content-header__tooltip-item--active')) {
        $('.content-header__tooltip-item--active')
          .removeClass('content-header__tooltip-item--active');
      }
    });
  }
  switchTooltip();

  function playVideo(elementClicked, elementPlayed) {
    $(elementClicked).on('click', function() {
      $(elementClicked).addClass(elementClicked.substr(1) + '--hidden');
      $(elementPlayed).get(0).play();
    });
  }
  playVideo('.lesson__video-poster', '#lesson-video');

  $('.settings__text-input--phone-number').mask('+7 (999)999-99-99');

  function avatarUpload() {
    var readURL = function(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          $('.settings__avatar-profile-pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
      }
    }

    $('.settings__avatar-file-upload').on('change', function() {
      readURL(this);
    });

    $('.settings__avatar-upload-btn').on('click', function() {
      $('.settings__avatar-file-upload').click();
    });
  }
  avatarUpload();

  function accordionFaqShowHide(question, parent) {
    $(question).on('click', function () {
      $(this).closest(parent).toggleClass(parent.substr(1) + '--active');
    });
  }
  accordionFaqShowHide('.faq__item-question','.faq__item');
  accordionFaqShowHide('.more-about__program-item-question','.more-about__program-item');
  accordionFaqShowHide('.more-about__faq-item-question','.more-about__faq-item');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvcGVuQ2xvc2VNb2RhbChjbGlja2VkRWxlbWVudCwgbW9kYWwsIG1vZGFsT3ZlcmxheSwgZGF0YU1vZGFsKSB7XG4gICAgdmFyIG1vZGFsQ2xhc3NMZW5ndGggPSAkKG1vZGFsKS50b1N0cmluZygpLmxlbmd0aDtcbiAgICB2YXIgYWN0aXZlQ2xhc3NNb2RhbCA9IChtb2RhbC5zdWJzdHIoMSwgbW9kYWxDbGFzc0xlbmd0aCAtIDEpICsgJy0tYWN0aXZlJyk7XG5cbiAgICAkKGNsaWNrZWRFbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQobW9kYWwpLmFkZENsYXNzKGFjdGl2ZUNsYXNzTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgJChtb2RhbE92ZXJsYXkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJChtb2RhbCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3NNb2RhbCk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwtYXV0aC1yZWdfX2lucHV0LXRleHQtLXBob25lLCAuY292ZXItc2lnbi11cF9faW5wdXQtdGV4dC0tcGhvbmUsIC5tb2RhbC1yZWNlaXZlLWNvbnN1bHRhdGlvbl9faW5wdXQtdGV4dC0tcGhvbmUnKS5tYXNrKCcrNyAoOTk5KTk5OS05OTk5Jyk7XG4gIH1cbiAgb3BlbkNsb3NlTW9kYWwoJy5oZWFkZXJfX2xpbmsnLCAnLm1vZGFsLWF1dGgtcmVnJywgJy5tb2RhbC1hdXRoLXJlZ19fb3ZlcmxheScsIDApO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaFJlZ0xvZ2luRm9ybSgpIHtcbiAgICAkKCcubW9kYWwtYXV0aC1yZWdfX25hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudERhdGEgPSAkKHRoaXMpLmRhdGEoJ2NvbnRlbnQnKTtcbiAgICAgICQoJy5tb2RhbC1hdXRoLXJlZ19fbmF2LWl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtb2RhbC1hdXRoLXJlZ19fbmF2LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgJCgnLm1vZGFsLWF1dGgtcmVnX19jb250ZW50LWl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtb2RhbC1hdXRoLXJlZ19fY29udGVudC1pdGVtLS1hY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21vZGFsLWF1dGgtcmVnX19uYXYtaXRlbS0tYWN0aXZlJyk7XG4gICAgICAkKCcubW9kYWwtYXV0aC1yZWdfX2NvbnRlbnQtaXRlbVtkYXRhLWNvbnRlbnQ9XCInICsgY3VycmVudERhdGEgKyAnXCJdJykuYWRkQ2xhc3MoJ21vZGFsLWF1dGgtcmVnX19jb250ZW50LWl0ZW0tLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIHN3aXRjaFJlZ0xvZ2luRm9ybSgpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaFRvb2x0aXAoKSB7XG4gICAgJCgnLmNvbnRlbnQtaGVhZGVyX190b29sdGlwLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5jbG9zZXN0KCcuY29udGVudC1oZWFkZXJfX3Rvb2x0aXAtaXRlbScpXG4gICAgICAgIC50b2dnbGVDbGFzcygnY29udGVudC1oZWFkZXJfX3Rvb2x0aXAtaXRlbS0tYWN0aXZlJylcbiAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdjb250ZW50LWhlYWRlcl9fdG9vbHRpcC1pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghJChlLnRhcmdldCkucGFyZW50cygpLmhhc0NsYXNzKCdjb250ZW50LWhlYWRlcl9fdG9vbHRpcC1pdGVtLS1hY3RpdmUnKSkge1xuICAgICAgICAkKCcuY29udGVudC1oZWFkZXJfX3Rvb2x0aXAtaXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbnRlbnQtaGVhZGVyX190b29sdGlwLWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHN3aXRjaFRvb2x0aXAoKTtcblxuICBmdW5jdGlvbiBwbGF5VmlkZW8oZWxlbWVudENsaWNrZWQsIGVsZW1lbnRQbGF5ZWQpIHtcbiAgICAkKGVsZW1lbnRDbGlja2VkKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQoZWxlbWVudENsaWNrZWQpLmFkZENsYXNzKGVsZW1lbnRDbGlja2VkLnN1YnN0cigxKSArICctLWhpZGRlbicpO1xuICAgICAgJChlbGVtZW50UGxheWVkKS5nZXQoMCkucGxheSgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlWaWRlbygnLmxlc3Nvbl9fdmlkZW8tcG9zdGVyJywgJyNsZXNzb24tdmlkZW8nKTtcblxuICAkKCcuc2V0dGluZ3NfX3RleHQtaW5wdXQtLXBob25lLW51bWJlcicpLm1hc2soJys3ICg5OTkpOTk5LTk5LTk5Jyk7XG5cbiAgZnVuY3Rpb24gYXZhdGFyVXBsb2FkKCkge1xuICAgIHZhciByZWFkVVJMID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICQoJy5zZXR0aW5nc19fYXZhdGFyLXByb2ZpbGUtcGljJykuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKCcuc2V0dGluZ3NfX2F2YXRhci1maWxlLXVwbG9hZCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlYWRVUkwodGhpcyk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2V0dGluZ3NfX2F2YXRhci11cGxvYWQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCcuc2V0dGluZ3NfX2F2YXRhci1maWxlLXVwbG9hZCcpLmNsaWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgYXZhdGFyVXBsb2FkKCk7XG5cbiAgZnVuY3Rpb24gYWNjb3JkaW9uRmFxU2hvd0hpZGUocXVlc3Rpb24sIHBhcmVudCkge1xuICAgICQocXVlc3Rpb24pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuY2xvc2VzdChwYXJlbnQpLnRvZ2dsZUNsYXNzKHBhcmVudC5zdWJzdHIoMSkgKyAnLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBhY2NvcmRpb25GYXFTaG93SGlkZSgnLmZhcV9faXRlbS1xdWVzdGlvbicsJy5mYXFfX2l0ZW0nKTtcbiAgYWNjb3JkaW9uRmFxU2hvd0hpZGUoJy5tb3JlLWFib3V0X19wcm9ncmFtLWl0ZW0tcXVlc3Rpb24nLCcubW9yZS1hYm91dF9fcHJvZ3JhbS1pdGVtJyk7XG4gIGFjY29yZGlvbkZhcVNob3dIaWRlKCcubW9yZS1hYm91dF9fZmFxLWl0ZW0tcXVlc3Rpb24nLCcubW9yZS1hYm91dF9fZmFxLWl0ZW0nKTtcbn0pO1xuIl19
