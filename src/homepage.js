
// homepage.js

const createHomePage = () => {
    const content = document.querySelector("#content");


    const homeImage = document.createElement("img")
    homeImage.src = "homepage.png";
    content.appendChild(homeImage);

}

export default createHomePage;