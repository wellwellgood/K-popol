$(document).ready(function() {

    // Toggle hide/hover and active classes on button click
    $(".hidebtn").click(function() {
        $(this).toggleClass('hide');
        $(".container").toggleClass("hover");
        $('.box4 , .box5 , .h1').toggleClass('active');
    });

    // Show homepage and hide others
    $(".home").click(function() {
        $(this).toggleClass('active');
        $(".homepage").show();
        $(".projectpage").hide();
        $(".skillpage").hide();
        $(".footer").show();
    });

    // Show project page and hide others
    $(".project").click(function() {
        $(".projectpage").show();
        $(".homepage").hide();
        $(".skillpage").hide();
        $(".footer").hide();
    });

    // Show skill page and hide others
    $(".skill").click(function() {
        $(".skillpage").show();
        $(".homepage").hide();
        $(".projectpage").hide();
        $(".footer").hide();
    });

    // Frame click to activate it and show swiper
    $(".frame").click(function() {
        $(this).addClass("active");
        $(".clickme").addClass('content');
        $(".swiper").show();
    });

    // Swiper initialization
    var swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

