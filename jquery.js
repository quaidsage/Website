/* Preloader */
$(window).on("load", function () {
    $("#projects-list-container").hide();
    $("#projects-container").hide();
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
            /* Retiring project tab for now and replace with project list 
            $('#nav-container').css('left', '-25%');
            $("<style>#btn-projects-ascii pre:hover:before {content: '\\00a0________________\\a/                \\\\\\a|  <-projects--  |\\a \\\\________________/';}</style>").appendTo("head")
            a = 1;
            $("#projects-container").fadeIn("fast");
            $('#projects-container').css('left', '40%'); */

            $("#projects-list-container").fadeIn("fast");
            $('#projects-list-container').css('top', '25%');
            $("#content").fadeOut("fast");
            $('body').css('overflow-y', 'visible');
            }
        else {
            $('#nav-container').css('left', '0');
            $("<style>#btn-projects-ascii pre:hover:before {content: '\\00a0________________\\a/                \\\\\\a|  --projects->  |\\a \\\\________________/';}</style>").appendTo("head")
            a = 0;
            $("#projects-container").fadeOut("fast");
            $('#projects-container').css('left', '100%');
        }

    });

    /* Closes project list*/
    $("#projects-list-btn-back-ascii").on("click", function () {
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("#content").fadeIn("slow");
    });

     /* Alert about me coming soon */
     $("#btn-aboutme-ascii").on("click", function () {
        alert("Coming soon.");
    });

});


