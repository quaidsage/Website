$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});
$(document).on("ready",function() {
    $("#btn-projects-ascii").on("click",function() {
        $('#nav').css('left', '-20%');
    });
});
