
import './css/style.css';

// homepage.js

const createHomePage = () => {

    const content = document.createElement("div");
    content.id = "content_home";
    document.body.appendChild(content);

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Sihana Restaurant";
    content.appendChild(h1Content);

    const h2Content = document.createElement("h2");
    h2Content.textContent = "we serve for you";
    content.appendChild(h2Content);

    const h3Content = document.createElement("h3");
    h3Content.textContent = "with love";
    content.appendChild(h3Content);

    const paragraphContent = document.createElement("p");
    paragraphContent.textContent = "Sihana Restaurant, your place for delicious Mediterranean tapas in the heart Hamburg. Located at Hamburg Altstadt we serve lovingly home-made dishes that are perfect to share with family, friends or colleagues.";
    content.appendChild(paragraphContent);

    const nav = document.createElement("div");
    nav.id = "menu";
    content.appendChild(nav);

}

export default createHomePage;