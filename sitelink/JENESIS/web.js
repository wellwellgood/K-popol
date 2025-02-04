let nav = document.querySelector(".util-menu");
let menu = document.querySelector(".navmenu");
let item = document.querySelector(".item");
const img = document.getElementById("#imggif1");

$(document).ready(function(){

    $(nav).click(function(){
        $(this).toggleClass("is-active");
        $(menu).toggleClass("active");
    });

    $("#btn").click(function(){
        $(this).toggleClass("is-active");
    });

    let item = document.querySelector(".item");
    $(item).mouseover(function () {
        $(this).attr("src",$(this).data("animated"));
    });
    $(item).mouseout(function () {
        $(this).attr("src",$(this).data("static"));
    });

});
$(document).ready(function(){
    $(".btn").click(function(){
        $(this).toggleClass("is-active");
})
});
$(document).ready(function () {
    $(".sectionwrap").click(function () {
        $(this).toggleClass("opened");
        if($(".section-option").css("display") == "none")
            {$(".section-option").show();}
        else
        {$(".section-option").hide();}
    });


    img.addEventListener("mouseover",function () {
        img.src = img.getAttribute
    })

})

const elem = document.querySelector('.model');

  elem.addEventListener('mouseover', function () {
    this.classList.add('hover');
  });

  elem.addEventListener('mouseleave', function () {
    this.classList.remove('hover')});


$(document).on(function(){
    $('item').addEventListener(function(){
        $(this).addClass('.hover');
    })
})
function topbtn_buttom(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

item.addEventListener('mouseenter', function () {

})
