import createHomePage from './homepage';
import createMenuPage from './menupage';
import createContactPage from './contactpage';

const createNavigationMenu = () => {
    const nav = document.querySelector("#menu");

    const HomeLink = document.createElement("button");
    HomeLink.innerHTML = "Home";
    HomeLink.id = "home_button";
    nav.appendChild(HomeLink);

    const MenuLink = document.createElement("button");
    MenuLink.innerHTML = "Menu";
    MenuLink.id = "menu_button";
    nav.appendChild(MenuLink);

    const ContactLink = document.createElement("button");
    ContactLink.id = "contact_button";
    ContactLink.innerHTML = "Contact us";
    nav.appendChild(ContactLink);

    HomeLink.addEventListener('click', () => {
        clearContent();
        createHomePage();
        createNavigationMenu();
    })

    MenuLink.addEventListener('click', () => {
        clearContent()
        createMenuPage();
        createNavigationMenu();
    })

    ContactLink.addEventListener('click', () => {
        clearContent()
        createContactPage();
        createNavigationMenu();
    })

}

function clearContent() {
    document.body.innerHTML = "";
    
}

export default createNavigationMenu;