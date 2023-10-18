const root = "https://gauravxor.github.io/js-js-js";
const projects = [
    {
        "image": "https://picsum.photos/200/200",
        "title": "Unclickable Button",
        "url": `${root}/irritating-button/`
    },
    {
        "image": "https://picsum.photos/200/200",
        "title": "Lorem Ipsum",
        "url": `${root}/irritating-button/`
    },
    {
        "image": "https://picsum.photos/200/200",
        "title": "Lorem Ipsum",
        "url": `${root}/irritating-button/`
    },
    {
        "image": "https://picsum.photos/200/200",
        "title": "Lorem Ipsum",
        "url": `${root}/irritating-button/`
    },
    {
        "image": "https://picsum.photos/200/200",
        "title": "Lorem Ipsum",
        "url": `${root}/irritating-button/`
    }
];

const projectContainer = document.body.querySelector('.project-container');
for (let i = 0; i < projects.length; i++) {
    const currentProject = projects[i];
    const projectCardHTML = `
        <div class="left-image-container">
            <img class="left-image" src=${currentProject.image} alt="some image">
        </div>
        <div class="center-container">
            <div class="text-container"> ${currentProject.title}</div>
        </div>
        <div class="right-image-container">
            <a href=${currentProject.url}>
                <img class="web-icon" src="web.png" alt="Clickable icon"></img>
            </a>
        </div>
    `;
    const newCardContainer = document.createElement("div");
    newCardContainer.setAttribute("class", "card-container");
    newCardContainer.innerHTML = projectCardHTML;
    projectContainer.appendChild(newCardContainer);
}