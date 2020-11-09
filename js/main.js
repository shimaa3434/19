


$(document).ready(function(){
    $('.1b').hover(function(){
        $('.2b').addClass('blur');
    }, function(){
        $('.2b').removeClass('blur');
    });
    $('.2b').hover(function(){
        $('.1b').addClass('blur');
    }, function(){
        $('.1b').removeClass('blur');
    });
});