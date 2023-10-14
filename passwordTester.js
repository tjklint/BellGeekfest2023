import { commonPasswords } from "./commonPasswords.js";

const passwordField = document.getElementById("passwordField");
const resultsText = document.getElementById("results");
const tipsList = document.getElementById("tipsList");
const hackerLevel = document.getElementById("hackerLevel");

passwordField.addEventListener("input", () => {displayPasswordResults(passwordField.value)});
hackerLevel.addEventListener("change", () => {displayPasswordResults(passwordField.value)});

const hackerTiers = [10000, 1000000, 1000000000]; // Passwords cracked per second

const complexityTiers = {
    numbers: 10,
    lowerCase: 26,
    upperCase: 26,
    specialCharacters: 40,
}

function calculatePasswordStrength(password){
    const crackingRate = hackerTiers[hackerLevel.selectedIndex];
    const length = password.length;
    let combinationsPerChar = 0;

    if(/[a-z]/.test(password)){
        //console.log("lower case");
        combinationsPerChar += complexityTiers.lowerCase;
    }
    if(/[A-Z]/.test(password)){
        //console.log("upper case");
        combinationsPerChar += complexityTiers.upperCase;
    }
    if(/\d/.test(password)){
        //console.log("numbers");
        combinationsPerChar += complexityTiers.numbers;
    }
    if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
        combinationsPerChar += complexityTiers.specialCharacters;
    }

    const totalCombinations = Math.pow(combinationsPerChar, length);
    const timeToCrack = Math.round(totalCombinations / crackingRate);

    return timeToCrack;
}

function displayPasswordResults(password){
    let timeToCrack = calculatePasswordStrength(password);

    let timeUnits = {
        seconds: {name: "seconds", amountToNext: 60},
        minutes: {name: "minutes", amountToNext: 60},
        hours: {name: "hours", amountToNext: 24},
        days: {name: "days", amountToNext: 7},
        weeks: {name: "weeks", amountToNext: 52},
        years: {name: "years", amountToNext: 10000},
    };
    const timeMeasurements = [
    timeUnits.seconds,
    timeUnits.minutes,
    timeUnits.hours,
    timeUnits.days,
    timeUnits.weeks,
    timeUnits.years];

    let timeUnit = 0;
    if(commonPasswords.includes(password)){
        timeToCrack = 0;
    }
    else{
        for(timeUnit = 0; timeUnit < timeMeasurements.length-1; timeUnit++){
            console.log(timeUnit);
            console.log(timeToCrack);
            if(timeToCrack > timeMeasurements[timeUnit].amountToNext){
                timeToCrack /= timeMeasurements[timeUnit].amountToNext;
            }
            else{
                break;
            }
        }
    }
    
    timeToCrack = Math.round(timeToCrack);

    resultsText.innerText = `It would take a ${hackerLevel.value}, ${timeToCrack} ${timeMeasurements[timeUnit].name} to hack your password`;
}