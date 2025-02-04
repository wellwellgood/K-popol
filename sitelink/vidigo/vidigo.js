$(document).ready(function () {
    $(".change").click(function () {
        // .url-container-hide�쓽 active �겢�옒�뒪 �넗湲�
        $(".url-container-hide").toggleClass('active');
        $(".url-container").toggleClass("active")

        // �겢由��븳 踰꾪듉�쓽 active �겢�옒�뒪 �넗湲�
        $(this).toggleClass('active');

        // �씠誘몄�� 寃쎈줈 蹂�寃�
        const image = $(this).find("img")[0]; // 踰꾪듉 �븞�쓽 img �깭洹� �꽑�깮

        if ($(this).hasClass('active')) {
            image.src = "img/icon-cancel.svg"; // active �겢�옒�뒪媛� �엳�쓣 �븣
        } else {
            image.src = "img/icon-change.svg"; // active �겢�옒�뒪媛� �뾾�쓣 �븣
        }
    });
    $(".inner button").click(function(){
        $(".banner").css("display" , "none");
    })
});