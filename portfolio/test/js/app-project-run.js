(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {

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

  if ($('.cover__player').length) {
    playVideo();
  }

  // video
  function playVideo() {
    const myVideo = document.getElementById('cover__player');

    // Not all browsers return promise from .play().
    const playPromise = myVideo.play() || Promise.reject('');
    playPromise.then(() => {
      // Video could be autoplayed, do nothing.
    }).catch(err => {
      // Video couldn't be autoplayed because of autoplay policy. Mute it and play.
      myVideo.muted = true;
      myVideo.play();
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyBtYXBcbiAgLy8gbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKTtcbiAgLy8gaWYgKHdpbmRvd1dpZHRoID49IDEwMjQpIHtcbiAgLy8gICB5bWFwcy5yZWFkeShpbml0RGVza3RvcE1hcCk7XG4gIC8vICAgLy8gaW5pdCBzY3JvbGxyXG4gIC8vICAgc2tyb2xsci5pbml0KCk7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgeW1hcHMucmVhZHkoaW5pdE1vYmlsZU1hcCk7XG4gIC8vIH1cblxuICBpZiAoJCgnI2NvbnRhY3RzX19tYXAnKS5sZW5ndGgpIHtcbiAgICAgeW1hcHMucmVhZHkoaW5pdERlc2t0b3BNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdERlc2t0b3BNYXAoKSB7XG4gICAgbGV0IG15TWFwO1xuICAgIG15TWFwID0gbmV3IHltYXBzLk1hcCgnY29udGFjdHNfX21hcCcsIHtcbiAgICAgIGNlbnRlcjogW1xuICAgICAgICBbNTEuNjA0NTU4MzMwNTk4NiwgNDUuOTM1NDY5MDAwMDAwMDFdXG4gICAgICBdLFxuICAgICAgem9vbTogMTUsXG4gICAgICBjb250cm9sczogW11cbiAgICB9KTtcblxuICAgIC8vIGxldCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1LjY1NDk4OSwgMzcuNzMwOTA2XSwgbnVsbCwge1xuICAgIC8vICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIC8vICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9tYXAvaWNvbi1tYXJrZXIuc3ZnJyxcbiAgICAvLyAgIGljb25JbWFnZVNpemU6IFs1NiwgNjhdLFxuICAgIC8vICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI4LCAtNjhdXG4gICAgLy8gfSk7XG4gICAgLy8gbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuXG4gICAgLy8gbGV0IG15UGxhY2VtYXJrMiA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU5LjkzMjg4MywgMzAuMzU5NzI0XSwgbnVsbCwge1xuICAgIC8vICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIC8vICAgaWNvbkltYWdlSHJlZjogJy4uL2ltZy9tYXAvaWNvbi1tYXJrZXIuc3ZnJyxcbiAgICAvLyAgIGljb25JbWFnZVNpemU6IFs1NiwgNjhdLFxuICAgIC8vICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI4LCAtNjhdXG4gICAgLy8gfSk7XG4gICAgLy8gbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmsyKTtcbiAgfVxuXG4gIGlmICgkKCcuY292ZXJfX3BsYXllcicpLmxlbmd0aCkge1xuICAgIHBsYXlWaWRlbygpO1xuICB9XG5cbiAgLy8gdmlkZW9cbiAgZnVuY3Rpb24gcGxheVZpZGVvKCkge1xuICAgIGNvbnN0IG15VmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY292ZXJfX3BsYXllcicpO1xuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyByZXR1cm4gcHJvbWlzZSBmcm9tIC5wbGF5KCkuXG4gICAgY29uc3QgcGxheVByb21pc2UgPSBteVZpZGVvLnBsYXkoKSB8fCBQcm9taXNlLnJlamVjdCgnJyk7XG4gICAgcGxheVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAvLyBWaWRlbyBjb3VsZCBiZSBhdXRvcGxheWVkLCBkbyBub3RoaW5nLlxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAvLyBWaWRlbyBjb3VsZG4ndCBiZSBhdXRvcGxheWVkIGJlY2F1c2Ugb2YgYXV0b3BsYXkgcG9saWN5LiBNdXRlIGl0IGFuZCBwbGF5LlxuICAgICAgbXlWaWRlby5tdXRlZCA9IHRydWU7XG4gICAgICBteVZpZGVvLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=
