

const createContactPage = () => {
    const content = document.querySelector("#content");

    const ParagDescrip = document.createElement("h2");
    ParagDescrip.textContent = "Do you have any questions or would you like to make a reservation ?You can easily do this online.You can reach us by phone at + 31(0)43 354 10 11 between 17: 00 and 22: 00 on our opening days.";

    content.appendChild(ParagDescrip);
    // create a contact form
    const form = document.createElement("form");
    form.id = "contact-form";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your name here";
    form.appendChild(nameInput);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Send Message";
    form.appendChild(submitButton);

    content.appendChild(form);

}

export default createContactPage;