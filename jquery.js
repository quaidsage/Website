/* Preloader */
$(window).on("load", function () {
    $("#projects-list-container").hide();
    $("#projects-container").hide();
    $("#project-showcase-container").hide();
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});

$(document).on("ready", function () {

    function createBackground(width, height) {
        let background = "";
        for (let i = 0; i < width - 2; i++) {
            background += "_";
        }
        background += "\n";

        background += "/";
        for (let j = 0; j < width - 2; j++) {
            background += " ";
        }
        background += "\\\n";

        for (let i = 0; i < height - 2; i++) {
            background += "|";
            for (let j = 0; j < width - 2; j++) {
                background += " ";
            }
            background += "|\n";
        }

        background += "\\";
        for (let j = 0; j < width - 2; j++) {
            background += "_";
        }
        background += "/\n";

        return background;
    }

    /* Opens projects tab */
    $("#btn-projects-ascii").on("click", function () {
        $('#projects-list-background-ascii pre span').text(createBackground(64, 55));
        $("#projects-list-container").fadeIn("fast");
        $('#projects-list-container').css('top', '25%');
        $("#nav-container").fadeOut("fast");
        $('body').css('overflow-y', 'visible');
    });

    /* Closes project list*/
    $("#projects-list-btn-back-ascii").on("click", function () {
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("#nav-container").fadeIn("slow");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    /* Hide project list and reveal project showcase */
    function revealShowcase() {
        $("#project-showcase-container").fadeIn("fast");
        $('#project-showcase-container').css('top', '25%');
        $('#projects-list-container').css('top', '100%');
        $("#projects-list-container").fadeOut("fast");
        $('wrapper').css('overflow-y', 'hidden');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    /* Closes project showcase tab*/
    $("#project-showcase-btn-back").on("click", function () {
        $("#project-showcase-container").fadeOut("fast");
        $('#project-showcase-container').css('top', '100%');
        $("#projects-list-container").fadeIn("fast");
        $('#projects-list-container').css('top', '25%');
        $("#nav-container").fadeOut("fast");
        $('body').css('overflow-y', 'visible');

        setTimeout(function () {
            $("#project-showcase-content-title").empty();
            $("#project-showcase-content-desc").empty();
            $("#project-showcase-content-github-btn-ascii a").css("display", "");
        }, 100);
    });

    /* Opens project showcase 1 */
    $("#projects-list-content-proj1").on("click", function () {
        $('#project-showcase-background-ascii pre span').text(createBackground(66, 28));
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>Lost In Time</pre>");
        $("#project-showcase-content-desc").append("<pre>" +
            "Lost in Time is a point and click puzzle game developed that integrates the GPT-3 large language model through text based interactions in the forms of hints, story telling, and dialogue. " +
            "This creates an immersive and more varied experience for greater replayability."
            + "</pre>");
        $("#project-showcase-content-desc").append("<pre>" +
            "This was developed as a group project for a client specification for an escape room utilising latest AI technology. The project was developed in Java with use of the JavaFX platform and Scenebuilder tools. The project as a whole helped to familiarize myself with collaborative workflow and improve my version control skills in git." +
            "</pre>");
        $("#project-showcase-content-desc").append("<img src='img/lostintime.png' style='width: 400px; height: 210px; border: 3px white dashed;'>");
        $("#project-showcase-content-desc").append("<img src='img/lostintime2.png' style='width: 400px; height: 210px; border: 3px white dashed; margin-left: 5px;'>");
        $("#project-showcase-content-github-btn-ascii a").attr("href", "https://github.com/quaidsage/Lost-In-Time");
    });

    /* Opens project showcase 2 */
    $("#projects-list-content-proj2").on("click", function () {
        $('#project-showcase-background-ascii pre span').text(createBackground(64, 16));
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>OpenGL Project</pre>");
        $("#project-showcase-content-desc").append("<pre>" +
            "A voxel-based engine developed in C++ using the OpenGL API. Currently furthering my skills in C++ and my understanding in computer graphics as a result of this project." +
            "</pre>");
        $("#project-showcase-content-github-btn-ascii a").css("display", "none");
    });

    /* Opens project showcase 3 */
    $("#projects-list-content-proj3").on("click", function () {
        $('#project-showcase-background-ascii pre span').text(createBackground(64, 16));
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>Plagarism Checker</pre>");
        $("#project-showcase-content-desc").append("<pre>" +
            "A plagorism checker developed in Matlab utilising the Winnow algorithm to detect levels of plagrism between two pieces of text-based content. " +
            "This project served as an application for the skills I had obtained through learning the Matlab language. " +
            "</pre>");
        $("#project-showcase-content-github-btn-ascii a").attr("href", "https://github.com/quaidsage/Plagarism-Checker");
    });

    /* Opens project showcase 4 */
    $("#projects-list-content-proj4").on("click", function () {
        $('#project-showcase-background-ascii pre span').text(createBackground(66, 16));
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>Fullstack Web Application</pre>");
        $("#project-showcase-content-desc").append("<pre>" +
            "A fullstack web application built using the MERN stack in order to obtain and display data. " +
            "I am currently developing my understanding of REACT and its tools in order to bring my project ideas into fruition. " +
            "</pre>");
        $("#project-showcase-content-github-btn-ascii a").css("display", "none");
    });

    /* Alert about me coming soon */
    $("#btn-aboutme-ascii").on("click", function () {
        alert("Coming soon.");
    });

});


