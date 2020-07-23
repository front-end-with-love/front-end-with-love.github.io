(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function () {
  // Sign in
  function maskPhone () {
    $.mask.definitions['~'] = '[9]';
    $('.sign-in__form-input--phone').mask('+7 (~99) 999-99-99', {
      autoclear: false
    });
  }

  // Footer
  function showHideFooterNav () {
    $('.footer__nav-title-mobile').on('click', function () {
      $(this).closest('.footer__nav-group-mobile').toggleClass('footer__nav-group-mobile--active');
    });
  }
  showHideFooterNav();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIFNpZ24gaW5cbiAgZnVuY3Rpb24gbWFza1Bob25lICgpIHtcbiAgICAkLm1hc2suZGVmaW5pdGlvbnNbJ34nXSA9ICdbOV0nO1xuICAgICQoJy5zaWduLWluX19mb3JtLWlucHV0LS1waG9uZScpLm1hc2soJys3ICh+OTkpIDk5OS05OS05OScsIHtcbiAgICAgIGF1dG9jbGVhcjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZvb3RlclxuICBmdW5jdGlvbiBzaG93SGlkZUZvb3Rlck5hdiAoKSB7XG4gICAgJCgnLmZvb3Rlcl9fbmF2LXRpdGxlLW1vYmlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvb3Rlcl9fbmF2LWdyb3VwLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX25hdi1ncm91cC1tb2JpbGUtLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIHNob3dIaWRlRm9vdGVyTmF2KCk7XG59KTtcbiJdfQ==
