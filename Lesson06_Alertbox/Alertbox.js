$(document).ready(function(){

    $('#bg').hide();

    $('#click').click(function(){
        $('#bg').stop().fadeIn(300);
    })

    $('#ok').click(function(){
        $('#bg').stop().fadeOut(300)
    })

})