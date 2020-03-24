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
