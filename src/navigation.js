import createHomePage from './homepage';
import createMenuPage from './menupage';
import createContactPage from './contactpage'

const createNavigationMenu = () => {
    const nav = document.querySelector("#menu");


    const HomeLink = document.createElement("button");
    HomeLink.innerHTML = "Home";
    nav.appendChild(HomeLink);

    const MenuLink = document.createElement("button");
    MenuLink.innerHTML = "Menu";
    nav.appendChild(MenuLink);

    const ContactLink = document.createElement("button");
    ContactLink.innerHTML = "Contact us";
    nav.appendChild(ContactLink);

    HomeLink.addEventListener('click', () => {
        createHomePage();
    })

    MenuLink.addEventListener('click', () => {
        createMenuPage();
    })

    ContactLink.addEventListener('click', () => {
        createContactPage();
    })

}

export default createNavigationMenu;