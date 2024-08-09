import './css/menu.css';

const createMenuPage = () => {

    const content = document.createElement("div");
    content.id = "content_menu";
    document.body.appendChild(content);

    // left content of the page will contain h1, h2, h3 and menu
    const contentMenuLeft = document.createElement("div");
    contentMenuLeft.id = "content_menu_left";
    content.appendChild(contentMenuLeft)

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Sihana Restaurant";
    contentMenuLeft.appendChild(h1Content);
    

    const h2Content = document.createElement("h2");
    h2Content.textContent = "discover";
    contentMenuLeft.appendChild(h2Content);

    const h3Content = document.createElement("h3");
    h3Content.textContent = "our dishes";
    contentMenuLeft.appendChild(h3Content);

    const nav = document.createElement("div");
    nav.id = "menu";
    contentMenuLeft.appendChild(nav);

    // right content of the Menu will contain a description and the Menu list

    const contentMenuRight = document.createElement("div");
    contentMenuRight.id = "content_menu_right";
    content.appendChild(contentMenuRight);

    const menuDescription = document.createElement("p");
    menuDescription.id = "menu_description";
    menuDescription.textContent = "Be surprised by our extensive menu full of delicious Mediterranean food. We serve a variety of dishes from the entire Mediterranean region. View our full menu and reserve your table";
    contentMenuRight.appendChild(menuDescription);

    // create a list with the menu items

    const menuListDiv = document.createElement("div");
    menuListDiv.id = "menu_list";
    contentMenuRight.appendChild(menuListDiv);
    
    const h3ListHeader = document.createElement("h3");
    h3ListHeader.className = "list_header";
    h3ListHeader.textContent = "Bread";
    contentMenuRight.appendChild(h3ListHeader);

    const menuList1 = document.createElement("ul");
    menuList1.className = "menu_list_content";

    const menuListItem1 = document.createElement("li");
       const menuListItem1Name = document.createElement("h4");
       menuListItem1Name.textContent = "Baguete";
       const menuListItem1Price = document.createElement("h4");
       menuListItem1Price.textContent = "4.5$";

    menuListItem1.appendChild(menuListItem1Name);
    menuListItem1.appendChild(menuListItem1Price);
    menuList1.appendChild(menuListItem1);

    const menuListItem2 = document.createElement("li");
    const menuListItem2Name = document.createElement("h4");
    menuListItem2Name.textContent = "Bread with aioli";
    const menuListItem2Price = document.createElement("h4");
    menuListItem2Price.textContent = "6.3$";

    menuListItem2.appendChild(menuListItem2Name);
    menuListItem2.appendChild(menuListItem2Price);
    menuList1.appendChild(menuListItem2);

    const menuListItem3 = document.createElement("li");
    const menuListItem3Name = document.createElement("h4");
    menuListItem3Name.textContent = "Grilled bread with tomato souce";
    const menuListItem3Price = document.createElement("h4");
    menuListItem3Price.textContent = "7.3$";

    menuListItem3.appendChild(menuListItem3Name);
    menuListItem3.appendChild(menuListItem3Price);
    menuList1.appendChild(menuListItem3);

     
    contentMenuRight.appendChild(menuList1);


    const h3ListHeader2 = document.createElement("h3");
    h3ListHeader2.className = "list_header";
    h3ListHeader2.textContent = "Fish";
    contentMenuRight.appendChild(h3ListHeader2);

    const menuList2 = document.createElement("ul");
    menuList2.className = "menu_list_content";

    const menuList2Item1 = document.createElement("li");
    const menuList2Item1Name = document.createElement("h4");
    menuList2Item1Name.textContent = "Baguete";
    const menuList2Item1Price = document.createElement("h4");
    menuList2Item1Price.textContent = "4.5$";

    menuList2Item1.appendChild(menuList2Item1Name);
    menuList2Item1.appendChild(menuList2Item1Price);
    menuList2.appendChild(menuList2Item1);

    const menuList2Item2 = document.createElement("li");
    const menuList2Item2Name = document.createElement("h4");
    menuList2Item2Name.textContent = "Bread with aioli";
    const menuList2Item2Price = document.createElement("h4");
    menuList2Item2Price.textContent = "6.3$";

    menuList2Item2.appendChild(menuList2Item2Name);
    menuList2Item2.appendChild(menuList2Item2Price);
    menuList2.appendChild(menuListItem2);

    const menuList2Item3 = document.createElement("li");
    const menuList2Item3Name = document.createElement("h4");
    menuList2Item3Name.textContent = "Grilled bread with tomato souce";
    const menuList2Item3Price = document.createElement("h4");
    menuList2Item3Price.textContent = "7.3$";

    menuList2Item3.appendChild(menuList2Item3Name);
    menuList2Item3.appendChild(menuList2Item3Price);
    menuList2.appendChild(menuList2Item3);

    contentMenuRight.appendChild(menuList2);


    const h3ListHeader3 = document.createElement("h3");
    h3ListHeader3.className = "list_header";
    h3ListHeader3.textContent = "Meat";
    contentMenuRight.appendChild(h3ListHeader3);

    const menuList3 = document.createElement("ul");
    menuList3.className = "menu_list_content";

    const menuList3Item1 = document.createElement("li");
    const menuList3Item1Name = document.createElement("h4");
    menuList3Item1Name.textContent = "Baguete";
    const menuList3Item1Price = document.createElement("h4");
    menuList3Item1Price.textContent = "4.5$";

    menuList3Item1.appendChild(menuList3Item1Name);
    menuList3Item1.appendChild(menuList3Item1Price);
    menuList3.appendChild(menuList3Item1);

    const menuList3Item2 = document.createElement("li");
    const menuList3Item2Name = document.createElement("h4");
    menuList3Item2Name.textContent = "Bread with aioli";
    const menuList3Item2Price = document.createElement("h4");
    menuList3Item2Price.textContent = "6.3$";

    menuList3Item2.appendChild(menuList3Item2Name);
    menuList3Item2.appendChild(menuList3Item2Price);
    menuList3.appendChild(menuList3Item2);

    const menuList3Item3 = document.createElement("li");
    const menuList3Item3Name = document.createElement("h4");
    menuList3Item3Name.textContent = "Grilled bread with tomato souce";
    const menuList3Item3Price = document.createElement("h4");
    menuList3Item3Price.textContent = "7.3$";

    menuList3Item3.appendChild(menuList3Item3Name);
    menuList3Item3.appendChild(menuList3Item3Price);
    menuList3.appendChild(menuList3Item3);

    contentMenuRight.appendChild(menuList3);
}

export default createMenuPage;