$(".menu-icon").click(function(){
    $(".menu-area").show();
});
$(".cross").click(function(){
    $(".menu-area").hide();
});
$(".s-menu").click(function(){
    $(".menu-area .sub-menu").slideToggle();
});