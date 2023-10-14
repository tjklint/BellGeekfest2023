import { templates } from "./data.js";

let emailOutput = document.getElementById("emailOutput");

let message = templates[0].message;
 
templates[0].keys.forEach(key => {
    message = message.replaceAll(key, ":3 :3 :3");
});

emailOutput.innerText = message;

console.log(templates);

