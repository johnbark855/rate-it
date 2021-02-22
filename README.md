![GitHub License](https://img.shields.io/badge/MIT-License-informational) ![GitHub License](https://img.shields.io/badge/Node-JavaScript-informational) ![GitHub License](https://img.shields.io/badge/Sequelize-Package-informational) ![GitHub License](https://img.shields.io/badge/Express-Server-informational) ![GitHub License](https://img.shields.io/badge/MySQL2-Database-informational) ![GitHub License](https://img.shields.io/badge/Handlebars-informational)

# Rate-It

---

## Table of Contents

- [Description](#description)
- [Site Structure](#site-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#question)
- [License](#license)

---

## Description

This program is a simple and intuitive rate it application. Enter any movie, restaurant, or product and give it a rating from 1 (bad) to 5 (great).

## Site Structure

|-- config
|   `-- config.js
|-- models
|   |-- index.js
|   `-- items.js
|-- public
|   `-- js
|       `-- main.js
|-- routes
|   |-- api-routes.js
|   `-- html-routes.js
|-- views
|   |-- layouts
|   |   `-- main.handlebars
|   |-- partials
|   |   |-- footer.handlebars
|   |   `-- nav.handlebars
|   `-- index.handlebars
|-- LICENSE
|-- package.json
|-- package-lock.json
|-- README.md
`-- server.js

### File Descriptions

    1. Develop Directory - contains the html and Javascript files to run the authentication program

        * config directory
            - middleware directory
                * config.json file (database access configuration for development, test, and
                                     production instances)
        * models directory
                * index.js file (JavaScript code to envokes sequelize to compare user input with database)
                * items.js file (JavaScript code to envoke Sequelize to creating the data types)
        * public directory
            - js directory
                * main.js file (JavaScript code that gets input from the html forms to store
                                and delete the data.)
        * routes directory
            - api-routes.js file (JavaScript code for API gets, creates, and deletes user input)
            - html-routes.js file (JavaScript code that gets all the data and re-renders it on the webpage)
        * views
            - layouts
                * main.handlebars (main/base HTML webpage)
            - partials
                * footer.handlebars (footer for main/base HTML webpage)
                * nav.handlebars (navigation bar for main/base HTML webpage)
            - index.handlebars (body of webpage that user content is added and removed)
        * package.json file (Node configuration file list program details, scripts, license,
                             and dependencies packages)
        * server.js file (JavaScript code that envokes and establishes the express service
                          session connection and diplays the webpages via html-routes.js and api-routes.js files)

---

## Installation

    1. Create this repostiory by using the GitHub forking process onto your computer
    2. Install NPM the Node Project Manager to your program directory
    3. Install dependecies to your program directory (npm install "package name"):
        - Node
        - Nodemon
        - Express
        - Eslint
        - MySQL2
        - Handlebars
        - Sequelize
    4. Watch server run "watch" to enable nodemon server.js for testing
    6. Start server run "start" to envoke node server.js in terminal

---

## Usage

This program is designed to users to add content and rate it on a scale from bad 1 to 5 great.

Start the program with the following command "npm start".

---

## Contributing

GitHub Username - lucpizz

Please list your name here if you are contributing to this project.

---

## Questions

Please contact me at lucpizz@gmail.com for any questions regarding this program.

---

## License

ISC License

Copyright (c) 4-digit year, lucpizz

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Source: http://opensource.org/licenses/ISC
