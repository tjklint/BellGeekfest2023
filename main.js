import { templates } from "./data.js";

const emailBody = document.getElementById("emailBody");
const companySelection = document.getElementById("companyDropdown");
companySelection.addEventListener("change", createInputFields);

const infoForm = document.getElementById("infoForm");
infoForm.addEventListener("submit", generateEmail);

/**
 * Populates a dropdown menu in the main page with names of companies in the 'templates' array.
 * Note: Objects in the 'templates' array must contain a 'name' property.
 */
function populateCompanyDropdown(){
    templates.forEach(company => {
        companySelection.options[companySelection.options.length] = new Option(company.name, company.name);
    });
}

/**
 * Clears form of all input fields and populates them with new fields to correspond to the required data for the email.
 * Uses 'keys' array in the 'templates' array to create input fields
 * Note: Message in the 'templates' array must contain keys matching the values of the 'keys' array.
 */
function createInputFields(){
    infoForm.innerHTML = "";

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

/**
 * Replaces placeholder values in 'templates' message with input field values.
 */
function generateEmail(){
    const inputFields = Array.from(document.getElementsByClassName("inputField"));

    let message = templates[companySelection.selectedIndex-1].message;

    for(let i = 0; i < templates[companySelection.selectedIndex-1].keys.length; i++){
        message = message.replaceAll(templates[companySelection.selectedIndex-1].keys[i], inputFields[i].value);
    }
    emailBody.innerText = message;
}

populateCompanyDropdown();
