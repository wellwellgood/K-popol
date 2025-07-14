$(document).ready(function() {

    $(document).on('click', '.hidebtn', function() {
        $(this).toggleClass('hide');
        $('.container').toggleClass('hover');
        $('.box4, .box5, .h1').toggleClass('active');
    });

    $(".home").click(function() {
        $(this).toggleClass('active');
        $(".homepage").show();
        $(".projectpage").hide();
        $(".skillpage").hide();
        $(".footer").show();
    });

    $(".project").click(function() {
        $(".projectpage").show();
        $(".homepage").hide();
        $(".skillpage").hide();
        $(".footer").hide();
    });

    $(".skill").click(function() {
        $(".skillpage").show();
        $(".homepage").hide();
        $(".projectpage").hide();
        $(".footer").hide();
    });

    $(".frame").click(function() {
        $(this).addClass("active");
        $(".clickme").addClass("content");
        $(".swiper").fadeIn();
        $(".close_swiper").css("display", "flex");

        // Swiper가 이미 생성되지 않았다면 새로 생성
        if (typeof swiper === 'undefined' || swiper === null) {
            swiper = new Swiper(".swiper", {
                loop: true,
                autoplay: { delay: 3000 },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        }
    });

    $(document).on('click', '.close_swiper', function() {
        $(".frame").removeClass("active");
        $(".clickme").removeClass("content");
        $(".swiper").fadeOut();

        if (swiper !== null) {
            swiper.destroy(true, true);
            swiper = null;
        }

        $(".close_swiper").css("display", "none"); // ✅ 수정된 부분

        if (swiper !== null) {
            swiper.on('init', () => {
                document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
                document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
            });
        }
    });

    // Swiper 초기화 (중복 선언 방지)
    var swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(".swiper-button-next, .swiper-button-prev").on('dblclick', function(event) {
        event.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const projectButton = document.querySelector(".project");
    const board = document.querySelector(".board");
    const sites = document.querySelectorAll(".site");

    projectButton.addEventListener("click", () => {
        board.classList.add("show");

        gsap.from(sites, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.6,
            ease: "power2.out",
            pin: true,
        });
    });
});