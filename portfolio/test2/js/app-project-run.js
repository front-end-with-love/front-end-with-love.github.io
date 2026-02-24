(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var app = new Vue({
  el: '#app',
  data: {
    isActiveNav: false,
    isActiveVideo: false
  },
  computed: {},
  methods: {
    showHideNav: function () {
      this.isActiveNav = !this.isActiveNav;
    },
    initSliderOurAdvantages: function () {
      // https://splidejs.com
      document.addEventListener('DOMContentLoaded', function () {
        new Splide('.our-advantages .splide', {
          destroy: true,
          breakpoints: {
            639: {
              arrows: false,
              pagination: true,
              destroy: false
            }
          }
        }).mount();
      });
    },
    initOurPublications: function () {
      // https://splidejs.com
      document.addEventListener('DOMContentLoaded', function () {
        new Splide('.our-publications .splide', {
          perPage: 3,
          arrows: true,
          pagination: false,
          type: 'loop',
          breakpoints: {
            639: {
              perPage: 1,
              arrows: true,
              pagination: false,
              type: 'loop'
            },
            768: {
              perPage: 1,
              arrows: true,
              pagination: false,
              type: 'loop'
            },
            1025: {
              perPage: 1,
              arrows: true,
              pagination: false,
              type: 'loop'
            },
            1449: {
              perPage: 2,
              arrows: true,
              pagination: false,
              type: 'loop'
            }
          }
        }).mount();
      });
    },
    initSliderNewInBlog: function () {
      // https://splidejs.com
      document.addEventListener('DOMContentLoaded', function () {
        new Splide('.new-in-blog .splide').mount();
      });
    },
    initVideoPlayer: function () {
      this.isActiveVideo = !this.isActiveVideo;

      const player = new Plyr('.our-publications__video', {
        hideControls: false,
        captions: {
          active: true
        }
      });
      player.toggleControls(false);

      player.on('ready', () => {
        player.play();
      })

      player.on('play', event => {
        player.toggleControls(true);
      });
    },
    initDesktopMap: function () {
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map-desktop', {
            center: [55.751574, 37.573856],
            zoom: 13
          }, {
            searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/icon-mark.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [15, -15]
          }),

          myPlacemarkWithContent = new ymaps.Placemark([61.407755, 55.177288], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/icon-mark.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
          });

        myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
      });
    },
    initMobileMap: function () {
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map-mobile', {
            center: [55.751574, 37.573856],
            zoom: 13
          }, {
            searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/icon-mark.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [15, -15]
          }),

          myPlacemarkWithContent = new ymaps.Placemark([61.407755, 55.177288], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/icon-mark.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
          });

        myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
      });
    }
  },
  mounted() {
    this.initSliderOurAdvantages();
    this.initSliderNewInBlog();
    this.initOurPublications();
    this.initDesktopMap();
    this.initMobileMap();
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGRhdGE6IHtcbiAgICBpc0FjdGl2ZU5hdjogZmFsc2UsXG4gICAgaXNBY3RpdmVWaWRlbzogZmFsc2VcbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd0hpZGVOYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmVOYXYgPSAhdGhpcy5pc0FjdGl2ZU5hdjtcbiAgICB9LFxuICAgIGluaXRTbGlkZXJPdXJBZHZhbnRhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBodHRwczovL3NwbGlkZWpzLmNvbVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IFNwbGlkZSgnLm91ci1hZHZhbnRhZ2VzIC5zcGxpZGUnLCB7XG4gICAgICAgICAgZGVzdHJveTogdHJ1ZSxcbiAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNjM5OiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgICAgIGRlc3Ryb3k6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS5tb3VudCgpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBpbml0T3VyUHVibGljYXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBodHRwczovL3NwbGlkZWpzLmNvbVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IFNwbGlkZSgnLm91ci1wdWJsaWNhdGlvbnMgLnNwbGlkZScsIHtcbiAgICAgICAgICBwZXJQYWdlOiAzLFxuICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnbG9vcCcsXG4gICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDYzOToge1xuICAgICAgICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgICB0eXBlOiAnbG9vcCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgICAgcGVyUGFnZTogMSxcbiAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2xvb3AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAyNToge1xuICAgICAgICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgICB0eXBlOiAnbG9vcCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxNDQ5OiB7XG4gICAgICAgICAgICAgIHBlclBhZ2U6IDIsXG4gICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgIHR5cGU6ICdsb29wJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkubW91bnQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdFNsaWRlck5ld0luQmxvZzogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gaHR0cHM6Ly9zcGxpZGVqcy5jb21cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBTcGxpZGUoJy5uZXctaW4tYmxvZyAuc3BsaWRlJykubW91bnQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdFZpZGVvUGxheWVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlVmlkZW8gPSAhdGhpcy5pc0FjdGl2ZVZpZGVvO1xuXG4gICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGx5cignLm91ci1wdWJsaWNhdGlvbnNfX3ZpZGVvJywge1xuICAgICAgICBoaWRlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBjYXB0aW9uczoge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBsYXllci50b2dnbGVDb250cm9scyhmYWxzZSk7XG5cbiAgICAgIHBsYXllci5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICB9KVxuXG4gICAgICBwbGF5ZXIub24oJ3BsYXknLCBldmVudCA9PiB7XG4gICAgICAgIHBsYXllci50b2dnbGVDb250cm9scyh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdERlc2t0b3BNYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwLWRlc2t0b3AnLCB7XG4gICAgICAgICAgICBjZW50ZXI6IFs1NS43NTE1NzQsIDM3LjU3Mzg1Nl0sXG4gICAgICAgICAgICB6b29tOiAxM1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlYXJjaENvbnRyb2xQcm92aWRlcjogJ3lhbmRleCNzZWFyY2gnXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQvNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXG4gICAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcbiAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7IGZvbnQtd2VpZ2h0OiBib2xkO1wiPiRbcHJvcGVydGllcy5pY29uQ29udGVudF08L2Rpdj4nXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhteU1hcC5nZXRDZW50ZXIoKSwge1xuICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LHRgdGC0LLQtdC90L3Ri9C5INC30L3QsNGH0L7QuiDQvNC10YLQutC4JyxcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0K3RgtC+INC60YDQsNGB0LjQstCw0Y8g0LzQtdGC0LrQsCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxuICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXG4gICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9pY29ucy9pY29uLW1hcmsuc3ZnJyxcbiAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXG4gICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMzAsIDMwXSxcbiAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxuICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cbiAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWzE1LCAtMTVdXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICBteVBsYWNlbWFya1dpdGhDb250ZW50ID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNjEuNDA3NzU1LCA1NS4xNzcyODhdLCB7XG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60Lgg0YEg0LrQvtC90YLQtdC90YLQvtC8JyxcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0JAg0Y3RgtCwIOKAlCDQvdC+0LLQvtCz0L7QtNC90Y/RjycsXG4gICAgICAgICAgICBpY29uQ29udGVudDogJzEyJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vINCe0L/RhtC40LguXG4gICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxuICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvaWNvbnMvaWNvbi1tYXJrLnN2ZycsXG4gICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ4LCA0OF0sXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cbiAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXG4gICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjQsIC0yNF0sXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INGB0LvQvtGPINGBINGB0L7QtNC10YDQttC40LzRi9C8INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdC70L7RjyDRgSDQutCw0YDRgtC40L3QutC+0LkuXG4gICAgICAgICAgICBpY29uQ29udGVudE9mZnNldDogWzE1LCAxNV0sXG4gICAgICAgICAgICAvLyDQnNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXG4gICAgICAgICAgICBpY29uQ29udGVudExheW91dDogTXlJY29uQ29udGVudExheW91dFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIG15TWFwLmdlb09iamVjdHNcbiAgICAgICAgICAuYWRkKG15UGxhY2VtYXJrKVxuICAgICAgICAgIC5hZGQobXlQbGFjZW1hcmtXaXRoQ29udGVudCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRNb2JpbGVNYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwLW1vYmlsZScsIHtcbiAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MTU3NCwgMzcuNTczODU2XSxcbiAgICAgICAgICAgIHpvb206IDEzXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIC8vINCh0L7Qt9C00LDRkdC8INC80LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cbiAgICAgICAgICBNeUljb25Db250ZW50TGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKFxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKG15TWFwLmdldENlbnRlcigpLCB7XG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60LgnLFxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQrdGC0L4g0LrRgNCw0YHQuNCy0LDRjyDQvNC10YLQutCwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vINCe0L/RhtC40LguXG4gICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXG4gICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi4vaW1nL2ljb25zL2ljb24tbWFyay5zdmcnLFxuICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFszMCwgMzBdLFxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XG4gICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbMTUsIC0xNV1cbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIG15UGxhY2VtYXJrV2l0aENvbnRlbnQgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs2MS40MDc3NTUsIDU1LjE3NzI4OF0sIHtcbiAgICAgICAgICAgIGhpbnRDb250ZW50OiAn0KHQvtCx0YHRgtCy0LXQvdC90YvQuSDQt9C90LDRh9C+0Log0LzQtdGC0LrQuCDRgSDQutC+0L3RgtC10L3RgtC+0LwnLFxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQkCDRjdGC0LAg4oCUINC90L7QstC+0LPQvtC00L3Rj9GPJyxcbiAgICAgICAgICAgIGljb25Db250ZW50OiAnMTInXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cbiAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2VXaXRoQ29udGVudCcsXG4gICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9pY29ucy9pY29uLW1hcmsuc3ZnJyxcbiAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXG4gICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDgsIDQ4XSxcbiAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxuICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cbiAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0yNCwgLTI0XSxcbiAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0YHQu9C+0Y8g0YEg0YHQvtC00LXRgNC20LjQvNGL0Lwg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INGB0LvQvtGPINGBINC60LDRgNGC0LjQvdC60L7QuS5cbiAgICAgICAgICAgIGljb25Db250ZW50T2Zmc2V0OiBbMTUsIDE1XSxcbiAgICAgICAgICAgIC8vINCc0LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cbiAgICAgICAgICAgIGljb25Db250ZW50TGF5b3V0OiBNeUljb25Db250ZW50TGF5b3V0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0c1xuICAgICAgICAgIC5hZGQobXlQbGFjZW1hcmspXG4gICAgICAgICAgLmFkZChteVBsYWNlbWFya1dpdGhDb250ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmluaXRTbGlkZXJPdXJBZHZhbnRhZ2VzKCk7XG4gICAgdGhpcy5pbml0U2xpZGVyTmV3SW5CbG9nKCk7XG4gICAgdGhpcy5pbml0T3VyUHVibGljYXRpb25zKCk7XG4gICAgdGhpcy5pbml0RGVza3RvcE1hcCgpO1xuICAgIHRoaXMuaW5pdE1vYmlsZU1hcCgpO1xuICB9XG59KTtcbiJdfQ==
