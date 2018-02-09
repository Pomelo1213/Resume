!function(){
  let view = document.querySelector('.mySlides')
  let controller = {
    view: null,
    swiper: null,
    swiperOptions: {loop: true,pagination: { el: '.swiper-pagination'},navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'}},
    init: function(view){
      this.view = view
      this.initSwiper()
    },
    initSwiper: function(){
      this.swiper = new Swiper(view.querySelector('.swiper-container'), this.swiperOptions)
    }
  }

  controller.init.call(controller, view)
}.call()