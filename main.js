
window.onload = () => {
    btnProjects.style.backgroundColor = 'gray';
    btnAbout.style.backgroundColor = 'rgb(48, 48, 48)';
    setHighlight();
    setViews();
}

function setHighlight() {

    const btnProjects = document.getElementById('btnProjects');
    const btnContact = document.getElementById('btnContact');
    const btnAbout = document.getElementById('btnAbout');

    const viewProjects = document.getElementById('projects');
    const viewContact = document.getElementById('contacts');
    const viewAbout = document.getElementById('about');

    btnProjects.addEventListener('click', () => {
        btnProjects.style.backgroundColor = 'gray';
        btnContact.style.backgroundColor = 'rgb(48, 48, 48)';
        btnAbout.style.backgroundColor = 'rgb(48, 48, 48)';
        viewProjects.style.display = 'block';
        viewContact.style.display = 'none';
        if (isMobile()) viewAbout.style.display = 'none';

    });

    btnContact.addEventListener('click', () => {
        btnContact.style.backgroundColor = 'gray';
        btnProjects.style.backgroundColor = 'rgb(48, 48, 48)';
        btnAbout.style.backgroundColor = 'rgb(48, 48, 48)';
        viewProjects.style.display = 'none';
        if (isMobile()) viewAbout.style.display = 'none';
        viewContact.style.display = 'block';
    });

    btnAbout.addEventListener('click', () => {
        btnAbout.style.backgroundColor = 'gray';
        btnProjects.style.backgroundColor = 'rgb(48, 48, 48)';
        btnContact.style.backgroundColor = 'rgb(48, 48, 48)';
        viewProjects.style.display = 'none';
        viewContact.style.display = 'none';
        viewAbout.style.display = 'block';
    });
}

function setViews() {
    const viewProjects = document.getElementById('projects');
    const viewContact = document.getElementById('contacts');

    viewProjects.style.display = 'block';
    viewContact.style.display = 'none';
}

function isMobile() {
    return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 800
}