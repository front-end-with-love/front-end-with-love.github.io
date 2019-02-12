(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
        showNav: function () {
            $('.nav__container_top').animate({
                opacity: '1',
                left: '25px'
            }, 500);
            $('.nav__container_middle').animate({
                bottom: '0'
            }, 400);
        },
        showCoverTitle: function () {
            $('.cover__title').animate({
                opacity: '1',
                top: '0'
            }, 400);
        },
        scrollrInit: function () {
            if ($(window).width() >= 1200) {
                skrollr.init();
            }
            else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgZGF0YToge1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaG93TmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcubmF2X19jb250YWluZXJfdG9wJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICcyNXB4J1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICQoJy5uYXZfX2NvbnRhaW5lcl9taWRkbGUnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBib3R0b206ICcwJ1xuICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NvdmVyVGl0bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5jb3Zlcl9fdGl0bGUnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICAgICAgdG9wOiAnMCdcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbHJJbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTIwMCkge1xuICAgICAgICAgICAgICAgIHNrcm9sbHIuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2tyb2xsci5pbml0KCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5zaG93TmF2KCk7XG4gICAgICAgIHRoaXMuc2hvd0NvdmVyVGl0bGUoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxySW5pdCgpO1xuICAgIH1cbn0pOyJdfQ==
