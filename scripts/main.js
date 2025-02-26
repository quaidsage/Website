document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("title-text-name");
    const text = "quaidsage.";
    let index = 0;
    let showCursor = true;
    const pageContainer = document.getElementById("page-container");
    const projectButton = document.getElementById("project-button");
    const socialButtons = document.getElementById("social-buttons");

    setTimeout(() => {
        pageContainer.style.opacity = "1";
        socialButtons.style.opacity = "1";
    }, 10);

    function typeEffect() {
        if (index < text.length) {
            element.textContent = text.substring(0, index + 1) + "|";
            index++;
            setTimeout(typeEffect, 150);
        } else {
            setInterval(() => {
                element.textContent = showCursor ? text + "|" : text;
                showCursor = !showCursor;
            }, 500);
        }
    }

    projectButton.addEventListener("click", function (event) {
        event.preventDefault();
        pageContainer.classList.add("pan-left");
        socialButtons.style.opacity = "0";
        setTimeout(() => {
            window.location.href = "https://quaidsage.com/projects";
        }, 800);
    });

    typeEffect();
});
