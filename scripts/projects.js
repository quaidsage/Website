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
            modalTitle.innerText = card.querySelector('h3').innerText;
            modalDescription.innerText = card.querySelector('p').innerText;
            modalImg.src = card.querySelector('img').src;

            const githubURL = card.getAttribute('data-github');
            const extraData = card.getAttribute('data-extra');

            if (githubURL === null) {
                githubBtn.style.display = 'none';
            } else {
                githubBtn.style.display = '';
                githubBtn.href = githubURL;
            }

            if (extraData === null) {
                spareBtn.style.display = 'none';
            } else {
                spareBtn.style.display = '';
                spareBtn.href = extraData;
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
        }, 300);
    }
});
