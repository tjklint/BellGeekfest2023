# BellGeekfest2023

This repository contains the solution for our team: ":3" for the Bell Geekfest Hackathon in 2023. The link to the hackathon can be found __[here](https://challenges.hackworks.com/event/bell-geekfest-hackathon-2023-quebec)__.


## About PrivacyXPresso

The goal of our project, PrivacyXpresso allows you to take back your data from big companies that hoard your information by exercising your rights for them to delete it. Frequently in the news you see reports of very large companies suffering __[catastrophic data breaches.](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2022/nr-c_220601/)__ Our project seeks to allow users to prevent these issues from effect themselves.

PrivacyXPresso is simple to use, accessible and innovative with all the tools to boost your online security with the click of a few buttons. _Nothing_ is stored on our backend, everything is done locally on your computer after loading up the webpage.

Currently, we only support 5 companies, but we have made it really easy for others to add companies on to our project, which will be explained later. 

## How to Use PrivacyXPresso's Features

To run this project, clone the repo and run it with the local server extension on VSCode.

- __DataEraseX:__ This feature allows you to select a company, and enter in only the required information. Simply click enter and an email will be formatted, alongside a subject and email of the company you need to send it to. 

<img height="300" width="auto" alt="DataEraseX Demo" src="https://github.com/tjklint/BellGeekfest2023/blob/main/Images/DataEraseX.gif?raw=true">


- __Password Checker:__ Our password checker allows you to verify how secure your password is from bruteforce attacks. It allows you to verify how susceptible your password to beginner, intermediate, and advanced hackers/organizations. Additionally, it verifies you password against a dictionary of a few thousand words.

<img height="300" width="auto" alt="Password Checker Demo" src="https://github.com/tjklint/BellGeekfest2023/blob/main/Images/PasswordTester.gif?raw=true">

## Our Team:
- [Griffin Bonomo-Clough](https://github.com/GriffinBonomo)
- [Timothy Klint](https://github.com/tjklint)
- [Dylan Savelson](https://github.com/DylanSavelson)

## How to Contribute:

Contributing companies to the project has been made really easy. Make a fork of the repository, then simply write an email. Where a user inputted field is required, make it a key and a field name, from there everything else is done for you. An example from spotify is below:

```
name: "Spotify",
        message: 
        // Email would go here.
        Sincerely\,\n\
        [Full_Name], [Email_Address]",
        keys: ["[Email_Address]", "[Spotify_Account_Id]", "[Spotify_Username]", "[Full_Name]"],
        fieldNames: ["Email Address", "Spotify Account Id", "Spotify Username", "Full Name"],
```

> Note: It's can be very difficult to find the required emails of certain companies, and what information they collect and can delete. It's important to thoroughly review these privacy policies.

