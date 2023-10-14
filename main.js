import { templates } from "./data.js";

const emailBody = document.getElementById("emailBody");
const companySelection = document.getElementById("companyDropdown");
companySelection.addEventListener("change", createInputFields);

const infoForm = document.getElementById("infoForm");
infoForm.addEventListener("submit", generateEmail);

let message = templates[0].message;
 
function populateCompanyDropdown(){
    templates.forEach(company => {
        companySelection.options[companySelection.options.length] = new Option(company.name, company.name);
    });
}

function createInputFields(){
    templates[companySelection.selectedIndex-1].fieldNames.forEach(field => {
        let inputField = document.createElement("input");

        inputField.type = "text";
        inputField.placeholder = `${field}`;
        inputField.className = "inputField";
        inputField.required = true;

        infoForm.appendChild(inputField);
    });
    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    infoForm.appendChild(submitButton);
}


function generateEmail(){
    const inputFields = Array.from(document.getElementsByClassName("inputField"));

    for(let i = 0; i < templates[companySelection.selectedIndex-1].keys.length; i++){
        message = message.replaceAll(templates[companySelection.selectedIndex-1].keys[i], inputFields[i].value);
    }
    emailBody.innerText = message;
}

populateCompanyDropdown();
