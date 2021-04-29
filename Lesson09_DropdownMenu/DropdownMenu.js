$(document).ready(function(){
    $("ul li").hover(function(){
        $(this).children("ul").stop().slideToggle(100)
    })
})