
//Hover Image
$(".hover-img").hover(function(){
    //show text
    $(".hover-text", this).css('opacity', 1);
}, function(){
    //hover off - hide text
    $(".hover-text").css('opacity', '0');
});
