var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }      
    },
    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
};

var swiper = new Swiper(".swiper-container", swiperOptions);

$(".mdse").on({
  'mouseover' : function() {
    $(this).children().children(".colour").css({'filter': 'brightness(70%)'});
  },
  'mouseout' : function() {
    $(this).children().children(".colour").css({'filter': 'brightness(100%)'});
  }
})

$(".beanItem").on({
  'mouseover' : function() {
    $(this).children().children().children(".bean_area").css({'filter': 'brightness(60%)'});
  },
  'mouseout' : function() {
    $(this).children().children().children(".bean_area").css({'filter': 'brightness(100%)'});
  }
})

// fixed_menu 클릭하면 사라지게하기
$(".close_btn").on("click", function() {
  $(".fixed_menu").hide();
})
