$(document).ready(function() {

    $(document).on('click', '.hidebtn',function() {
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
        // e.stopPropagation();
        $(this).addClass("active");
        $(".clickme").addClass("content");
        $(".swiper").fadeIn(); // 부드럽게 보이도록 fadeIn 사용
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
    
    $(document).on('click','.close_swiper', function() {
        // e,stopPropagation();
        $(".frame").removeClass("active");
        $(".clickme").removeClass("content");
        $(".swiper").fadeOut(); // 부드럽게 사라지도록 fadeOut 사용
    
        // swiper 인스턴스만 제거하고, 새로 만들지 않도록 설정
        if (swiper !== null) {
            swiper.destroy(true, true);
            swiper = null; // swiper 인스턴스 초기화
        }
        $(".close_swiper").css("display", "none");
        swiper.on('init', () => {
            document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
            document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
        });
    });

    var swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(".swiper-button-next", ".swiper-button-prev").on('dbclick', function(){
        e.preventDefault();
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const projectButton = document.querySelector(".project");
    const board = document.querySelector(".board");
    const sites = document.querySelectorAll(".site");

    projectButton.addEventListener("click", () => {
      // board를 보이게 설정
    board.classList.add("show");

      // 모든 .site 요소에 GSAP 애니메이션 적용
    gsap.from(sites, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.6, // 순차적 등장
        ease: "power2.out",
        pin: true,
        });
    });
});

