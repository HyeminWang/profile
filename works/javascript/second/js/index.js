window.onload = function () {
    $(function () {
        $("html, body").animate({
            scrollTop: 0
        },1000);
    });

    $("#main_page2, #main_page3, #main_page4").animate({
        opacity: 0
    }, 300);

    $(".main_img").click(function() {
        location.href = '#main_page2';
        $("#main_page2").animate({
            opacity: 1
        }, 300);
    });

    $("#next_btn").click(function() {
        location.href = '#main_page3';
        $("#main_page3").animate({
            opacity: 1
        }, 300);
    });

    $("#next_btn2").click(function() {
        location.href = '#main_page4';
        $("#main_page4").animate({
            opacity: 1
        }, 300);
    });

    $("#go_home_btn > img").on('click', function () {
        location.href = '#main_page1';
    });

    $("#previous_1 > img").on('click', function () {
        location.href = '#main_page2';
    });

    $("#previous_2 > img").on('click', function () {
        location.href = '#main_page3';
    });

    $(".crt_profile").children(".box").children(".crt_common").on('click', function() {
        if($(this).next().css("display") == "none") {
            $(this).next().css("display", "block")
        } else {
            $(this).next().css("display", "none")
        }
    });

    $(".crt_array").children(".crt_img").on('click', function() {
        if($(this).next().css("display") == "none") {
            $(this).next().css("display", "block")
            $(".text_box").css("display", "none");
        } else {
            $(this).next().css("display", "none")
        }
    });
}   