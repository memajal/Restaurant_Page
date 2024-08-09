import './css/contact.css';

const createContactPage = () => {
    const content = document.createElement("div");
    content.id = "content_contact";
    document.body.appendChild(content);

    const contentContactLeft = document.createElement("div");
    contentContactLeft.id = "content_contact_left";
    content.appendChild(contentContactLeft);

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Sihana Restaurant";
    contentContactLeft.appendChild(h1Content);


    const h2Content = document.createElement("h2");
    h2Content.textContent = "contact";
    contentContactLeft.appendChild(h2Content);

    const h3Content = document.createElement("h3");
    h3Content.textContent = "Feel as in your home";
    contentContactLeft.appendChild(h3Content);

    const nav = document.createElement("div");
    nav.id = "menu";
    contentContactLeft.appendChild(nav);

    // right content of the Contact will contain the contact form
    const contentContactRight = document.createElement("div");
    contentContactRight.id = "content_contact_right";
    content.appendChild(contentContactRight);



    const ParagDescrip = document.createElement("p");
    ParagDescrip.textContent = "Do you have any questions or would you like to make a reservation ?You can easily do this online.You can reach us by phone at + 31(0)43 354 10 11 between 17: 00 and 22: 00 on our opening days.";
    contentContactRight.appendChild(ParagDescrip);


    // create a contact form
    const form = document.createElement("form");
    form.id = "contact-form";

    const formNameDiv = document.createElement("div");
    const labelName = document.createElement("label");
    labelName.htmlFor = "name_input";
    labelName.textContent = "Name:";
    formNameDiv.appendChild(labelName);


    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name_input";
    nameInput.placeholder = "Enter your name";
    formNameDiv.appendChild(nameInput);

    form.appendChild(formNameDiv);

    const formEmailDiv = document.createElement("div");
    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email_input";
    labelEmail.textContent = "Email:";
    formEmailDiv.appendChild(labelEmail);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email_input";
    emailInput.placeholder = "Enter your name";
    formEmailDiv.appendChild(emailInput);

    form.appendChild(formEmailDiv);

    const formMessageDiv = document.createElement("div");
    const labelMessage = document.createElement("label");
    labelMessage.htmlFor = "message_text";
    labelMessage.textContent = "Message:";
    formMessageDiv.appendChild(labelMessage);

    const MessageTextArea = document.createElement("textarea");
    MessageTextArea.id = "message_text";
    MessageTextArea.maxLength = "100";
    MessageTextArea.placeholder = "Enter your message";
    formMessageDiv.appendChild(MessageTextArea);

    form.appendChild(formMessageDiv);



    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Send Message";
    form.appendChild(submitButton);

    contentContactRight.appendChild(form);

}

export default createContactPage;