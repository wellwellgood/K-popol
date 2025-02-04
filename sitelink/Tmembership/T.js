$(document).ready(function(){
    var swiper = new Swiper(".main-swiper" , {
        diretion: 'horizontal',
        loop: true,
        speed:300,
    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
        on: {
    
        },
    
        autoplay:{
            delay: 2500,
            disableOnInteraction: false,
        } 
    });
    var playbtn = $('.pause');

    playbtn.on('click', function () {
        
        if (!playbtn.hasClass('on')) {
            swiper.autoplay.stop();
            playbtn.addClass('on').text('재생');
        } else {
            swiper.autoplay.start();
            playbtn.removeClass('on').text('정지');
        }
    });
});

window.onload = function () {
    var scrolltop = document.getElementById("topbtn");

    if (scrolltop) {
        scrolltop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    } else {
        
    }
};
