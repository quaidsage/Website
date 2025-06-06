function renderDescription(desc) {
    function boldText(text) {
        return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    }
    return desc
        .split(/\n{2,}/)
        .map(paragraph => {
            if (paragraph.trim().startsWith('-')) {
                const items = paragraph
                    .split('\n')
                    .filter(line => line.trim().startsWith('-'))
                    .map(line => `<li>${boldText(line.replace(/^- /, '').trim())}</li>`)
                    .join('');
                return `<ul>${items}</ul>`;
            } else {
                return `<p>${boldText(paragraph.replace(/\n/g, '<br>'))}</p>`;
            }
        })
        .join('');
}

document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const projectId = getQueryParam("id");
    const container = document.getElementById("project-detail-container");

    if (!projectId || !projectsData[projectId]) {
        container.innerHTML = "<h2>Project not found.</h2>";
        return;
    }

    const data = projectsData[projectId];

    container.innerHTML = `
        <a href="https://quaidsage.com/projects" id="back-button">&lt; Return</a>
        <div class="project-detail">
            <div class="project-detail-main">
                <div class="project-detail-left">
                    <div class="project-detail-info">
                        <h1>${data.title}</h1>
                        <span>${renderDescription(data.description)}</span>
                    </div>
                </div>
                <div class="project-detail-right">
                    <div class="project-detail-icon">
                        <img src="${data.img}" alt="${data.title}" class="project-detail-img">
                    </div>
                    <div class="project-detail-tag">
                        <h2>Tags:</h2>
                        <ul class="project-detail-tag-list">
                            ${data.tags ? data.tags.map(lang => `<li class="project-detail-tag-item">${lang}</li>`).join("") : ""}
                        </ul>
                    </div>
                    <div class="project-detail-buttons">
                        ${data.buttons ? data.buttons.map(btn => `<a href="${btn.link}" target="_blank" class="project-detail-button">${btn.text}</a>`).join("") : ""}
                    </div>
                </div>
            </div>
            <div class="project-detail-secondary">
                <h2>Photo Gallery</h2>
                <div class="project-detail-extra-images">
    ${data.extraImages
            ? data.extraImages.map(img =>
                typeof img === "string"
                    ? `<div class="project-detail-extra-image-wrapper">
                            <img src="${img}" class="project-detail-extra-image">
                       </div>`
                    : `<div class="project-detail-extra-image-wrapper">
                            <img src="${img.src}" class="project-detail-extra-image">
                            <div class="project-detail-extra-caption">${img.caption || ""}</div>
                       </div>`
            ).join("")
            : ""
        }
</div>
            </div>
        </div>
    `;

    setTimeout(() => {
        const detail = container.querySelector('.project-detail');
        if (detail) detail.classList.add('visible');
    }, 10);
});