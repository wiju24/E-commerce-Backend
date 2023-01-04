# E-commerce Backend Application

## Description

This application allows the simplicity of generating a profile page for your company just by answering straight forward questions using some of the software that will be discussed later on. With the use of Node.js and the Inquirer package, it will prompt users to input information regarding their employees or themselves and submit to be generated into a HTML profile page. Once everything has been filled out successfully, the page will automatically be generated at the user's disposal.

## Table of Contents

* User Story
* Acceptance Criteria
* Mock Up
* Getting Started & Installation
* Test
* Socials

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The youtube link, attached in the following section (Getting Started & Installation) is the mockup of how the backend of the application is ran.

## Getting Started & Installation

To get started with the application,  make sure you have the latest version of Node installed.

Following the installation of Node, clone this repository to the local server to begin generating the Profile page.

Once the repository has been connected, install the following packages in the terminal:
```
npm i mysql2@2.3.3 sequelize@6.28.0 express@4.18.2 dotenv@16.0.3
```
After installation of the packages, in the same terminal, run the application by typing:

```
npm start
```

Make sure you have Insomnia and mySqlworkbench installed on the desktop. The following youtube link will go over how to connect to the database and run the routes.

```
https://youtu.be/_anTh3vl8VI
```

## Test
First run: 
```
npm start
```

Then run:
```
npm run seed
```

## Socials

For details regarding the specific application, proceed to the repository: https://github.com/wiju24/Profile-Generator 

For details regarding the Github profile, click on the link: https://github.com/wiju24

For any questions or concerns, do not hesitate to email: vijithiran_navajeevayokan@hotmail.com