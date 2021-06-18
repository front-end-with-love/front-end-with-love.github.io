(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(function() {
  // Cover slider init
  // https://kenwheeler.github.io/slick/
  $('.cover__slider').slick({
    // centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: false,
    dots: true,
    // variableWidth: true,
    // variableHeight: true,
    cssEase: 'linear',
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ]
  });

  // Description slider init
  // https://kenwheeler.github.io/slick/
  $('.addresses__slider').slick({
    // centerMode: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    // variableWidth: true,
    // variableHeight: true,
    cssEase: 'linear',
    appendArrows: $('.addresses__arrows-wrapper'),
    prevArrow: '<div class="addresses__arrow addresses__arrow--left"></div>',
    nextArrow: '<div class="addresses__arrow addresses__arrow--right"></div>'
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ]
  });

  // Show/hide popup
  function showHidePopup(element) {
    let $popup = $('.popup' + element);

    $(element).on('click', function (event) {
      $popup.addClass('popup--active');
      $('body').addClass('body--hidden');
      event.stopPropagation();
      event.preventDefault();

      // Init custom scroll for right column popup
      // https://github.com/mdbootstrap/perfect-scrollbar
      let ps = new PerfectScrollbar('.popup__col.popup__col--right');
    });

    $('.popup__close').on('click', function (event) {
      $popup.removeClass('popup--active');
      $('body').removeClass('body--hidden');
      event.stopPropagation();
    });
  }
  showHidePopup('[data-popup="1"]');

  // Show/hide nav
  function showHideNav () {
    let $headerNav = $('.header__nav');
    let $headerBtn = $('.header__btn');
    let $headerOverlay = $('.header__overlay');

    $headerBtn.on('click', function () {
      $headerNav.toggleClass('header__nav--active');
      $('body').toggleClass('body--hidden');
      $headerOverlay.toggleClass('header__overlay--active');
    });

    $headerOverlay.on('click', function () {
      $headerNav.toggleClass('header__nav--active');
      $('body').toggleClass('body--hidden');
      $headerOverlay.toggleClass('header__overlay--active');
    });
  }
  showHideNav();

  // Play video
  // https://github.com/nirvanatikku/jQuery-TubePlayer-Plugin
  // function playVideo(element) {
  //   let videoCover = $('.projects-announce__video-cover' + element);
  //   let videoPlayBtn = $('.projects-announce__video-play' + element);
  //   // let videoIframe = $('.projects-announce__video iframe' + element);
  //
  //   $(videoCover).hide();
  //   $(videoPlayBtn).hide();
  //   $('.projects-announce__video-player').tubeplayer({
  //     initialVideo: 'I3OlQPbEmG0',
  //     width: '100%',
  //     height: '100%',
  //     autoPlay: 'false'
  //   });
  // }
  // playVideo('[data-popup="1"]');
  // playVideo('[data-popup="2"]');
  // playVideo('[data-popup="3"]');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGZ1bmN0aW9uKCkge1xuICAvLyBDb3ZlciBzbGlkZXIgaW5pdFxuICAvLyBodHRwczovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL1xuICAkKCcuY292ZXJfX3NsaWRlcicpLnNsaWNrKHtcbiAgICAvLyBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAxMjAwMCxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgLy8gdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAvLyB2YXJpYWJsZUhlaWdodDogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAvLyByZXNwb25zaXZlOiBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgLy8gICAgIHNldHRpbmdzOiB7XG4gICAgLy8gICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIC8vICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgIC8vICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgIC8vICAgICAgIGRvdHM6IHRydWVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgIC8vICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAvLyAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgIC8vICAgICB9XG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgLy8gICAgIHNldHRpbmdzOiB7XG4gICAgLy8gICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIC8vICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAvLyAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgIC8vICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgIC8vIF1cbiAgfSk7XG5cbiAgLy8gRGVzY3JpcHRpb24gc2xpZGVyIGluaXRcbiAgLy8gaHR0cHM6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9cbiAgJCgnLmFkZHJlc3Nlc19fc2xpZGVyJykuc2xpY2soe1xuICAgIC8vIGNlbnRlck1vZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgLy8gdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAvLyB2YXJpYWJsZUhlaWdodDogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICBhcHBlbmRBcnJvd3M6ICQoJy5hZGRyZXNzZXNfX2Fycm93cy13cmFwcGVyJyksXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImFkZHJlc3Nlc19fYXJyb3cgYWRkcmVzc2VzX19hcnJvdy0tbGVmdFwiPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImFkZHJlc3Nlc19fYXJyb3cgYWRkcmVzc2VzX19hcnJvdy0tcmlnaHRcIj48L2Rpdj4nXG4gICAgLy8gcmVzcG9uc2l2ZTogW1xuICAgIC8vICAge1xuICAgIC8vICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgIC8vICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAvLyAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAvLyAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAvLyAgICAgICBkb3RzOiB0cnVlXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAvLyAgICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgLy8gICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgIC8vICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAvLyAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgLy8gICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAvLyAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAvLyBdXG4gIH0pO1xuXG4gIC8vIFNob3cvaGlkZSBwb3B1cFxuICBmdW5jdGlvbiBzaG93SGlkZVBvcHVwKGVsZW1lbnQpIHtcbiAgICBsZXQgJHBvcHVwID0gJCgnLnBvcHVwJyArIGVsZW1lbnQpO1xuXG4gICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICRwb3B1cC5hZGRDbGFzcygncG9wdXAtLWFjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1oaWRkZW4nKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gSW5pdCBjdXN0b20gc2Nyb2xsIGZvciByaWdodCBjb2x1bW4gcG9wdXBcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZGJvb3RzdHJhcC9wZXJmZWN0LXNjcm9sbGJhclxuICAgICAgbGV0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5wb3B1cF9fY29sLnBvcHVwX19jb2wtLXJpZ2h0Jyk7XG4gICAgfSk7XG5cbiAgICAkKCcucG9wdXBfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ3BvcHVwLS1hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0taGlkZGVuJyk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuICBzaG93SGlkZVBvcHVwKCdbZGF0YS1wb3B1cD1cIjFcIl0nKTtcblxuICAvLyBTaG93L2hpZGUgbmF2XG4gIGZ1bmN0aW9uIHNob3dIaWRlTmF2ICgpIHtcbiAgICBsZXQgJGhlYWRlck5hdiA9ICQoJy5oZWFkZXJfX25hdicpO1xuICAgIGxldCAkaGVhZGVyQnRuID0gJCgnLmhlYWRlcl9fYnRuJyk7XG4gICAgbGV0ICRoZWFkZXJPdmVybGF5ID0gJCgnLmhlYWRlcl9fb3ZlcmxheScpO1xuXG4gICAgJGhlYWRlckJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkaGVhZGVyTmF2LnRvZ2dsZUNsYXNzKCdoZWFkZXJfX25hdi0tYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgICAgJGhlYWRlck92ZXJsYXkudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkaGVhZGVyT3ZlcmxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkaGVhZGVyTmF2LnRvZ2dsZUNsYXNzKCdoZWFkZXJfX25hdi0tYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2JvZHktLWhpZGRlbicpO1xuICAgICAgJGhlYWRlck92ZXJsYXkudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0hpZGVOYXYoKTtcblxuICAvLyBQbGF5IHZpZGVvXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uaXJ2YW5hdGlra3UvalF1ZXJ5LVR1YmVQbGF5ZXItUGx1Z2luXG4gIC8vIGZ1bmN0aW9uIHBsYXlWaWRlbyhlbGVtZW50KSB7XG4gIC8vICAgbGV0IHZpZGVvQ292ZXIgPSAkKCcucHJvamVjdHMtYW5ub3VuY2VfX3ZpZGVvLWNvdmVyJyArIGVsZW1lbnQpO1xuICAvLyAgIGxldCB2aWRlb1BsYXlCdG4gPSAkKCcucHJvamVjdHMtYW5ub3VuY2VfX3ZpZGVvLXBsYXknICsgZWxlbWVudCk7XG4gIC8vICAgLy8gbGV0IHZpZGVvSWZyYW1lID0gJCgnLnByb2plY3RzLWFubm91bmNlX192aWRlbyBpZnJhbWUnICsgZWxlbWVudCk7XG4gIC8vXG4gIC8vICAgJCh2aWRlb0NvdmVyKS5oaWRlKCk7XG4gIC8vICAgJCh2aWRlb1BsYXlCdG4pLmhpZGUoKTtcbiAgLy8gICAkKCcucHJvamVjdHMtYW5ub3VuY2VfX3ZpZGVvLXBsYXllcicpLnR1YmVwbGF5ZXIoe1xuICAvLyAgICAgaW5pdGlhbFZpZGVvOiAnSTNPbFFQYkVtRzAnLFxuICAvLyAgICAgd2lkdGg6ICcxMDAlJyxcbiAgLy8gICAgIGhlaWdodDogJzEwMCUnLFxuICAvLyAgICAgYXV0b1BsYXk6ICdmYWxzZSdcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvLyBwbGF5VmlkZW8oJ1tkYXRhLXBvcHVwPVwiMVwiXScpO1xuICAvLyBwbGF5VmlkZW8oJ1tkYXRhLXBvcHVwPVwiMlwiXScpO1xuICAvLyBwbGF5VmlkZW8oJ1tkYXRhLXBvcHVwPVwiM1wiXScpO1xufSk7XG4iXX0=
