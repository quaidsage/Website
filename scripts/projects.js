const projectsData = {
    tileo: {
        title: "Tileo",
        description: "A grid-based physics sandbox built in TypeScript",
        img: "img/tileo.png",
        github: "https://github.com/quaidsage/tileo",
        demo: "https://quaidsage.com/falling-sand",
        extraImages: ["img/tileo-ex.png"],
    },
    mmss: {
        title: "Meow Meow Silly Studio",
        description: "A web-based collaborative digital work station",
        img: "img/mmss.png",
        github: "https://github.com/UOA-CS732-S1-2025/group-project-meowmeowsillycats",
        extraImages: ["img/mmss-track.png", "img/mmss-effect.gif"],
        extraDescription: "Collaborative tools for artists with real-time sync.",
    },
    stackedSuccess: {
        title: "Stacked Success",
        description: "A faithful tetris clone built in JavaFX",
        img: "img/stacked.png",
        github: "https://github.com/quaidsage/stacked-success",
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const pageContainer = document.getElementById("projects-container");
    const backButton = document.getElementById("back-button");

    setTimeout(() => {
        pageContainer.classList.remove(...pageContainer.classList);
        pageContainer.classList.add("pan-in");
    }, 50);

    backButton.addEventListener("click", function (event) {
        event.preventDefault();
        pageContainer.classList.remove(...pageContainer.classList);
        pageContainer.classList.add("pan-right");
        setTimeout(() => {
            window.location.href = "https://quaidsage.com";
        }, 800);
    });

    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const githubBtn = document.getElementById('github-btn');
    const spareBtn = document.getElementById('spare-btn');

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = card.getAttribute('data-id');
            const data = projectsData[projectId];
            if (!data) return;

            modalTitle.innerText = data.title;
            modalImg.src = data.img;

            if (data.github) {
                githubBtn.style.display = '';
                githubBtn.href = data.github;
            } else {
                githubBtn.style.display = 'none';
            }

            if (data.demo) {
                spareBtn.style.display = '';
                spareBtn.href = data.demo;
                spareBtn.innerText = 'Try Demo >';
            } else {
                spareBtn.style.display = 'none';
            }

            modalDescription.innerText = data.description;
            document.getElementById('modal-extra').innerHTML = '';

            if (data.extraDescription) {
                const extraPara = document.createElement('p');
                extraPara.innerText = data.extraDescription;
                extraPara.classList.add('extra-description');
                document.getElementById('modal-extra').appendChild(extraPara);
            }

            if (data.extraImages) {
                data.extraImages.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.classList.add('extra-modal-img');
                    document.getElementById('modal-extra').appendChild(img);
                });
            }


            openModal();
        });
    });


    closeModalBtn.addEventListener('click', function () {
        closeModal();
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function openModal() {
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = "1";
            modalContent.style.transform = "translateY(0)";
            modalContent.style.opacity = "1";
        }, 10);
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');
        modal.style.opacity = "0";
        modalContent.style.transform = "translateY(-50px)";
        modalContent.style.opacity = "0";

        setTimeout(() => {
            modal.style.display = "none";
            modalDescription.innerHTML = "";
        }, 300);
    }
});
