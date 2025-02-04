$(document).ready(function(){
    $(".menu").mouseenter(function(){
        $(this).addClass("active");
        $("#header").addClass("avtive");
        $(".dept2").addClass("active");
        $(".menu_layar").addClass("active");
    });
    $(".menu").mouseleave(function(){
        $(this).removeClass("active");
        $("#header").removeClass("avtive");
        $(".dept2").removeClass("active");
        $(".menu_layar").removeClass("active");
    });
});
//            section1 swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    duration: 3000,
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need pagenation
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  });
  $(".btn-swiper-play").on('click' , function(){
    $(this).toggleClass('on')

    if ($(this).hasClass('on')){
      swiper.autoplay.stop();
    } else{
      swiper.autoplay.start();
    }
  });

//            section2 swiper
  const swipercontainer = new Swiper(".swiper-container", {
    direction:'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    duration: 2000,
    renderBullet: function (index, className) {
      return `<span class="${className}">Page ${index + 1}</span>`;
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.event-next',
      prevEl: '.event-prev',
    },
    autoplay:{
      duration: 2000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length - this.loopedSlides * 2;
        document.querySelector('.section2 .all_num').textContent = totalSlides + 1;
        document.querySelector('.section2 .active_num').textContent = this.realIndex  + 1;
      },
      slideChange: function () {
        document.querySelector('.section2 .active_num').textContent = Math.ceil(this.realIndex / 2) + 1;
      },
    },
  })
  $(".event-play").on('click ', function(){
    $(this).toggleClass("on")

    if ($(this).hasClass("on")){
      swipercontainer.autoplay.stop();
      $(".swiper-pagination").addClass("swiper-pagination-paused");
    } else{
      swipercontainer.autoplay.start();
      $(".swiper-pagination").removeClass("swiper-pagination-paused");
    }
  })
});


const section2 = document.querySelector(".section2");

$(document).ready(function () {
  $(".thumnail").each(function (index) {
    $(this).mouseenter(function () {
      if (index === 0) {
        section2.style.backgroundColor = "rgb(157,159,255)";
        section2.style.transition = '0.5s';
        $(this).css('transform' , 'tranlateY(-10px)');
        $(this).style.transition = "1s";
      } 
      
      else if (index === 1) {
        section2.style.backgroundColor = "rgb(255,149,157)";
        section2.style.transition = '0.5s';
        $(this).css('transform' , 'tranlateY(-10px)');
        $(this).style.transition = '1s';
      } 
      
      else if(index === 2) {
        section2.style.backgroundColor = "rgb(149,255,157)";
        section2.style.transition = '0.5s';
        $(this).css('transform' , 'tranlateY(-10px)');
        $(this).style.transition = '1s';
      } 
      
      else if(index === 3){
        section2.style.backgroundColor = "rgb(255,169,157)"
        section2.style.transition = '0.5s';
        $(this).css('transform' , 'tranlateY(-10px)');
        $(this).style.transition = '1s';
      } 
      
      else if(index === 4){
        section2.style.backgroundColor = "rgb(106,255,236)"
        section2.style.transition = '0.5s';
        $(this).css('transform' , 'tranlateY(-10px)');
        $(this).style.transition = '1s';
      } 
      
      else{
        section2.style.backgroundColor = "rgb(276,169,255)"
        section2.style.transition = '0.5s';
        $(this).css('transform' , 'tranlateY(-10px)');
        $(this).style.transition = '1s';
      }
    });

    $(this).mouseleave(function () {
      section2.style.backgroundColor = "rgb(92,205,181)";
      section2.style.transition = '0.5s';
    });
  });
});
wiperevent.on('autoplaystop', () =>{
  const event = document.querySelector(".swiper-pagination-paused");
  const autostop = document.querySelector(".swiper-pagination-progressbar-fill");

  if (event) {
    autostop.style.transition  = 'none';
    autostop.style.transform = 'scaleX(0)';
    autostop.style.width = 'calc(100% / 3)';
  }

  if (event){
    autostop.style.transition  = 'none';
    autostop.style.transform = 'scaleX(0)';
  }
})

//            section3 swiper
const swiperevent = new Swiper('.swiper-event' , {
  direction:'horizontal',
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 0,
    duration: 1000,
    centeredSlides: true,
    // loopAdditionalSlides : 1, 

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay:{
    //   duration: 1000,
    //   disableOnInteraction: false,
    // },
})


let swiper;

function initSwiper() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    if (!swiper) {
      swiper = new Swiper(".swiper-container3", {
        direction: "horizontal",
        slidesPerGroup: 1,
        slidesPerView: 1,

        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      });
    }
  } else {
    // 화면 크기가 768px 이상일 때 swiper 삭제
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null; // 초기화
    }
  }
}