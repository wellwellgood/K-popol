$(document).ready(function(){
    $(".solution").mouseover(function(){
        $(this).addClass("active");
        $(".innermenu").addClass("active");
    });
    $(".solution").mouseout(function(){
        $(this).removeClass("active");
        $(".innermenu").removeClass("active");

    });

$(window).scroll(function(){
    if($(this).scrollTop() > 300) {
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }

    $('#up').click(function(){
        $('html , body').animate({scrollTop : 0}, "smooth" , 0)

    })
});

    window.addEventListener('scroll', function(){
    console.log(window.scrollHeight)
    });
});

// $(document).ready(function(){ 

//     gsap.registerPlugin(ScrollTrigger);
//     gsap.utils.toArray("section").forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top", 
//         pin: true,
//         pinSpacing: false,
//       });
//     });
//     ScrollTrigger.create({
//       snap: 1 / 10
//     });
// });