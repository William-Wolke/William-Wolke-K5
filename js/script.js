let homeButton = document.getElementById("homeButton");
let contactButton = document.getElementById("contactButton");
let projectsButton = document.getElementById("projectsButton");

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

let hero = document.getElementById('hero');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');

homeButton.addEventListener("click", checkHomeButton);
contactButton.addEventListener("click", checkContactButton);
projectsButton.addEventListener("click", checkProjectsButton);

console.log(heightOutput);

function checkHomeButton() {
    let w = window.innerWidth;

    if (w >= 700) {
        hero.style.display = "block";
        projects.style.display = "none";
        contact.style.display = "none";
    }

    else if (w < 700) {
        hero.style.display = "block";
        projects.style.display = "block";
        contact.style.display = "block"; 
    }
}

function checkContactButton() {
    let w = window.innerWidth;

    if (w >= 700) {
        hero.style.display = "none";
        projects.style.display = "block";
        contact.style.display = "none";
    }

    else if (w < 700) {
        hero.style.display = "block";
        projects.style.display = "block";
        contact.style.display = "block"; 
    }
}

function checkProjectsButton() {
    let w = window.innerWidth;

    if (w >= 700) {
        hero.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "block";
    }

    else if (w < 700) {
        hero.style.display = "block";
        projects.style.display = "block";
        contact.style.display = "block"; 
    }
}