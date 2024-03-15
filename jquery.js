/* Preloader */
$(window).on("load", function () {
    $("#projects-list-container").hide();
    $("#projects-container").hide();
    $("#project-showcase-container").hide();
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});

$(document).on("ready", function () {

    /* Opens projects tab */
    $("#btn-projects-ascii").on("click", function () {
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
        }, 100);
    });

    /* Opens project showcase 1 */
    $("#projects-list-content-proj1").on("click", function () {
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>Lost In Time</pre>");
        $("#project-showcase-content-desc").append("<pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia est vitae mi pharetra commodo. Sed malesuada arcu malesuada purus sodales varius. Aliquam et condimentum mauris, non consequat lacus. Pellentesque libero libero, commodo vel dui in, faucibus fringilla justo. Curabitur porta enim in laoreet consectetur. Mauris molestie feugiat ligula non fermentum. Quisque ac mattis lacus. Maecenas semper pharetra ipsum eget fringilla. Donec et condimentum nibh. Phasellus non erat accumsan, laoreet mauris a, mattis sem. Integer rhoncus ante non nisi euismod dictum. In eget neque faucibus, congue ex dignissim, euismod risus. Nam convallis ex et sodales sagittis. Proin suscipit dui sed arcu sodales, sit amet fringilla ex hendrerit.</pre>");
        $("#project-showcase-content-desc").append("<pre>Donec ullamcorper justo eu porta dapibus. Nam id risus ex. Phasellus quis odio non risus semper ornare quis non metus. Donec varius venenatis nisi ac consectetur. Morbi eget mauris id nisl tristique congue sed quis risus. Vestibulum facilisis mauris ut dignissim tristique. Vestibulum efficitur massa in mauris aliquet, vitae accumsan sapien venenatis. Suspendisse dignissim ex quis ex pretium, in venenatis ipsum tincidunt. Suspendisse potenti. Aliquam non placerat ex. Morbi efficitur placerat varius. Nunc mattis velit mauris, a condimentum mauris imperdiet sit amet.</pre>");
        $("#project-showcase-content-github-btn-ascii a").attr("href", "https://github.com/quaidsage/Lost-In-Time");
    });

    /* Opens project showcase 2 */
    $("#projects-list-content-proj2").on("click", function () {
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>OpenGL Project</pre>");
        $("#project-showcase-content-desc").append("<pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia est vitae mi pharetra commodo. Sed malesuada arcu malesuada purus sodales varius. Aliquam et condimentum mauris, non consequat lacus. Pellentesque libero libero, commodo vel dui in, faucibus fringilla justo. Curabitur porta enim in laoreet consectetur. Mauris molestie feugiat ligula non fermentum. Quisque ac mattis lacus. Maecenas semper pharetra ipsum eget fringilla. Donec et condimentum nibh. Phasellus non erat accumsan, laoreet mauris a, mattis sem. Integer rhoncus ante non nisi euismod dictum. In eget neque faucibus, congue ex dignissim, euismod risus. Nam convallis ex et sodales sagittis. Proin suscipit dui sed arcu sodales, sit amet fringilla ex hendrerit.</pre>");
        $("#project-showcase-content-desc").append("<pre>Donec ullamcorper justo eu porta dapibus. Nam id risus ex. Phasellus quis odio non risus semper ornare quis non metus. Donec varius venenatis nisi ac consectetur. Morbi eget mauris id nisl tristique congue sed quis risus. Vestibulum facilisis mauris ut dignissim tristique. Vestibulum efficitur massa in mauris aliquet, vitae accumsan sapien venenatis. Suspendisse dignissim ex quis ex pretium, in venenatis ipsum tincidunt. Suspendisse potenti. Aliquam non placerat ex. Morbi efficitur placerat varius. Nunc mattis velit mauris, a condimentum mauris imperdiet sit amet.</pre>");
    });

    /* Opens project showcase 3 */
    $("#projects-list-content-proj3").on("click", function () {
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>Plagarism Checker</pre>");
        $("#project-showcase-content-desc").append("<pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia est vitae mi pharetra commodo. Sed malesuada arcu malesuada purus sodales varius. Aliquam et condimentum mauris, non consequat lacus. Pellentesque libero libero, commodo vel dui in, faucibus fringilla justo. Curabitur porta enim in laoreet consectetur. Mauris molestie feugiat ligula non fermentum. Quisque ac mattis lacus. Maecenas semper pharetra ipsum eget fringilla. Donec et condimentum nibh. Phasellus non erat accumsan, laoreet mauris a, mattis sem. Integer rhoncus ante non nisi euismod dictum. In eget neque faucibus, congue ex dignissim, euismod risus. Nam convallis ex et sodales sagittis. Proin suscipit dui sed arcu sodales, sit amet fringilla ex hendrerit.</pre>");
        $("#project-showcase-content-desc").append("<pre>Donec ullamcorper justo eu porta dapibus. Nam id risus ex. Phasellus quis odio non risus semper ornare quis non metus. Donec varius venenatis nisi ac consectetur. Morbi eget mauris id nisl tristique congue sed quis risus. Vestibulum facilisis mauris ut dignissim tristique. Vestibulum efficitur massa in mauris aliquet, vitae accumsan sapien venenatis. Suspendisse dignissim ex quis ex pretium, in venenatis ipsum tincidunt. Suspendisse potenti. Aliquam non placerat ex. Morbi efficitur placerat varius. Nunc mattis velit mauris, a condimentum mauris imperdiet sit amet.</pre>");
    });

    /* Opens project showcase 4 */
    $("#projects-list-content-proj4").on("click", function () {
        revealShowcase();
        $("#project-showcase-content-title").append("<pre>Fullstack Web Application</pre>");
        $("#project-showcase-content-desc").append("<pre>The description of Fullstack Web Application.</pre>");
        $("#project-showcase-content-desc").append("<pre>More to be added...</pre>");
    });

    /* Alert about me coming soon */
    $("#btn-aboutme-ascii").on("click", function () {
        alert("Coming soon.");
    });

});


