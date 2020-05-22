(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
  // cover
  // $(window).load(function(){
  $('.cover').addClass('cover--animation');
  // });

  // init scrollr
  skrollr.init();

  // items
  function animateItem(element) {
    $(window).scroll(function(){
    	var wt = $(window).scrollTop();
    	var wh = $(window).height();
    	var et = $(element).offset().top;
    	var eh = $(element).outerHeight();
    	var dh = $(document).height();
    	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
    		$(element).find('.items__img').addClass('items__img--animation');
    		$(element).find('.items__title').addClass('items__title--animation');
    		$(element).find('.items__descr').addClass('items__descr--animation');
    	}
    });
  }
  animateItem('.items__item--first');
  animateItem('.items__item--second');
  animateItem('.items__item--third');
  animateItem('.items__item--fourth');
  animateItem('.items__item--fifth');

  // instructions
  function animateIinstructions(element) {
    $(window).scroll(function(){
    	var wt = $(window).scrollTop();
    	var wh = $(window).height();
    	var et = $(element).offset().top;
    	var eh = $(element).outerHeight();
    	var dh = $(document).height();
    	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
    		$(element).addClass('instruction__img--animation')
    	}
    });
  }
  animateIinstructions('.instruction__img--first');
  animateIinstructions('.instruction__img--second');
  animateIinstructions('.instruction__img--third');

  // slider
  $('.slider__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider__slider-nav',
    prevArrow: $('.slider__nav-item--prev'),
    nextArrow: $('.slider__nav-item--next')
  });
  $('.slider__nav-item--prev').on('click', function() {
    $('.slider__slider-for').slick('slickNext');
  });
  $('.slider__nav-item--next').on('click', function() {
    $('.slider__slider-for').slick('slickNext');
  });
  $('.slider__slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__slider-for',
    arrows: false,
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // map
  let windowWidth = $(window).outerWidth();
  if (windowWidth >= 992) {
    ymaps.ready(initDesktopMap);
    // https://github.com/inuyaksa/jquery.nicescroll
    // $('.statistics').niceScroll();

    // header. fixed top position
    // https://github.com/garand/sticky
    // $('.header').sticky({
    //   topSpacing: 0,
    //   zIndex: 4
    // });
  }

  function initDesktopMap() {
    // main (desktop) page
    let myMap;
    myMap = new ymaps.Map('map-index-page', {
      center: [55.75554289958026, 37.82209300000001],
      zoom: 9,
      controls: []
    });

    let myPlacemark = new ymaps.Placemark([55.75554289958026, 37.62209300000001], null, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map/icon-marker.svg',
      iconImageSize: [56, 68],
      iconImageOffset: [-28, -68]
    });
    myMap.geoObjects.add(myPlacemark);
  }

  // video
  function playVideo() {
    let videoCover = $('.video__cover');
    let videoPlayBtn = $('.video__play');
    let videoIframe = $('.video iframe');

    function clickCover(element) {
      $(element).on('click', function() {
        $(videoCover).hide();
        $(videoPlayBtn).hide();
        autoPlayVideo('bCxyckRVgxQ', '100%');
      });
    }
    clickCover(videoCover);
    clickCover(videoPlayBtn);
  }
  playVideo();

  function autoPlayVideo(vcode, width) {
    $('.video__container').append('<iframe width="' + width + '" src="https://www.youtube.com/embed/' + vcode + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
  }

  // iframe(
  //   width="100%"
  //   src="https://www.youtube.com/embed/"
  //   frameborder="0"
  //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //   allowfullscreen=""
  // )
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gY292ZXJcbiAgLy8gJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcbiAgJCgnLmNvdmVyJykuYWRkQ2xhc3MoJ2NvdmVyLS1hbmltYXRpb24nKTtcbiAgLy8gfSk7XG5cbiAgLy8gaW5pdCBzY3JvbGxyXG4gIHNrcm9sbHIuaW5pdCgpO1xuXG4gIC8vIGl0ZW1zXG4gIGZ1bmN0aW9uIGFuaW1hdGVJdGVtKGVsZW1lbnQpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgd3QgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgXHR2YXIgd2ggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgXHR2YXIgZXQgPSAkKGVsZW1lbnQpLm9mZnNldCgpLnRvcDtcbiAgICBcdHZhciBlaCA9ICQoZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBcdHZhciBkaCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xuICAgIFx0aWYgKHd0ICsgd2ggPj0gZXQgfHwgd2ggKyB3dCA9PSBkaCB8fCBlaCArIGV0IDwgd2gpe1xuICAgIFx0XHQkKGVsZW1lbnQpLmZpbmQoJy5pdGVtc19faW1nJykuYWRkQ2xhc3MoJ2l0ZW1zX19pbWctLWFuaW1hdGlvbicpO1xuICAgIFx0XHQkKGVsZW1lbnQpLmZpbmQoJy5pdGVtc19fdGl0bGUnKS5hZGRDbGFzcygnaXRlbXNfX3RpdGxlLS1hbmltYXRpb24nKTtcbiAgICBcdFx0JChlbGVtZW50KS5maW5kKCcuaXRlbXNfX2Rlc2NyJykuYWRkQ2xhc3MoJ2l0ZW1zX19kZXNjci0tYW5pbWF0aW9uJyk7XG4gICAgXHR9XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZUl0ZW0oJy5pdGVtc19faXRlbS0tZmlyc3QnKTtcbiAgYW5pbWF0ZUl0ZW0oJy5pdGVtc19faXRlbS0tc2Vjb25kJyk7XG4gIGFuaW1hdGVJdGVtKCcuaXRlbXNfX2l0ZW0tLXRoaXJkJyk7XG4gIGFuaW1hdGVJdGVtKCcuaXRlbXNfX2l0ZW0tLWZvdXJ0aCcpO1xuICBhbmltYXRlSXRlbSgnLml0ZW1zX19pdGVtLS1maWZ0aCcpO1xuXG4gIC8vIGluc3RydWN0aW9uc1xuICBmdW5jdGlvbiBhbmltYXRlSWluc3RydWN0aW9ucyhlbGVtZW50KSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgIFx0dmFyIHd0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIFx0dmFyIHdoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgIFx0dmFyIGV0ID0gJChlbGVtZW50KS5vZmZzZXQoKS50b3A7XG4gICAgXHR2YXIgZWggPSAkKGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgXHR2YXIgZGggPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcbiAgICBcdGlmICh3dCArIHdoID49IGV0IHx8IHdoICsgd3QgPT0gZGggfHwgZWggKyBldCA8IHdoKXtcbiAgICBcdFx0JChlbGVtZW50KS5hZGRDbGFzcygnaW5zdHJ1Y3Rpb25fX2ltZy0tYW5pbWF0aW9uJylcbiAgICBcdH1cbiAgICB9KTtcbiAgfVxuICBhbmltYXRlSWluc3RydWN0aW9ucygnLmluc3RydWN0aW9uX19pbWctLWZpcnN0Jyk7XG4gIGFuaW1hdGVJaW5zdHJ1Y3Rpb25zKCcuaW5zdHJ1Y3Rpb25fX2ltZy0tc2Vjb25kJyk7XG4gIGFuaW1hdGVJaW5zdHJ1Y3Rpb25zKCcuaW5zdHJ1Y3Rpb25fX2ltZy0tdGhpcmQnKTtcblxuICAvLyBzbGlkZXJcbiAgJCgnLnNsaWRlcl9fc2xpZGVyLWZvcicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyBmYWRlOiB0cnVlLFxuICAgIGFzTmF2Rm9yOiAnLnNsaWRlcl9fc2xpZGVyLW5hdicsXG4gICAgcHJldkFycm93OiAkKCcuc2xpZGVyX19uYXYtaXRlbS0tcHJldicpLFxuICAgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fbmF2LWl0ZW0tLW5leHQnKVxuICB9KTtcbiAgJCgnLnNsaWRlcl9fbmF2LWl0ZW0tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuc2xpZGVyX19zbGlkZXItZm9yJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICB9KTtcbiAgJCgnLnNsaWRlcl9fbmF2LWl0ZW0tLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuc2xpZGVyX19zbGlkZXItZm9yJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICB9KTtcbiAgJCgnLnNsaWRlcl9fc2xpZGVyLW5hdicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXNOYXZGb3I6ICcuc2xpZGVyX19zbGlkZXItZm9yJyxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIC8vIGRvdHM6IHRydWUsXG4gICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEzNjAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgIC8vICAgc2V0dGluZ3M6IHtcbiAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAvLyAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgLy8gICBzZXR0aW5nczoge1xuICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIC8vICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICBdXG4gIH0pO1xuXG4gIC8vIG1hcFxuICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xuICBpZiAod2luZG93V2lkdGggPj0gOTkyKSB7XG4gICAgeW1hcHMucmVhZHkoaW5pdERlc2t0b3BNYXApO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnV5YWtzYS9qcXVlcnkubmljZXNjcm9sbFxuICAgIC8vICQoJy5zdGF0aXN0aWNzJykubmljZVNjcm9sbCgpO1xuXG4gICAgLy8gaGVhZGVyLiBmaXhlZCB0b3AgcG9zaXRpb25cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2FyYW5kL3N0aWNreVxuICAgIC8vICQoJy5oZWFkZXInKS5zdGlja3koe1xuICAgIC8vICAgdG9wU3BhY2luZzogMCxcbiAgICAvLyAgIHpJbmRleDogNFxuICAgIC8vIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdERlc2t0b3BNYXAoKSB7XG4gICAgLy8gbWFpbiAoZGVza3RvcCkgcGFnZVxuICAgIGxldCBteU1hcDtcbiAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcC1pbmRleC1wYWdlJywge1xuICAgICAgY2VudGVyOiBbNTUuNzU1NTQyODk5NTgwMjYsIDM3LjgyMjA5MzAwMDAwMDAxXSxcbiAgICAgIHpvb206IDksXG4gICAgICBjb250cm9sczogW11cbiAgICB9KTtcblxuICAgIGxldCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1NTU0Mjg5OTU4MDI2LCAzNy42MjIwOTMwMDAwMDAwMV0sIG51bGwsIHtcbiAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvbWFwL2ljb24tbWFya2VyLnN2ZycsXG4gICAgICBpY29uSW1hZ2VTaXplOiBbNTYsIDY4XSxcbiAgICAgIGljb25JbWFnZU9mZnNldDogWy0yOCwgLTY4XVxuICAgIH0pO1xuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgfVxuXG4gIC8vIHZpZGVvXG4gIGZ1bmN0aW9uIHBsYXlWaWRlbygpIHtcbiAgICBsZXQgdmlkZW9Db3ZlciA9ICQoJy52aWRlb19fY292ZXInKTtcbiAgICBsZXQgdmlkZW9QbGF5QnRuID0gJCgnLnZpZGVvX19wbGF5Jyk7XG4gICAgbGV0IHZpZGVvSWZyYW1lID0gJCgnLnZpZGVvIGlmcmFtZScpO1xuXG4gICAgZnVuY3Rpb24gY2xpY2tDb3ZlcihlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHZpZGVvQ292ZXIpLmhpZGUoKTtcbiAgICAgICAgJCh2aWRlb1BsYXlCdG4pLmhpZGUoKTtcbiAgICAgICAgYXV0b1BsYXlWaWRlbygnYkN4eWNrUlZneFEnLCAnMTAwJScpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNsaWNrQ292ZXIodmlkZW9Db3Zlcik7XG4gICAgY2xpY2tDb3Zlcih2aWRlb1BsYXlCdG4pO1xuICB9XG4gIHBsYXlWaWRlbygpO1xuXG4gIGZ1bmN0aW9uIGF1dG9QbGF5VmlkZW8odmNvZGUsIHdpZHRoKSB7XG4gICAgJCgnLnZpZGVvX19jb250YWluZXInKS5hcHBlbmQoJzxpZnJhbWUgd2lkdGg9XCInICsgd2lkdGggKyAnXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZjb2RlICsgJz9hdXRvcGxheT0xJmxvb3A9MSZyZWw9MCZ3bW9kZT10cmFuc3BhcmVudFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbiB3bW9kZT1cIk9wYXF1ZVwiPjwvaWZyYW1lPicpO1xuICB9XG5cbiAgLy8gaWZyYW1lKFxuICAvLyAgIHdpZHRoPVwiMTAwJVwiXG4gIC8vICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCJcbiAgLy8gICBmcmFtZWJvcmRlcj1cIjBcIlxuICAvLyAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAvLyAgIGFsbG93ZnVsbHNjcmVlbj1cIlwiXG4gIC8vIClcbn0pO1xuIl19
