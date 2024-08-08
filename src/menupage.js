import './css/home.css';

const createMenuPage = () => {
    const content = document.querySelector("#content");

    const ParagDescript = document.createElement("h2");
    ParagDescript.textContent = "Be surprised by our extensive menu full of delicious Mediterranean tapas.At La Barraca we do not only serve Spanish tapas, but a variety of dishesfrom the entire Mediterranean region.";

    content.appendChild(ParagDescript);

    // create a list with the menu items
    const menuList = document.createElement("ul");
    menuList.classList.add('hello');
    const menuListItem1 = document.createElement("li");
    menuListItem1.textContent = "Baguete ------------------ 4.5$"
    menuList.appendChild(menuListItem1);

    const menuListItem2 = document.createElement("li");
    menuListItem2.textContent = "Bread with aioli ------------------ 6.3$"
    menuList.appendChild(menuListItem2);

    const menuListItem3 = document.createElement("li");
    menuListItem3.textContent = "Grilled bread with tomato souce ------------------ 7.9$"
    menuList.appendChild(menuListItem3);

     
    content.appendChild(menuList);
}

export default createMenuPage;