(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  function clickCheckoutQuestion() {
    $('.checkout__label-question').on('click', function() {
      event.preventDefault();

      let dataValue = $(this).data('value');
      let questionClass = $(this).attr('class');
      let position = $(this).offset();
      let question = $(this);

      function closePopup () {
        $('.checkout__label-question').each(function(index, element) {
          $(element).removeClass('checkout__label-question--active');
        });
        $('.checkout__popup').each(function(index, element) {
          $(element).removeClass('checkout__popup--active');
        });
      }

      if (questionClass.indexOf('checkout__label-question--active') >= 0) {
        closePopup();
      }
      else {
        closePopup();
        $(question).addClass('checkout__label-question--active');
        $('.checkout__popup[data-value="' + dataValue + '"]')
            .css({
              'top': position.top + 'px',
              'left': position.left + 'px'
            })
            .addClass('checkout__popup--active');
      }

      $('.checkout__popup-close').on('click', function() {
          closePopup();
        });
    });
  }
  clickCheckoutQuestion();

  function calcCheckout() {
    let areaValue = 0;
    $('.checkout__input-text--area').on('keypress keyup blur', function(event) {
      $(this).val($(this).val().replace(/[^\d].+/, ''));
      if ((event.which < 48 || event.which > 57)) {
        event.preventDefault();
      }
      areaValue = $(this).val();
      calcscore();
    });

    function calcscore() {
      let score = 0;
      let listServices = '';
      let lengthActiveServices = 0;
      $('.checkout__input-calc:checked').each(function() {
        let titleService = $(this).closest('.checkout__input-wrapper').find('.checkout__label-text').text();
        let priceService = $(this).val();
        let idService = $(this).attr('id');

        listServices += ('<div data-id="' + idService + '" class="checkout__sidebar-total-item"><div class="checkout__sidebar-total-item-col checkout__sidebar-total-item-col--left"><div class="checkout__sidebar-total-item-title">' + titleService + '</div><div class="checkout__sidebar-total-item-title-link">убрать</div></div><div class="checkout__sidebar-total-item-col checkout__sidebar-total-item-col--right"><div class="checkout__sidebar-total-item-price">' + priceService + ' тг. м<sup class="checkout__sidebar-total-item-price-sup">2</sup></div></div></div>');

        $('.checkout__sidebar-total-items-wrapper').html(listServices);

        removeService();

        if ($(this).hasClass('checkout__input-calc-area')) {
          score += (Number($(this).val()) * areaValue);
        } else {
          score += Number($(this).val());
        }
      });

      $('.checkout__total-sum, .checkout__sidebar-text:last-child').empty();
      $('.checkout__total-sum, .checkout__sidebar-text:last-child').text(score + ' тг.');
    }

    function checkAll() {
      $('.checkout__form-link').on('click', function() {
        $(this).nextAll('.checkout__input-checkbox-wrapper')
        .find('.checkout__input-calc')
        .not('.checkout__input-calc:checked')
        .each(function(index, value) {
          $(this).click();
        });
        $(this).addClass('checkout__form-link--full');
        $('.checkout__form-link.checkout__form-link--full').on('click', function() {
          $(this).nextAll('.checkout__input-checkbox-wrapper')
          .find('.checkout__input-calc')
          .each(function(index, value) {
            $(this).click();
          });
          $(this).removeClass('checkout__form-link--full');
        });
      });
    }
    checkAll();

    function removeService() {
      $('.checkout__sidebar-total-item-title-link').on('click', function() {
        console.log('click')
        let idService = $(this).closest('.checkout__sidebar-total-item').data('id');
        $(this).closest('.checkout__sidebar-total-item').remove();
        $('#' + idService).click();
        // $('#' + idService).click().prop('checked', false);
      });
    }

    $('.checkout__input-calc').change(function() {
      calcscore();
      lengthActiveServices = $('.checkout__input-calc:checked').length;
      if (lengthActiveServices < 1) {
        $('.checkout__sidebar-total-items-wrapper').html('')
      }
      else {
        $('.checkout button[type="submit"]').removeAttr('disabled')
      }
    });
  }
  calcCheckout();

  function serializeForm() {
    $('.checkout button[type="submit"]').on('click', function(form) {
      form.preventDefault();
      alert(JSON.stringify($(this).closest('form.checkout').serializeArray()));
    });
  }
  serializeForm();

  $('input[name="phone-number"]').mask("+7 (999) 999-99-99");

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjbGlja0NoZWNrb3V0UXVlc3Rpb24oKSB7XG4gICAgJCgnLmNoZWNrb3V0X19sYWJlbC1xdWVzdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGRhdGFWYWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcbiAgICAgIGxldCBxdWVzdGlvbkNsYXNzID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpO1xuICAgICAgbGV0IHBvc2l0aW9uID0gJCh0aGlzKS5vZmZzZXQoKTtcbiAgICAgIGxldCBxdWVzdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAgKCkge1xuICAgICAgICAkKCcuY2hlY2tvdXRfX2xhYmVsLXF1ZXN0aW9uJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2NoZWNrb3V0X19sYWJlbC1xdWVzdGlvbi0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuY2hlY2tvdXRfX3BvcHVwJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2NoZWNrb3V0X19wb3B1cC0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocXVlc3Rpb25DbGFzcy5pbmRleE9mKCdjaGVja291dF9fbGFiZWwtcXVlc3Rpb24tLWFjdGl2ZScpID49IDApIHtcbiAgICAgICAgY2xvc2VQb3B1cCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgJChxdWVzdGlvbikuYWRkQ2xhc3MoJ2NoZWNrb3V0X19sYWJlbC1xdWVzdGlvbi0tYWN0aXZlJyk7XG4gICAgICAgICQoJy5jaGVja291dF9fcG9wdXBbZGF0YS12YWx1ZT1cIicgKyBkYXRhVmFsdWUgKyAnXCJdJylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAndG9wJzogcG9zaXRpb24udG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY2hlY2tvdXRfX3BvcHVwLS1hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgJCgnLmNoZWNrb3V0X19wb3B1cC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgY2xpY2tDaGVja291dFF1ZXN0aW9uKCk7XG5cbiAgZnVuY3Rpb24gY2FsY0NoZWNrb3V0KCkge1xuICAgIGxldCBhcmVhVmFsdWUgPSAwO1xuICAgICQoJy5jaGVja291dF9faW5wdXQtdGV4dC0tYXJlYScpLm9uKCdrZXlwcmVzcyBrZXl1cCBibHVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICQodGhpcykudmFsKCQodGhpcykudmFsKCkucmVwbGFjZSgvW15cXGRdLisvLCAnJykpO1xuICAgICAgaWYgKChldmVudC53aGljaCA8IDQ4IHx8IGV2ZW50LndoaWNoID4gNTcpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBhcmVhVmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgY2FsY3Njb3JlKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjYWxjc2NvcmUoKSB7XG4gICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgbGV0IGxpc3RTZXJ2aWNlcyA9ICcnO1xuICAgICAgbGV0IGxlbmd0aEFjdGl2ZVNlcnZpY2VzID0gMDtcbiAgICAgICQoJy5jaGVja291dF9faW5wdXQtY2FsYzpjaGVja2VkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRpdGxlU2VydmljZSA9ICQodGhpcykuY2xvc2VzdCgnLmNoZWNrb3V0X19pbnB1dC13cmFwcGVyJykuZmluZCgnLmNoZWNrb3V0X19sYWJlbC10ZXh0JykudGV4dCgpO1xuICAgICAgICBsZXQgcHJpY2VTZXJ2aWNlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IGlkU2VydmljZSA9ICQodGhpcykuYXR0cignaWQnKTtcblxuICAgICAgICBsaXN0U2VydmljZXMgKz0gKCc8ZGl2IGRhdGEtaWQ9XCInICsgaWRTZXJ2aWNlICsgJ1wiIGNsYXNzPVwiY2hlY2tvdXRfX3NpZGViYXItdG90YWwtaXRlbVwiPjxkaXYgY2xhc3M9XCJjaGVja291dF9fc2lkZWJhci10b3RhbC1pdGVtLWNvbCBjaGVja291dF9fc2lkZWJhci10b3RhbC1pdGVtLWNvbC0tbGVmdFwiPjxkaXYgY2xhc3M9XCJjaGVja291dF9fc2lkZWJhci10b3RhbC1pdGVtLXRpdGxlXCI+JyArIHRpdGxlU2VydmljZSArICc8L2Rpdj48ZGl2IGNsYXNzPVwiY2hlY2tvdXRfX3NpZGViYXItdG90YWwtaXRlbS10aXRsZS1saW5rXCI+0YPQsdGA0LDRgtGMPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNoZWNrb3V0X19zaWRlYmFyLXRvdGFsLWl0ZW0tY29sIGNoZWNrb3V0X19zaWRlYmFyLXRvdGFsLWl0ZW0tY29sLS1yaWdodFwiPjxkaXYgY2xhc3M9XCJjaGVja291dF9fc2lkZWJhci10b3RhbC1pdGVtLXByaWNlXCI+JyArIHByaWNlU2VydmljZSArICcg0YLQsy4g0Lw8c3VwIGNsYXNzPVwiY2hlY2tvdXRfX3NpZGViYXItdG90YWwtaXRlbS1wcmljZS1zdXBcIj4yPC9zdXA+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgJCgnLmNoZWNrb3V0X19zaWRlYmFyLXRvdGFsLWl0ZW1zLXdyYXBwZXInKS5odG1sKGxpc3RTZXJ2aWNlcyk7XG5cbiAgICAgICAgcmVtb3ZlU2VydmljZSgpO1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdjaGVja291dF9faW5wdXQtY2FsYy1hcmVhJykpIHtcbiAgICAgICAgICBzY29yZSArPSAoTnVtYmVyKCQodGhpcykudmFsKCkpICogYXJlYVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29yZSArPSBOdW1iZXIoJCh0aGlzKS52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKCcuY2hlY2tvdXRfX3RvdGFsLXN1bSwgLmNoZWNrb3V0X19zaWRlYmFyLXRleHQ6bGFzdC1jaGlsZCcpLmVtcHR5KCk7XG4gICAgICAkKCcuY2hlY2tvdXRfX3RvdGFsLXN1bSwgLmNoZWNrb3V0X19zaWRlYmFyLXRleHQ6bGFzdC1jaGlsZCcpLnRleHQoc2NvcmUgKyAnINGC0LMuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tBbGwoKSB7XG4gICAgICAkKCcuY2hlY2tvdXRfX2Zvcm0tbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLm5leHRBbGwoJy5jaGVja291dF9faW5wdXQtY2hlY2tib3gtd3JhcHBlcicpXG4gICAgICAgIC5maW5kKCcuY2hlY2tvdXRfX2lucHV0LWNhbGMnKVxuICAgICAgICAubm90KCcuY2hlY2tvdXRfX2lucHV0LWNhbGM6Y2hlY2tlZCcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICQodGhpcykuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoZWNrb3V0X19mb3JtLWxpbmstLWZ1bGwnKTtcbiAgICAgICAgJCgnLmNoZWNrb3V0X19mb3JtLWxpbmsuY2hlY2tvdXRfX2Zvcm0tbGluay0tZnVsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykubmV4dEFsbCgnLmNoZWNrb3V0X19pbnB1dC1jaGVja2JveC13cmFwcGVyJylcbiAgICAgICAgICAuZmluZCgnLmNoZWNrb3V0X19pbnB1dC1jYWxjJylcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICQodGhpcykuY2xpY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdjaGVja291dF9fZm9ybS1saW5rLS1mdWxsJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrQWxsKCk7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTZXJ2aWNlKCkge1xuICAgICAgJCgnLmNoZWNrb3V0X19zaWRlYmFyLXRvdGFsLWl0ZW0tdGl0bGUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgICAgICBsZXQgaWRTZXJ2aWNlID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hlY2tvdXRfX3NpZGViYXItdG90YWwtaXRlbScpLmRhdGEoJ2lkJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoZWNrb3V0X19zaWRlYmFyLXRvdGFsLWl0ZW0nKS5yZW1vdmUoKTtcbiAgICAgICAgJCgnIycgKyBpZFNlcnZpY2UpLmNsaWNrKCk7XG4gICAgICAgIC8vICQoJyMnICsgaWRTZXJ2aWNlKS5jbGljaygpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCcuY2hlY2tvdXRfX2lucHV0LWNhbGMnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBjYWxjc2NvcmUoKTtcbiAgICAgIGxlbmd0aEFjdGl2ZVNlcnZpY2VzID0gJCgnLmNoZWNrb3V0X19pbnB1dC1jYWxjOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoQWN0aXZlU2VydmljZXMgPCAxKSB7XG4gICAgICAgICQoJy5jaGVja291dF9fc2lkZWJhci10b3RhbC1pdGVtcy13cmFwcGVyJykuaHRtbCgnJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCcuY2hlY2tvdXQgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY2FsY0NoZWNrb3V0KCk7XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplRm9ybSgpIHtcbiAgICAkKCcuY2hlY2tvdXQgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICBmb3JtLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeSgkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0uY2hlY2tvdXQnKS5zZXJpYWxpemVBcnJheSgpKSk7XG4gICAgfSk7XG4gIH1cbiAgc2VyaWFsaXplRm9ybSgpO1xuXG4gICQoJ2lucHV0W25hbWU9XCJwaG9uZS1udW1iZXJcIl0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuXG59KTtcbiJdfQ==
