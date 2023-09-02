$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});

$(document).on("ready", function () {
    var a = 0;
    $("#btn-projects-ascii").on("click", function () {
        if (a == 0) {
            $('#nav').css('left', '-5%');
            $("<style>#btn-projects-ascii pre:hover:before {content: '\\00a0_________________\\a/                 \\\\\\a|  <-projects--   |\\a \\\\_________________/';}</style>").appendTo("head")
            a = 1;
            $('#projects-container').css('left', '-10%');
        }
        else {
            $('#nav').css('left', '27%');
            $("<style>#btn-projects-ascii pre:hover:before {content: '\\00a0_________________\\a/                 \\\\\\a|  --projects->   |\\a \\\\_________________/';}</style>").appendTo("head")
            a = 0;
            $('#projects-container').css('left', '100%');
        }

    });
});
