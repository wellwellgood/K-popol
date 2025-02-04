// var swiper = new Swiper('.swiper', {
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// const Aos = require("aos");

// AOS.init({
// 	duration: 1200,
//  disable: 'tablet',
// })

// document.addEventListener('DOMContentLoaded' , (Event) => {
//     gsap.to("header" , {
//         duration:1300,
//         y:30,
//     })
// })
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.head');

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // 스크롤 내릴 때 (사라짐)
        header.style.transform = 'translateY(100%)';
        header.style.opacity = '0';
      } else {
        // 스크롤 올릴 때 (나타남)
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
      };

      lastScrollY = currentScrollY;
    });

    $(".menu1 li").mouseover(function(){
        $(this).addClass('on');
    });
    $(".menu1 li").mouseleave(function(){
        $(this).removeClass('on');
    });
})