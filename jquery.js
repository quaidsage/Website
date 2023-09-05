/* Preloader */
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});

$(document).on("ready", function () {
    var a = 0;
    var proj = 1;

    /* Change project content function */
    function changeProject(proj) {
        var src = "#";
        var alt = ($("#projects-image img").attr('alt') === ('proj' + proj)) 
            ? ('proj' + proj - 1) 
            : ('proj' + proj);
        $("#projects-image img").attr('src', src);
        $("#projects-image img").attr('alt', alt);
        $("#projects-desc-title").text("project: " + proj)
    }

    /* Opens projects tab */
    $("#btn-projects-ascii").on("click", function () {
        if (a == 0) {
            $('#nav-container').css('left', '-25%');
            $("<style>#btn-projects-ascii pre:hover:before {content: '\\00a0_________________\\a/                 \\\\\\a|  <-projects--   |\\a \\\\_________________/';}</style>").appendTo("head")
            a = 1;
            $('#projects-container').css('left', '40%');
        }
        else {
            $('#nav-container').css('left', '0');
            $("<style>#btn-projects-ascii pre:hover:before {content: '\\00a0_________________\\a/                 \\\\\\a|  --projects->   |\\a \\\\_________________/';}</style>").appendTo("head")
            a = 0;
            $('#projects-container').css('left', '100%');
        }

    });

    /* Increment project tab */
    $("#projects-control-right-ascii").on("click", function () {
        proj++;
        if (proj == 4) {
            proj = 1;
        }
        changeProject(proj);
    });

    /* Decrement project tab */
    $("#projects-control-left-ascii").on("click", function () {
        proj--;
        if (proj == 0) {
            proj = 3;
        }
        changeProject(proj);
    });

    /* Opens project list */
    $("#projects-control-seeAll-ascii").on("click", function () {
        $('#projects-list-container').css('top', '25%');
        $("#content").fadeOut("fast");
        $('body').css('overflow-y', 'visible');
    });

    /* Closes project list*/
    $("#projects-list-btn-back-ascii").on("click", function () {
        $('#projects-list-container').css('top', '100%');
        $('body').css('overflow-y', 'hidden');
        $("#content").fadeIn("slow");
    });

});


