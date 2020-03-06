(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  function faqShowHide(element) {
    $(element).on('click', function() {
      $(this).toggleClass('service__faq-item--active');
    });
  }
  faqShowHide('.service__faq-item');

  function calcHeightServices () {
    var heightContainer = $('.services__container').outerHeight();
    var newHeightContainer = heightContainer - 80;
    $('.services__container').css('height', newHeightContainer + 'px')
  }
  calcHeightServices();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBmYXFTaG93SGlkZShlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3NlcnZpY2VfX2ZhcS1pdGVtLS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBmYXFTaG93SGlkZSgnLnNlcnZpY2VfX2ZhcS1pdGVtJyk7XG5cbiAgZnVuY3Rpb24gY2FsY0hlaWdodFNlcnZpY2VzICgpIHtcbiAgICB2YXIgaGVpZ2h0Q29udGFpbmVyID0gJCgnLnNlcnZpY2VzX19jb250YWluZXInKS5vdXRlckhlaWdodCgpO1xuICAgIHZhciBuZXdIZWlnaHRDb250YWluZXIgPSBoZWlnaHRDb250YWluZXIgLSA4MDtcbiAgICAkKCcuc2VydmljZXNfX2NvbnRhaW5lcicpLmNzcygnaGVpZ2h0JywgbmV3SGVpZ2h0Q29udGFpbmVyICsgJ3B4JylcbiAgfVxuICBjYWxjSGVpZ2h0U2VydmljZXMoKTtcbn0pO1xuIl19
