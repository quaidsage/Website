document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = "";

    Object.entries(projectsData).forEach(([id, data], idx) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute("data-id", id);

        card.innerHTML = `
        <img src="${data.img}" alt="${data.title}">
        <h3>${data.title}</h3>
        <p>${data.subtitle}</p>
        <p class="code-text">${data.tags ?
                data.tags.slice(0, 3).join(", ") +
                (data.tags.length > 3 ? ", ..." : "")
                : ""
            }</p>
    `;
        projectsGrid.appendChild(card);

        card.addEventListener('click', function () {
            const projectId = card.getAttribute('data-id');
            if (!projectId) return;
            window.location.href = `project-detail?id=${encodeURIComponent(projectId)}`;
        });

        setTimeout(() => {
            card.classList.add("visible");
        }, 100 + idx * 80);
    });
});
