(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var app = new Vue({
  el: '#app',
  data: {},
  methods: {
    showNav: function() {
      $('.nav__container_top').animate({
        opacity: '1',
        left: '25px'
      }, 500);
      $('.nav__container_middle').animate({
        bottom: '0'
      }, 400);
    },
    showCoverTitle: function() {
      $('.cover__title').animate({
        opacity: '1',
        top: '0'
      }, 400);
    },
    scrollrInit: function() {
      if ($(window).width() >= 1200) {
        skrollr.init();
      } else {
        skrollr.init().destroy();
      }
    },
  },
  mounted() {
    this.showNav();
    this.showCoverTitle();
    this.scrollrInit();
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBhcHAgPSBuZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgZGF0YToge30sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93TmF2OiBmdW5jdGlvbigpIHtcbiAgICAgICQoJy5uYXZfX2NvbnRhaW5lcl90b3AnKS5hbmltYXRlKHtcbiAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICBsZWZ0OiAnMjVweCdcbiAgICAgIH0sIDUwMCk7XG4gICAgICAkKCcubmF2X19jb250YWluZXJfbWlkZGxlJykuYW5pbWF0ZSh7XG4gICAgICAgIGJvdHRvbTogJzAnXG4gICAgICB9LCA0MDApO1xuICAgIH0sXG4gICAgc2hvd0NvdmVyVGl0bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgJCgnLmNvdmVyX190aXRsZScpLmFuaW1hdGUoe1xuICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgIHRvcDogJzAnXG4gICAgICB9LCA0MDApO1xuICAgIH0sXG4gICAgc2Nyb2xsckluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDEyMDApIHtcbiAgICAgICAgc2tyb2xsci5pbml0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBza3JvbGxyLmluaXQoKS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnNob3dOYXYoKTtcbiAgICB0aGlzLnNob3dDb3ZlclRpdGxlKCk7XG4gICAgdGhpcy5zY3JvbGxySW5pdCgpO1xuICB9XG59KTtcbiJdfQ==
