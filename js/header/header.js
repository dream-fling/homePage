$(document).ready(function(){
    $(".Hekuai").find("li:last-child").css("display","none");
    $(".Hekuai").hover(function(){
        var index=$(this).index();
       $(this).find("li:last-child").css("display","block");
    },function(){
       $(this).find("li:last-child").css("display","none");

    })
})