window.onload = function(){
  window.scrollTo(0 , 0)
}

var swiper = new Swiper('.swiper-category',{
  
  slidesPerView : 12,
  spaceBetween: 0,

  
  pagination : {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false
  },

  breakpoints: {
    1500: {
      slidesPerView: 12,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 10,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },
})


var swiper2 = new Swiper('.main-contents', {

  slidesPerView: 1,
  spaceBetween: 0,
  loopFillGroupWithBlank : true,

  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },

  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper('.main-colletion', {
  navigation :{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints : {
    1920 : {
      slidesPerView : 4,
      spaceBetween : 30,
    },

    1024 : {
      slidesPerView : 3,
      spaceBetween : 20,
    },

    768: {
      slidesPerView : 2,
      spaceBetween: 20,
    },

    360 : {
      slidesPerView : 1,
      spaceBetween : 20,
    }
  }
})

$(document).ready(function(){
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    afterLoad: function(anchorLink, index) {
        if (index !== 1) {
            fullpage_api.moveTo(1); // 첫 번째 섹션으로 강제로 이동
        }
    }
  });

  var fullpage = $('#fullpage').fullpage({
    sectionsColor: ['#FFFFFF','#FFFFFF','#FFF3ec','ffffff'],
    anchors:['1stPage', '2stPage', '3stPage', '4stPage'],
    continuousVertical:false,
    verticalCentered:true,
    navigation: true,
    scrolloverflow: true,
    scrollingSpeed: 600,
    scrollBar: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    recordHistory: false,
    // navigation:true,
    afterLoad: function(origin, destination, direction){
        console.log("afterLoad: destination" + destination.index);
    },
    onleave: function(origin, destination, direction){
        console.log("onleave : destination" + origin.index)
    },
});
})
function openNav(){
  if(document.body.clientWidth >= 1000){
      document.getElementById('mynav').style.width = "58%";
  } else if(document.body.clientWidth >= 768){
      document.getElementById('mynav').style.width = "63%";
  } else {
      document.getElementById('mynav').style.width = "60%";
  }
}

function closeNav(){
    document.getElementById('mynav').style.width = "0%";
}