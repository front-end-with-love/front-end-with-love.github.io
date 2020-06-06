(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  // video
  if ($('.cover__player').length) {
    playVideo();
  }

  function playVideo() {
    const myVideo = document.getElementById('cover__player');

    // Not all browsers return promise from .play().
    const playPromise = myVideo.play() || Promise.reject('');
    playPromise.then(() => {
      $('.cover').addClass('cover--hide-bg');
      // Video could be autoplayed, do nothing.
    }).catch(err => {
      $('.cover').addClass('cover--hide-bg');
      // Video couldn't be autoplayed because of autoplay policy. Mute it and play.
      myVideo.muted = true;
      myVideo.play();
      // $('.cover__player').addClass('cover__player-wrapper--hidden')
    });
  }

  // map
  // let windowWidth = $(window).outerWidth();
  // if (windowWidth >= 1024) {
  //   ymaps.ready(initDesktopMap);
  //   // init scrollr
  //   skrollr.init();
  // } else {
  //   ymaps.ready(initMobileMap);
  // }

  if ($('#contacts__map').length) {
     ymaps.ready(initDesktopMap);
  }

  function initDesktopMap() {
    let myMap;
    myMap = new ymaps.Map('contacts__map', {
      center: [
        [51.6045583305986, 45.93546900000001]
      ],
      zoom: 15,
      controls: []
    });

    // let myPlacemark = new ymaps.Placemark([55.654989, 37.730906], null, {
    //   iconLayout: 'default#image',
    //   iconImageHref: '../img/map/icon-marker.svg',
    //   iconImageSize: [56, 68],
    //   iconImageOffset: [-28, -68]
    // });
    // myMap.geoObjects.add(myPlacemark);

    // let myPlacemark2 = new ymaps.Placemark([59.932883, 30.359724], null, {
    //   iconLayout: 'default#image',
    //   iconImageHref: '../img/map/icon-marker.svg',
    //   iconImageSize: [56, 68],
    //   iconImageOffset: [-28, -68]
    // });
    // myMap.geoObjects.add(myPlacemark2);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIHZpZGVvXG4gIGlmICgkKCcuY292ZXJfX3BsYXllcicpLmxlbmd0aCkge1xuICAgIHBsYXlWaWRlbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVZpZGVvKCkge1xuICAgIGNvbnN0IG15VmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY292ZXJfX3BsYXllcicpO1xuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyByZXR1cm4gcHJvbWlzZSBmcm9tIC5wbGF5KCkuXG4gICAgY29uc3QgcGxheVByb21pc2UgPSBteVZpZGVvLnBsYXkoKSB8fCBQcm9taXNlLnJlamVjdCgnJyk7XG4gICAgcGxheVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAkKCcuY292ZXInKS5hZGRDbGFzcygnY292ZXItLWhpZGUtYmcnKTtcbiAgICAgIC8vIFZpZGVvIGNvdWxkIGJlIGF1dG9wbGF5ZWQsIGRvIG5vdGhpbmcuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICQoJy5jb3ZlcicpLmFkZENsYXNzKCdjb3Zlci0taGlkZS1iZycpO1xuICAgICAgLy8gVmlkZW8gY291bGRuJ3QgYmUgYXV0b3BsYXllZCBiZWNhdXNlIG9mIGF1dG9wbGF5IHBvbGljeS4gTXV0ZSBpdCBhbmQgcGxheS5cbiAgICAgIG15VmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgbXlWaWRlby5wbGF5KCk7XG4gICAgICAvLyAkKCcuY292ZXJfX3BsYXllcicpLmFkZENsYXNzKCdjb3Zlcl9fcGxheWVyLXdyYXBwZXItLWhpZGRlbicpXG4gICAgfSk7XG4gIH1cblxuICAvLyBtYXBcbiAgLy8gbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKTtcbiAgLy8gaWYgKHdpbmRvd1dpZHRoID49IDEwMjQpIHtcbiAgLy8gICB5bWFwcy5yZWFkeShpbml0RGVza3RvcE1hcCk7XG4gIC8vICAgLy8gaW5pdCBzY3JvbGxyXG4gIC8vICAgc2tyb2xsci5pbml0KCk7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgeW1hcHMucmVhZHkoaW5pdE1vYmlsZU1hcCk7XG4gIC8vIH1cblxuICBpZiAoJCgnI2NvbnRhY3RzX19tYXAnKS5sZW5ndGgpIHtcbiAgICAgeW1hcHMucmVhZHkoaW5pdERlc2t0b3BNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdERlc2t0b3BNYXAoKSB7XG4gICAgbGV0IG15TWFwO1xuICAgIG15TWFwID0gbmV3IHltYXBzLk1hcCgnY29udGFjdHNfX21hcCcsIHtcbiAgICAgIGNlbnRlcjogW1xuICAgICAgICBbNTEuNjA0NTU4MzMwNTk4NiwgNDUuOTM1NDY5MDAwMDAwMDFdXG4gICAgICBdLFxuICAgICAgem9vbTogMTUsXG4gICAgICBjb250cm9sczogW11cbiAgICB9KTtcblxuICAgIC8vIGxldCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1LjY1NDk4OSwgMzcuNzMwOTA2XSwgbnVsbCwge1xuICAgIC8vICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIC8vICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9tYXAvaWNvbi1tYXJrZXIuc3ZnJyxcbiAgICAvLyAgIGljb25JbWFnZVNpemU6IFs1NiwgNjhdLFxuICAgIC8vICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI4LCAtNjhdXG4gICAgLy8gfSk7XG4gICAgLy8gbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuXG4gICAgLy8gbGV0IG15UGxhY2VtYXJrMiA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU5LjkzMjg4MywgMzAuMzU5NzI0XSwgbnVsbCwge1xuICAgIC8vICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIC8vICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9tYXAvaWNvbi1tYXJrZXIuc3ZnJyxcbiAgICAvLyAgIGljb25JbWFnZVNpemU6IFs1NiwgNjhdLFxuICAgIC8vICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI4LCAtNjhdXG4gICAgLy8gfSk7XG4gICAgLy8gbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmsyKTtcbiAgfVxufSk7XG4iXX0=
