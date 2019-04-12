(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function () {

    // init scroll : begin
    function initScroll() {
        let windowWidth = 1024;
        if ($(window).width() >= windowWidth) {
            skrollr.init();
        } else {
            skrollr.init().destroy();
        }

        // $(window).on('resize', function() {
        //     var win = $(this);
        //     if (win.width() >= windowWidth) {
        //         skrollr.init();
        //     }
        //     else {
        //         skrollr.init().destroy();
        //     }
        // });
    }

    // init scroll : end

    // open mobile nav : begin
    function openMobileNav() {
        // let windowWidth = 1024;
        // if ($(window).width() >= windowWidth) {
        //     $('.header__burger').on('click', function () {
        //         return false;
        //     });
        // } else {
        $('.header__burger').on('click', function () {
            $(this).toggleClass('header__burger_active');
            $('.header__nav').toggleClass('header__nav_active');
            $('body').toggleClass('hidden');
            $('.cover__title').toggleClass('cover__title_hidden');
            $('.cover__descr-text').toggleClass('cover__descr-text_hidden');
            $('.cover__descr').toggleClass('cover__descr_hidden');
            $('.header__logo').toggleClass('header__logo_active');
            $('.cover').toggleClass('cover_active');
        });
        // }
    }

    // open mobile nav : end

    // play/pause audio : begin
    function playAudio() {
        const audio = document.getElementById("header__audio");
        $('.header__eq').click(function () {
            if (audio.paused === false) {
                audio.pause();
                $('.header__eq_play').hide();
                $('.header__eq_pause').show();
            } else {
                audio.play();
                $('.header__eq').toggleClass('header__eq_animate');
                $('.header__eq_play').show();
                $('.header__eq_pause').hide();
            }
        });
    }

    // play/pause audio : end

    // movement depending on the position of the cursor : begin
    function moveBgPosition() {
        let windowWidth = 1024;
        if ($(window).width() >= windowWidth) {
            const coverBgFirst = document.querySelector("#cover__bg_first");
            const coverBgSecond = document.querySelector("#cover__bg_second");

            coverBgFirst.addEventListener("mousemove", (e) => {
                coverBgFirst.style.backgroundPositionX = (-e.offsetX * 0.005) + "px";
                coverBgSecond.style.backgroundPositionX = (e.offsetX * 0.004) + "px";
            });
        }
    }

    // movement depending on the position of the cursor : end

    // change users : begin
    function usersSlider() {
        const usersItemFirstWidth = parseInt($('.users__ctrl[data-slide="0"]').outerWidth());
        const usersItemSecondWidth = parseInt($('.users__ctrl[data-slide="1"]').outerWidth());
        const usersItemThirdWidth = parseInt($('.users__ctrl[data-slide="2"]').outerWidth());
        const usersItemFourthWidth = parseInt($('.users__ctrl[data-slide="3"]').outerWidth());
        const usersNavIndent = parseInt($('.users__ctrls-wrapper').css('padding-left'));
        const usersNavItemIndent = parseInt($('.users__ctrl[data-slide="1"]').css('margin-right'));
        const usersLineItemFirstLeft = usersNavIndent;
        const usersLineItemSecondLeft = usersLineItemFirstLeft + usersItemFirstWidth + usersNavItemIndent;
        const usersLineItemThirdLeft = usersLineItemSecondLeft + usersItemSecondWidth + usersNavItemIndent;
        const usersLineItemFourthLeft = usersLineItemThirdLeft + usersItemThirdWidth + usersNavItemIndent;

        $('.users__line').width(usersItemFirstWidth).css('left', usersLineItemFirstLeft + 'px');

        function changeUsers(current, next) {
            $('.users').data('slide', next);
            setTimeout(function () {
                $('.users__title-wrapper').attr('data-slide', next);
                $('.users__ctrls-wrapper.users__ctrls-wrapper_top').attr('data-slide', next);
                $('.users__title[data-slide="' + next + '"]').addClass('users__title_active');
                $('.users__descr[data-slide="' + next + '"]').addClass('users__descr_active');
                $('.users__img[data-slide="' + next + '"]').addClass('users__img_active');
                $('.users__subtitle[data-slide="' + next + '"]').addClass('users__subtitle_active');
            }, 500);

            $('.users__title[data-slide="' + current + '"]').removeClass('users__title_active');
            $('.users__descr[data-slide="' + current + '"]').removeClass('users__descr_active');
            $('.users__img[data-slide="' + current + '"]').removeClass('users__img_active');
            $('.users__subtitle[data-slide="' + current + '"]').removeClass('users__subtitle_active');
            $('.users__ctrl[data-slide="' + current + '"]').removeClass('users__ctrl_active');
            $('.users__ctrl[data-slide="' + next + '"]').addClass('users__ctrl_active');

            $('.users__dot[data-slide="' + current + '"]').removeClass('users__dot_active');
            $('.users__dot[data-slide="' + next + '"]').addClass('users__dot_active');

            setTimeout(function () {
                $('.users__img-wrapper').attr('data-slide', next);
            }, 200);

            if (next === 0) {
                $('.container-bg').css('backgroundColor', '#7974e1');
                $('.users__line').width(usersItemFirstWidth).css('left', usersLineItemFirstLeft + 'px');
                $('.users__ctrl-arrow_right').removeClass('users__ctrl-arrow_disable');
                $('.users__ctrl-arrow_left')
                    .removeClass('users__ctrl-arrow_active')
                    .addClass('users__ctrl-arrow_disable')
            } else if (next === 1) {
                $('.container-bg').css('backgroundColor', '#006c93');
                $('.users__line').width(usersItemSecondWidth).css('left', usersLineItemSecondLeft + 'px');
                $('.users__ctrl-arrow_left').removeClass('users__ctrl-arrow_disable');
                $('.users__ctrl-arrow_right').removeClass('users__ctrl-arrow_disable');
            } else if (next === 2) {
                $('.container-bg').css('backgroundColor', '#0a1918');
                $('.users__line').width(usersItemThirdWidth).css('left', usersLineItemThirdLeft + 'px');
                $('.users__ctrl-arrow_left').removeClass('users__ctrl-arrow_disable');
                $('.users__ctrl-arrow_right').removeClass('users__ctrl-arrow_disable');
            } else if (next === 3) {
                $('.container-bg').css('backgroundColor', '#2a1c85');
                $('.users__line').width(usersItemFourthWidth).css('left', usersLineItemFourthLeft + 'px');
                $('.users__ctrl-arrow_left').removeClass('users__ctrl-arrow_disable');
                $('.users__ctrl-arrow_right')
                    .removeClass('users__ctrl-arrow_active')
                    .addClass('users__ctrl-arrow_disable')
            }
        }

        $('.users__ctrl-arrow_left').on('click', function () {
            const currentSlide = $('.users').data('slide');
            let nextSlide = currentSlide - 1;
            if (nextSlide <= -1) {
                nextSlide = 3;
            }

            changeUsers(currentSlide, nextSlide);
        });
        $('.users__ctrl-arrow_right').on('click', function () {
            const currentSlide = $('.users').data('slide');
            let nextSlide = currentSlide + 1;
            if (nextSlide >= 4) {
                nextSlide = 0;
            }

            changeUsers(currentSlide, nextSlide);
        });
    }

    // change users : end

    // change how to : begin
    function howToSlider() {
        function changeHowTo(current, next) {
            $('.how-to').data('slide', next);
            setTimeout(function () {
                if (next === 0) {
                    $('.how-to__img:first-child[data-slide="' + next + '"]').addClass('how-to__img_active');
                    setTimeout(function () {
                        $('.how-to__img:nth-child(2)[data-slide="' + next + '"]').addClass('how-to__img_active');
                    }, 300);
                    setTimeout(function () {
                        $('.how-to__img:nth-child(3)[data-slide="' + next + '"]').addClass('how-to__img_active');
                    }, 600);
                }
                if (next === 1) {
                    $('.how-to__img:nth-child(4)[data-slide="' + next + '"]').addClass('how-to__img_active');
                    setTimeout(function () {
                        $('.how-to__img:nth-child(5)[data-slide="' + next + '"]').addClass('how-to__img_active');
                    }, 300);
                }
                if (next === 2) {
                    $('.how-to__img:nth-child(6)[data-slide="' + next + '"]').addClass('how-to__img_active');
                    setTimeout(function () {
                        $('.how-to__img:last-child[data-slide="' + next + '"]').addClass('how-to__img_active');
                    }, 300);
                }
                $('.how-to__subtitle[data-slide="' + next + '"]').addClass('how-to__subtitle_active');
                $('.how-to__descr[data-slide="' + next + '"]').addClass('how-to__descr_active');
            }, 900);

            setTimeout(function () {
                if (current === 0) {
                    $('.how-to__img:first-child[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    setTimeout(function () {
                        $('.how-to__img:nth-child(2)[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    }, 300);
                    setTimeout(function () {
                        $('.how-to__img:nth-child(3)[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    }, 600);
                }
                if (current === 1) {
                    $('.how-to__img:nth-child(4)[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    setTimeout(function () {
                        $('.how-to__img:nth-child(5)[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    }, 300);
                }
                if (current === 2) {
                    $('.how-to__img:nth-child(6)[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    setTimeout(function () {
                        $('.how-to__img:last-child[data-slide="' + current + '"]').removeClass('how-to__img_active');
                    }, 300);
                }
            }, 300);

            $('.how-to__subtitle[data-slide="' + current + '"]').removeClass('how-to__subtitle_active');
            $('.how-to__descr[data-slide="' + current + '"]').removeClass('how-to__descr_active');
            $('.how-to__circle[data-slide="' + current + '"]').removeClass('how-to__circle_active');
            $('.how-to__ctrls-wrapper[data-slide="' + current + '"]').removeClass('how-to__ctrls-wrapper_active');
            $('.how-to__ctrls-wrapper[data-slide="' + next + '"]').addClass('how-to__ctrls-wrapper_active');
            $('.how-to__dot[data-slide="' + current + '"]').removeClass('how-to__dot_active');
            $('.how-to__dot[data-slide="' + next + '"]').addClass('how-to__dot_active');

            setTimeout(function () {
                $('.how-to__circle[data-slide="' + next + '"]').addClass('how-to__circle_active');
            }, 100);

            if (next === 0) {
                setTimeout(function () {
                    $('.how-to__subtitle[data-slide="' + next + '"]').addClass('how-to__subtitle_active');
                    $('.how-to__descr[data-slide="' + next + '"]').addClass('how-to__descr_active');
                }, 500);
                $('.how-to__ctrl-arrow_right').removeClass('how-to__ctrl-arrow_disable');
                $('.how-to__ctrl-arrow_left')
                    .removeClass('users__ctrl-arrow_active')
                    .addClass('how-to__ctrl-arrow_disable');
            } else if (next === 1) {
                $('.how-to__ctrl-arrow_left').removeClass('how-to__ctrl-arrow_disable');
                $('.how-to__ctrl-arrow_right').removeClass('how-to__ctrl-arrow_disable');
            } else if (next === 2) {
                $('.how-to__ctrl-arrow_left').removeClass('how-to__ctrl-arrow_disable');
                $('.how-to__ctrl-arrow_right')
                    .removeClass('users__ctrl-arrow_active')
                    .addClass('how-to__ctrl-arrow_disable')
            }
        }

        $('.how-to__ctrl-arrow_left').on('click', function () {
            const currentSlide = $('.how-to').data('slide');
            let nextSlide = currentSlide - 1;
            if (nextSlide <= -1) {
                nextSlide = 2;
            }

            changeHowTo(currentSlide, nextSlide);
        });
        $('.how-to__ctrl-arrow_right').on('click', function () {
            const currentSlide = $('.how-to').data('slide');
            let nextSlide = currentSlide + 1;
            if (nextSlide >= 3) {
                nextSlide = 0;
            }

            changeHowTo(currentSlide, nextSlide);
        });
    }

    // change how to : end

    // swipe init : begin
    function swipeInit() {
        $('.users').swipe({
            swipeLeft: leftUsersSwipe,
            swipeRight: rightUsersSwipe,
            threshold: 0
        });

        $('.how-to').swipe({
            swipeLeft: leftHowToSwipe,
            swipeRight: rightHowToSwipe,
            threshold: 0
        });

        function leftUsersSwipe(event) {
            $('.users__ctrl-arrow_left').click();
        }

        function rightUsersSwipe(event) {
            $('.users__ctrl-arrow_right').click();
        }

        function leftHowToSwipe(event) {
            $('.how-to__ctrl-arrow_left').click();
        }

        function rightHowToSwipe(event) {
            $('.how-to__ctrl-arrow_right').click();
        }
    }

    // swipe init : end

    // calls : begin
    initScroll();
    openMobileNav();
    playAudio();
    moveBgPosition();
    usersSlider();
    howToSlider();
    swipeInit();
    // calls : end
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLXByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGluaXQgc2Nyb2xsIDogYmVnaW5cbiAgICBmdW5jdGlvbiBpbml0U2Nyb2xsKCkge1xuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAxMDI0O1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIHNrcm9sbHIuaW5pdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2tyb2xsci5pbml0KCkuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIHZhciB3aW4gPSAkKHRoaXMpO1xuICAgICAgICAvLyAgICAgaWYgKHdpbi53aWR0aCgpID49IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgIC8vICAgICAgICAgc2tyb2xsci5pbml0KCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBza3JvbGxyLmluaXQoKS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIC8vIGluaXQgc2Nyb2xsIDogZW5kXG5cbiAgICAvLyBvcGVuIG1vYmlsZSBuYXYgOiBiZWdpblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2JpbGVOYXYoKSB7XG4gICAgICAgIC8vIGxldCB3aW5kb3dXaWR0aCA9IDEwMjQ7XG4gICAgICAgIC8vIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAvLyAgICAgJCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX2J1cmdlcl9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX25hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX25hdl9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcuY292ZXJfX3RpdGxlJykudG9nZ2xlQ2xhc3MoJ2NvdmVyX190aXRsZV9oaWRkZW4nKTtcbiAgICAgICAgICAgICQoJy5jb3Zlcl9fZGVzY3ItdGV4dCcpLnRvZ2dsZUNsYXNzKCdjb3Zlcl9fZGVzY3ItdGV4dF9oaWRkZW4nKTtcbiAgICAgICAgICAgICQoJy5jb3Zlcl9fZGVzY3InKS50b2dnbGVDbGFzcygnY292ZXJfX2Rlc2NyX2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnLmhlYWRlcl9fbG9nbycpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX2xvZ29fYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuY292ZXInKS50b2dnbGVDbGFzcygnY292ZXJfYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gb3BlbiBtb2JpbGUgbmF2IDogZW5kXG5cbiAgICAvLyBwbGF5L3BhdXNlIGF1ZGlvIDogYmVnaW5cbiAgICBmdW5jdGlvbiBwbGF5QXVkaW8oKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJfX2F1ZGlvXCIpO1xuICAgICAgICAkKCcuaGVhZGVyX19lcScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhdWRpby5wYXVzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyX19lcV9wbGF5JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXJfX2VxX3BhdXNlJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcl9fZXEnKS50b2dnbGVDbGFzcygnaGVhZGVyX19lcV9hbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcl9fZXFfcGxheScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyX19lcV9wYXVzZScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcGxheS9wYXVzZSBhdWRpbyA6IGVuZFxuXG4gICAgLy8gbW92ZW1lbnQgZGVwZW5kaW5nIG9uIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIDogYmVnaW5cbiAgICBmdW5jdGlvbiBtb3ZlQmdQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gMTAyNDtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3ZlckJnRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdmVyX19iZ19maXJzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvdmVyQmdTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdmVyX19iZ19zZWNvbmRcIik7XG5cbiAgICAgICAgICAgIGNvdmVyQmdGaXJzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY292ZXJCZ0ZpcnN0LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSAoLWUub2Zmc2V0WCAqIDAuMDA1KSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBjb3ZlckJnU2Vjb25kLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSAoZS5vZmZzZXRYICogMC4wMDQpICsgXCJweFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb3ZlbWVudCBkZXBlbmRpbmcgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJzb3IgOiBlbmRcblxuICAgIC8vIGNoYW5nZSB1c2VycyA6IGJlZ2luXG4gICAgZnVuY3Rpb24gdXNlcnNTbGlkZXIoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJzSXRlbUZpcnN0V2lkdGggPSBwYXJzZUludCgkKCcudXNlcnNfX2N0cmxbZGF0YS1zbGlkZT1cIjBcIl0nKS5vdXRlcldpZHRoKCkpO1xuICAgICAgICBjb25zdCB1c2Vyc0l0ZW1TZWNvbmRXaWR0aCA9IHBhcnNlSW50KCQoJy51c2Vyc19fY3RybFtkYXRhLXNsaWRlPVwiMVwiXScpLm91dGVyV2lkdGgoKSk7XG4gICAgICAgIGNvbnN0IHVzZXJzSXRlbVRoaXJkV2lkdGggPSBwYXJzZUludCgkKCcudXNlcnNfX2N0cmxbZGF0YS1zbGlkZT1cIjJcIl0nKS5vdXRlcldpZHRoKCkpO1xuICAgICAgICBjb25zdCB1c2Vyc0l0ZW1Gb3VydGhXaWR0aCA9IHBhcnNlSW50KCQoJy51c2Vyc19fY3RybFtkYXRhLXNsaWRlPVwiM1wiXScpLm91dGVyV2lkdGgoKSk7XG4gICAgICAgIGNvbnN0IHVzZXJzTmF2SW5kZW50ID0gcGFyc2VJbnQoJCgnLnVzZXJzX19jdHJscy13cmFwcGVyJykuY3NzKCdwYWRkaW5nLWxlZnQnKSk7XG4gICAgICAgIGNvbnN0IHVzZXJzTmF2SXRlbUluZGVudCA9IHBhcnNlSW50KCQoJy51c2Vyc19fY3RybFtkYXRhLXNsaWRlPVwiMVwiXScpLmNzcygnbWFyZ2luLXJpZ2h0JykpO1xuICAgICAgICBjb25zdCB1c2Vyc0xpbmVJdGVtRmlyc3RMZWZ0ID0gdXNlcnNOYXZJbmRlbnQ7XG4gICAgICAgIGNvbnN0IHVzZXJzTGluZUl0ZW1TZWNvbmRMZWZ0ID0gdXNlcnNMaW5lSXRlbUZpcnN0TGVmdCArIHVzZXJzSXRlbUZpcnN0V2lkdGggKyB1c2Vyc05hdkl0ZW1JbmRlbnQ7XG4gICAgICAgIGNvbnN0IHVzZXJzTGluZUl0ZW1UaGlyZExlZnQgPSB1c2Vyc0xpbmVJdGVtU2Vjb25kTGVmdCArIHVzZXJzSXRlbVNlY29uZFdpZHRoICsgdXNlcnNOYXZJdGVtSW5kZW50O1xuICAgICAgICBjb25zdCB1c2Vyc0xpbmVJdGVtRm91cnRoTGVmdCA9IHVzZXJzTGluZUl0ZW1UaGlyZExlZnQgKyB1c2Vyc0l0ZW1UaGlyZFdpZHRoICsgdXNlcnNOYXZJdGVtSW5kZW50O1xuXG4gICAgICAgICQoJy51c2Vyc19fbGluZScpLndpZHRoKHVzZXJzSXRlbUZpcnN0V2lkdGgpLmNzcygnbGVmdCcsIHVzZXJzTGluZUl0ZW1GaXJzdExlZnQgKyAncHgnKTtcblxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VVc2VycyhjdXJyZW50LCBuZXh0KSB7XG4gICAgICAgICAgICAkKCcudXNlcnMnKS5kYXRhKCdzbGlkZScsIG5leHQpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJzX190aXRsZS13cmFwcGVyJykuYXR0cignZGF0YS1zbGlkZScsIG5leHQpO1xuICAgICAgICAgICAgICAgICQoJy51c2Vyc19fY3RybHMtd3JhcHBlci51c2Vyc19fY3RybHMtd3JhcHBlcl90b3AnKS5hdHRyKCdkYXRhLXNsaWRlJywgbmV4dCk7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJzX190aXRsZVtkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ3VzZXJzX190aXRsZV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2Rlc2NyW2RhdGEtc2xpZGU9XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygndXNlcnNfX2Rlc2NyX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy51c2Vyc19faW1nW2RhdGEtc2xpZGU9XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygndXNlcnNfX2ltZ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX3N1YnRpdGxlW2RhdGEtc2xpZGU9XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygndXNlcnNfX3N1YnRpdGxlX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgJCgnLnVzZXJzX190aXRsZVtkYXRhLXNsaWRlPVwiJyArIGN1cnJlbnQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3VzZXJzX190aXRsZV9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy51c2Vyc19fZGVzY3JbZGF0YS1zbGlkZT1cIicgKyBjdXJyZW50ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd1c2Vyc19fZGVzY3JfYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcudXNlcnNfX2ltZ1tkYXRhLXNsaWRlPVwiJyArIGN1cnJlbnQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3VzZXJzX19pbWdfYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcudXNlcnNfX3N1YnRpdGxlW2RhdGEtc2xpZGU9XCInICsgY3VycmVudCArICdcIl0nKS5yZW1vdmVDbGFzcygndXNlcnNfX3N1YnRpdGxlX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnVzZXJzX19jdHJsW2RhdGEtc2xpZGU9XCInICsgY3VycmVudCArICdcIl0nKS5yZW1vdmVDbGFzcygndXNlcnNfX2N0cmxfYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcudXNlcnNfX2N0cmxbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCd1c2Vyc19fY3RybF9hY3RpdmUnKTtcblxuICAgICAgICAgICAgJCgnLnVzZXJzX19kb3RbZGF0YS1zbGlkZT1cIicgKyBjdXJyZW50ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd1c2Vyc19fZG90X2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnVzZXJzX19kb3RbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCd1c2Vyc19fZG90X2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2ltZy13cmFwcGVyJykuYXR0cignZGF0YS1zbGlkZScsIG5leHQpO1xuICAgICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgICAgaWYgKG5leHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuY29udGFpbmVyLWJnJykuY3NzKCdiYWNrZ3JvdW5kQ29sb3InLCAnIzc5NzRlMScpO1xuICAgICAgICAgICAgICAgICQoJy51c2Vyc19fbGluZScpLndpZHRoKHVzZXJzSXRlbUZpcnN0V2lkdGgpLmNzcygnbGVmdCcsIHVzZXJzTGluZUl0ZW1GaXJzdExlZnQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2N0cmwtYXJyb3dfcmlnaHQnKS5yZW1vdmVDbGFzcygndXNlcnNfX2N0cmwtYXJyb3dfZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICQoJy51c2Vyc19fY3RybC1hcnJvd19sZWZ0JylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd1c2Vyc19fY3RybC1hcnJvd19hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3VzZXJzX19jdHJsLWFycm93X2Rpc2FibGUnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbnRhaW5lci1iZycpLmNzcygnYmFja2dyb3VuZENvbG9yJywgJyMwMDZjOTMnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2xpbmUnKS53aWR0aCh1c2Vyc0l0ZW1TZWNvbmRXaWR0aCkuY3NzKCdsZWZ0JywgdXNlcnNMaW5lSXRlbVNlY29uZExlZnQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2N0cmwtYXJyb3dfbGVmdCcpLnJlbW92ZUNsYXNzKCd1c2Vyc19fY3RybC1hcnJvd19kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJzX19jdHJsLWFycm93X3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ3VzZXJzX19jdHJsLWFycm93X2Rpc2FibGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dCA9PT0gMikge1xuICAgICAgICAgICAgICAgICQoJy5jb250YWluZXItYmcnKS5jc3MoJ2JhY2tncm91bmRDb2xvcicsICcjMGExOTE4Jyk7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJzX19saW5lJykud2lkdGgodXNlcnNJdGVtVGhpcmRXaWR0aCkuY3NzKCdsZWZ0JywgdXNlcnNMaW5lSXRlbVRoaXJkTGVmdCArICdweCcpO1xuICAgICAgICAgICAgICAgICQoJy51c2Vyc19fY3RybC1hcnJvd19sZWZ0JykucmVtb3ZlQ2xhc3MoJ3VzZXJzX19jdHJsLWFycm93X2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2N0cmwtYXJyb3dfcmlnaHQnKS5yZW1vdmVDbGFzcygndXNlcnNfX2N0cmwtYXJyb3dfZGlzYWJsZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbnRhaW5lci1iZycpLmNzcygnYmFja2dyb3VuZENvbG9yJywgJyMyYTFjODUnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2xpbmUnKS53aWR0aCh1c2Vyc0l0ZW1Gb3VydGhXaWR0aCkuY3NzKCdsZWZ0JywgdXNlcnNMaW5lSXRlbUZvdXJ0aExlZnQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlcnNfX2N0cmwtYXJyb3dfbGVmdCcpLnJlbW92ZUNsYXNzKCd1c2Vyc19fY3RybC1hcnJvd19kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJzX19jdHJsLWFycm93X3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd1c2Vyc19fY3RybC1hcnJvd19hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3VzZXJzX19jdHJsLWFycm93X2Rpc2FibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnVzZXJzX19jdHJsLWFycm93X2xlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSAkKCcudXNlcnMnKS5kYXRhKCdzbGlkZScpO1xuICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZSAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlIDw9IC0xKSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhbmdlVXNlcnMoY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnVzZXJzX19jdHJsLWFycm93X3JpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gJCgnLnVzZXJzJykuZGF0YSgnc2xpZGUnKTtcbiAgICAgICAgICAgIGxldCBuZXh0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyAxO1xuICAgICAgICAgICAgaWYgKG5leHRTbGlkZSA+PSA0KSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhbmdlVXNlcnMoY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdXNlcnMgOiBlbmRcblxuICAgIC8vIGNoYW5nZSBob3cgdG8gOiBiZWdpblxuICAgIGZ1bmN0aW9uIGhvd1RvU2xpZGVyKCkge1xuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VIb3dUbyhjdXJyZW50LCBuZXh0KSB7XG4gICAgICAgICAgICAkKCcuaG93LXRvJykuZGF0YSgnc2xpZGUnLCBuZXh0KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpmaXJzdC1jaGlsZFtkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hvdy10b19faW1nX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpudGgtY2hpbGQoMilbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCdob3ctdG9fX2ltZ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19pbWc6bnRoLWNoaWxkKDMpW2RhdGEtc2xpZGU9XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygnaG93LXRvX19pbWdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpudGgtY2hpbGQoNClbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCdob3ctdG9fX2ltZ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19pbWc6bnRoLWNoaWxkKDUpW2RhdGEtc2xpZGU9XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygnaG93LXRvX19pbWdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpudGgtY2hpbGQoNilbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCdob3ctdG9fX2ltZ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19pbWc6bGFzdC1jaGlsZFtkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hvdy10b19faW1nX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19zdWJ0aXRsZVtkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hvdy10b19fc3VidGl0bGVfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhvdy10b19fZGVzY3JbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCdob3ctdG9fX2Rlc2NyX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSwgOTAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhvdy10b19faW1nOmZpcnN0LWNoaWxkW2RhdGEtc2xpZGU9XCInICsgY3VycmVudCArICdcIl0nKS5yZW1vdmVDbGFzcygnaG93LXRvX19pbWdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhvdy10b19faW1nOm50aC1jaGlsZCgyKVtkYXRhLXNsaWRlPVwiJyArIGN1cnJlbnQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hvdy10b19faW1nX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpudGgtY2hpbGQoMylbZGF0YS1zbGlkZT1cIicgKyBjdXJyZW50ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdob3ctdG9fX2ltZ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhvdy10b19faW1nOm50aC1jaGlsZCg0KVtkYXRhLXNsaWRlPVwiJyArIGN1cnJlbnQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hvdy10b19faW1nX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpudGgtY2hpbGQoNSlbZGF0YS1zbGlkZT1cIicgKyBjdXJyZW50ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdob3ctdG9fX2ltZ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhvdy10b19faW1nOm50aC1jaGlsZCg2KVtkYXRhLXNsaWRlPVwiJyArIGN1cnJlbnQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hvdy10b19faW1nX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2ltZzpsYXN0LWNoaWxkW2RhdGEtc2xpZGU9XCInICsgY3VycmVudCArICdcIl0nKS5yZW1vdmVDbGFzcygnaG93LXRvX19pbWdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgJCgnLmhvdy10b19fc3VidGl0bGVbZGF0YS1zbGlkZT1cIicgKyBjdXJyZW50ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdob3ctdG9fX3N1YnRpdGxlX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhvdy10b19fZGVzY3JbZGF0YS1zbGlkZT1cIicgKyBjdXJyZW50ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdob3ctdG9fX2Rlc2NyX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhvdy10b19fY2lyY2xlW2RhdGEtc2xpZGU9XCInICsgY3VycmVudCArICdcIl0nKS5yZW1vdmVDbGFzcygnaG93LXRvX19jaXJjbGVfYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuaG93LXRvX19jdHJscy13cmFwcGVyW2RhdGEtc2xpZGU9XCInICsgY3VycmVudCArICdcIl0nKS5yZW1vdmVDbGFzcygnaG93LXRvX19jdHJscy13cmFwcGVyX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhvdy10b19fY3RybHMtd3JhcHBlcltkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hvdy10b19fY3RybHMtd3JhcHBlcl9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5ob3ctdG9fX2RvdFtkYXRhLXNsaWRlPVwiJyArIGN1cnJlbnQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hvdy10b19fZG90X2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhvdy10b19fZG90W2RhdGEtc2xpZGU9XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygnaG93LXRvX19kb3RfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5ob3ctdG9fX2NpcmNsZVtkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hvdy10b19fY2lyY2xlX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgaWYgKG5leHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhvdy10b19fc3VidGl0bGVbZGF0YS1zbGlkZT1cIicgKyBuZXh0ICsgJ1wiXScpLmFkZENsYXNzKCdob3ctdG9fX3N1YnRpdGxlX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19kZXNjcltkYXRhLXNsaWRlPVwiJyArIG5leHQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hvdy10b19fZGVzY3JfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19jdHJsLWFycm93X3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2hvdy10b19fY3RybC1hcnJvd19kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhvdy10b19fY3RybC1hcnJvd19sZWZ0JylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd1c2Vyc19fY3RybC1hcnJvd19hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2hvdy10b19fY3RybC1hcnJvd19kaXNhYmxlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19jdHJsLWFycm93X2xlZnQnKS5yZW1vdmVDbGFzcygnaG93LXRvX19jdHJsLWFycm93X2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19jdHJsLWFycm93X3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2hvdy10b19fY3RybC1hcnJvd19kaXNhYmxlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19jdHJsLWFycm93X2xlZnQnKS5yZW1vdmVDbGFzcygnaG93LXRvX19jdHJsLWFycm93X2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAkKCcuaG93LXRvX19jdHJsLWFycm93X3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd1c2Vyc19fY3RybC1hcnJvd19hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2hvdy10b19fY3RybC1hcnJvd19kaXNhYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5ob3ctdG9fX2N0cmwtYXJyb3dfbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9ICQoJy5ob3ctdG8nKS5kYXRhKCdzbGlkZScpO1xuICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZSAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlIDw9IC0xKSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhbmdlSG93VG8oY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLmhvdy10b19fY3RybC1hcnJvd19yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9ICQoJy5ob3ctdG8nKS5kYXRhKCdzbGlkZScpO1xuICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZSArIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlID49IDMpIHtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGFuZ2VIb3dUbyhjdXJyZW50U2xpZGUsIG5leHRTbGlkZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZSBob3cgdG8gOiBlbmRcblxuICAgIC8vIHN3aXBlIGluaXQgOiBiZWdpblxuICAgIGZ1bmN0aW9uIHN3aXBlSW5pdCgpIHtcbiAgICAgICAgJCgnLnVzZXJzJykuc3dpcGUoe1xuICAgICAgICAgICAgc3dpcGVMZWZ0OiBsZWZ0VXNlcnNTd2lwZSxcbiAgICAgICAgICAgIHN3aXBlUmlnaHQ6IHJpZ2h0VXNlcnNTd2lwZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuaG93LXRvJykuc3dpcGUoe1xuICAgICAgICAgICAgc3dpcGVMZWZ0OiBsZWZ0SG93VG9Td2lwZSxcbiAgICAgICAgICAgIHN3aXBlUmlnaHQ6IHJpZ2h0SG93VG9Td2lwZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBsZWZ0VXNlcnNTd2lwZShldmVudCkge1xuICAgICAgICAgICAgJCgnLnVzZXJzX19jdHJsLWFycm93X2xlZnQnKS5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmlnaHRVc2Vyc1N3aXBlKGV2ZW50KSB7XG4gICAgICAgICAgICAkKCcudXNlcnNfX2N0cmwtYXJyb3dfcmlnaHQnKS5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbGVmdEhvd1RvU3dpcGUoZXZlbnQpIHtcbiAgICAgICAgICAgICQoJy5ob3ctdG9fX2N0cmwtYXJyb3dfbGVmdCcpLmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByaWdodEhvd1RvU3dpcGUoZXZlbnQpIHtcbiAgICAgICAgICAgICQoJy5ob3ctdG9fX2N0cmwtYXJyb3dfcmlnaHQnKS5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3dpcGUgaW5pdCA6IGVuZFxuXG4gICAgLy8gY2FsbHMgOiBiZWdpblxuICAgIGluaXRTY3JvbGwoKTtcbiAgICBvcGVuTW9iaWxlTmF2KCk7XG4gICAgcGxheUF1ZGlvKCk7XG4gICAgbW92ZUJnUG9zaXRpb24oKTtcbiAgICB1c2Vyc1NsaWRlcigpO1xuICAgIGhvd1RvU2xpZGVyKCk7XG4gICAgc3dpcGVJbml0KCk7XG4gICAgLy8gY2FsbHMgOiBlbmRcbn0pOyJdfQ==
