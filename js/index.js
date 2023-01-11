

// 눈내리는 효과
setInterval(createSnowFlake, 50);

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * document.body.clientWidth + 'px';
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
  const headerMenu = $("header").offset().top;
  console.log(headerMenu);

  $(window).on("scroll", function(e) {
    console.log($(document).scrollTop());

    if($(document).scrollTop() > 740 && $(document).scrollTop() < 7750) {
      $(".before-menu span").css("background-color", "#000");
    } else {
      $(".before-menu span").css("background-color", "#fff");
    };

    //menu-borderBottom
    if($(document).scrollTop() > 900 && $(document).scrollTop() < 2000) {
      $(".pc-menu li:nth-child(2)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(2)").css("border-bottom", "3px solid #ccc");
    }

    if($(document).scrollTop() > 2000 && $(document).scrollTop() < 3200) {
      $(".pc-menu li:nth-child(3)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(3)").css("border-bottom", "3px solid #ccc");
    }

    if($(document).scrollTop() > 3200 && $(document).scrollTop() < 8700) {
      $(".pc-menu li:nth-child(4)").css("border-bottom", "3px solid #039be5");
    } else{
      $(".pc-menu li:nth-child(4)").css("border-bottom", "3px solid #ccc");
    }

    if($(document).scrollTop() > 8700) {
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
  $(document).scroll(function() {
    if($(this).scrollTop() > 400) {
      $('.fixed-menu').fadeIn();
    } else {
      $('.fixed-menu').fadeOut();
    }
  });

  $('.fixed-menu').click(function() {
    $('html').animate({scrollTop : 0},500);
  });

  // sns
  $(".kakaotalk").click(function() {
    $(this).parent().next(".kakao-modal").css("display", "block");
  })

  
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

  $(".animated-progress > span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      4000
    );
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