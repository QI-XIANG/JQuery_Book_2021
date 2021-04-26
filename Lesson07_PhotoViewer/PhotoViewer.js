$(document).ready(function(){
    $("ul img").click(function(){
        $("figure img").fadeOut()
        $("figure img").attr('src',$(this).attr("src"))
        $("figure img").fadeIn(300)
    })
})