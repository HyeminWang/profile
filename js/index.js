// 눈내리는 효과
setInterval(createSnowFlake, 50);

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * document.body.clientWidth + 'px';
    console.log(document.body.clientWidth);
    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snow_flake);
    
    setTimeout(() => {
      snow_flake.remove();
    }, 5000)
  }

  // 상단바 햄버거버튼 색
$(function() {
  const aboutMe = $(".about-me").offset().top - 200;
  const skillPart = $(".skills").offset().top - 150;
  const projectPart = $(".projects").offset().top - 150;
  const contactPart = $(".contact").offset().top - 150;

  $(window).on("scroll", function(e) {
    console.log($(document).scrollTop());

    if($(document).scrollTop() > aboutMe && $(document).scrollTop() < contactPart) {
      $(".before-menu span").css("background-color", "#000");
    } else {
      $(".before-menu span").css("background-color", "#fff");
    };

    //menu-borderBottom
    if($(document).scrollTop() > aboutMe && $(document).scrollTop() < skillPart) {
      $(".pc-menu li:nth-child(2)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(2)").css("border-bottom", "3px solid #ccc");
    }

    if($(document).scrollTop() > skillPart && $(document).scrollTop() < projectPart) {
      $(".pc-menu li:nth-child(3)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(3)").css("border-bottom", "3px solid #ccc");
    }

    if($(document).scrollTop() > projectPart && $(document).scrollTop() < contactPart) {
      $(".pc-menu li:nth-child(4)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(4)").css("border-bottom", "3px solid #ccc");
    }

    if($(document).scrollTop() > contactPart) {
      $(".pc-menu li:nth-child(5)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(5)").css("border-bottom", "3px solid #ccc");
    }
  });

  // 모달창
  $(window).on("load resize", function() {
    var WinW = $(window).width();
    console.log(WinW);
    
    if(WinW > 1024) {
      $(".modal").css("display", "none");
      $(".folder-img > img").on("click", function() {
        $(".folder-box").fadeOut();
        $('html, body').css('overflow', 'hidden');
        $(".modal-back").css("display", "block");
        $(".modal").fadeIn();
        $(".modal_close").fadeIn();
      });
    
      $(".modal_close").on("click", function() {
        $('html, body').css('overflow', 'unset');
        $(".modal-back").css("display", "none");
        $(".modal_close").fadeOut();
        $(".modal").fadeOut();
        $(".folder-box").fadeIn();
      });
    
      $(".modal-back").on("click", function() {
        $('html, body').css('overflow', 'unset');
        $(".modal-back").css("display", "none");
        $(".modal_close").fadeOut();
        $(".modal").fadeOut();
        $(".folder-box").fadeIn();
      });
    
    } else if (WinW < 1024) {
      $(".modal").css("display", "block");
    }
  });

  // top btn
    $(window).scroll(function() {
      if($(this).scrollTop() > aboutMe) {
        $('.fixed-menu').fadeIn();
      } else {
        $('.fixed-menu').fadeOut();
      }
    });
    $('.fixed-menu').click(function(e) {
      $('html').animate({ scrollTop: 0 }, 500);
  });

  $('.fixed-menu').click(function() {
    $('html').animate({scrollTop : 0},500);
  });

  // sns
  $(".kakaotalk").click(function() {
    $('html').css('overflow', 'hidden');
    $(this).parent().parent().next().next(".kakao-modal").css("display", "block");
    $(".modal-stack").css("display", "block");
  });
  $(".kakao-close").click(function() {
    $(this).parent(".kakao-modal").css("display", "none");
    $(".modal-stack").fadeOut();
    $('html').css('overflow', 'unset');
  });
  $(".modal-stack").on("click", function() {
    $(this).css("display", "none");
    $(".kakao-modal").fadeOut();
    $('html').css('overflow', 'unset');
  });

  // 스크롤 자연스럽게 이동
  $(".pc-menu li:nth-child(2)").click(function(e) {
    e.preventDefault();
    $("html, body").stop().animate({scrollTop:aboutMe}, 800);
  });

  $(".pc-menu li:nth-child(3)").click(function(e) {
    e.preventDefault();
    $("html, body").stop().animate({scrollTop:skillPart}, 800);
  });

  $(".pc-menu li:nth-child(4)").click(function(e) {
    e.preventDefault();
    $("html, body").stop().animate({scrollTop:projectPart}, 800);
  });

  $(".pc-menu li:last-child").click(function(e) {
    e.preventDefault();
    $("html, body").stop().animate({scrollTop:contactPart}, 1500);
  });
  
  
  // mobile menu 나타나고 사라지게하기
  $(".before-menu").on("click", function() {
    $(".before-menu").hide();
    $(".mobile-menu").slideDown();
    $(".close-menu").show();
  });

  $(".close-menu").on("click", function() {
    $(".close-menu").hide();
    $(".mobile-menu").slideUp();
    $(".before-menu").show();
  });

  $(".mobile-menu .gnb a").on("click", function() {
    $(".mobile-menu").fadeOut();
    $(".before-menu").fadeIn();
  });

  $(window).on("scroll", function(e) {
    if($(document).scrollTop() > skillPart) {
      $(".animated-progress > span").each(function () {
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
          },
          1000
        );
      });
    }
  });

  $(window).on("load resize", function() {
    var WinW = $(window).width();
    if(WinW > 1024) {
      $(".project_btn").children().children("a").mouseover(function() {
        $(this).next(".tooltip").css("display", "block");
      });

      $(".project_btn").children().children("a").mouseout(function() {
        $(".tooltip").css("display", "none");
      });
      
    } else if (WinW < 1024) {
      $(".project_btn").children().children("a").mouseover(function() {
        $(this).next(".tooltip").css("display", "none");
      });
    }
  })

});

$(window).scroll(function () {
  var menu = [$('.about-me'), $('.skills'), $('.p-item')];
  $(menu).each(function (i, obj) {
    var bottom_of_element = obj.offset().top + obj.outerHeight();
    console.log(bottom_of_element);
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    console.log(bottom_of_window);

    if (bottom_of_window+600 > bottom_of_element) {
      obj.animate({ opacity: "1" }, 1000);
    }
  });
});

// header 타이핑 효과
window.addEventListener('load', function(){
  var typeText = document.querySelector("#type");
  var textToBeTypedArr = 
  ["안녕하세요.", 
  "사용자의 니즈를 생각하는", 
  "신입 웹퍼블리셔 왕혜민입니다."
  ];
  var index = 0, isAdding = true, textToBeTypedIndex = 0;
  
  function playAnim() {
  setTimeout(function () {
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
      if (isAdding) {
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          isAdding = false
          setTimeout(function () {
          playAnim()
          }, 2000)
          return
      } else {
          index++
      }
      } else {
          if (index === 0) {
          isAdding = true
          textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
          } else {
          index--
          }
      }
      playAnim()
      }, isAdding ? 120 : 60)
  }
  playAnim()
});

function sendEmail() {

}