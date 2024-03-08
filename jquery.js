/* Preloader */
$(window).on("load", function () {
    $("#projects-list-container").hide();
    $("#projects-container").hide();
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});

$(document).on("ready", function () {

    /* Opens projects tab */
    $("#btn-projects-ascii").on("click", function () {
        $("#projects-list-container").fadeIn("fast");
        $('#projects-list-container').css('top', '25%');
        $("#content").fadeOut("fast");
        $('body').css('overflow-y', 'visible');
    });

    /* Closes project list*/
    $("#projects-list-btn-back-ascii").on("click", function () {
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("#content").fadeIn("slow");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    /* Opens project showcase 1 */
    $("#projects-list-content-proj1").on("click", function () {
        $("#project-showcase-container").fadeIn("fast");
        $('#project-showcase-container').css('top', '25%');
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("html, body").animate({ scrollTop: 0 }, "slow");

        /* TODO: Set content based on showcase 1 */
    });

    /* Opens project showcase 2 */
    $("#projects-list-content-proj2").on("click", function () {
        $("#project-showcase-container").fadeIn("fast");
        $('#project-showcase-container').css('top', '25%');
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("html, body").animate({ scrollTop: 0 }, "slow");

        /* TODO: Set content based on showcase 2 */
    });

    /* Opens project showcase 3 */
    $("#projects-list-content-proj3").on("click", function () {
        $("#project-showcase-container").fadeIn("fast");
        $('#project-showcase-container').css('top', '25%');
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("html, body").animate({ scrollTop: 0 }, "slow");

        /* TODO: Set content based on showcase 3 */
    });

    /* Closes project showcase tab*/
    $("#project-showcase-btn-back").on("click", function () {
        $("#project-showcase-container").fadeOut("fast");
        $('#project-showcase-container').css('top', '100%');
        $("#projects-list-container").fadeIn("fast");
        $('#projects-list-container').css('top', '25%');
        $("#content").fadeOut("fast");
        $('body').css('overflow-y', 'visible');
    });

    /* Alert about me coming soon */
    $("#btn-aboutme-ascii").on("click", function () {
        alert("Coming soon.");
    });

});


