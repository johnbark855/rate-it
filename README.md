![GitHub License](https://img.shields.io/badge/MIT-License-informational) ![GitHub License](https://img.shields.io/badge/Node-JavaScript-informational) ![GitHub License](https://img.shields.io/badge/Sequelize-Database-informational) ![GitHub License](https://img.shields.io/badge/Express-Server-informational) ![GitHub License](https://img.shields.io/badge/MySQL2-Database-informational) ![GitHub License](https://img.shields.io/badge/Handlebars-HTML-informational)

# Rate-IT

## Table of Contents

- [Description](#description)
- [Deployed Application](#deployed-applicaiton)
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

```bash
├── .env
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .travis.yml
├── LICENSE
├── README.md
├── config
│   └── config.js
├── models
│   ├── index.js
│   └── items.js
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   └── main.css
│   └── js
│       └── main.js
├── routes
│   ├── api-routes.js
│   └── html-routes.js
├── server.js
└── views
    ├── index.handlebars
    ├── layouts
    │   └── main.handlebars
    └── partials
        ├── footer.handlebars
        └── nav.handlebars
```

### File Descriptions

1. Main Directory RATE-IT

- .env (environmental variables)
- .eslintignore (lint ignore)
- .eslintrc.json (lint configuration)
- .gitignore (git ignore)
- .travis.yml (travis-ci configuration)
- LICENSE (MIT license)
- config directory
  - config.json (database access configuration for development, test, and production instances)
- models directory
  - index.js (JavaScript code to envokes sequelize to compare user input with database)
  - items.js (JavaScript code to envoke Sequelize to creating the data types)
- package.json (Node configuration list program details, scripts, license,and dependencies packages)
  - public directory
    - css directory
      - main.css (css configuration for rating star color)
    - js directory
      - main.js (JavaScript code that gets input from the html forms to store
        and delete the data.)
  - routes directory
    - api-routes.js (JavaScript code for API gets, creates, and deletes user input)
    - html-routes.js (JavaScript code that gets all the data and re-renders it on the webpage)
  - server.js (JavaScript code that envokes and establishes the express service
    session connection and diplays the webpages via html-routes.js and api-routes.js files)
  - views
    - layouts
      - main.handlebars (main/base HTML webpage)
    - partials
      - footer.handlebars (footer for main/base HTML webpage)
      - nav.handlebars (navigation bar for main/base HTML webpage)
    - index.handlebars (body of webpage that user content is added and removed)

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
5. Start server run "start" to envoke node server.js in terminal

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

MIT License

Copyright (c) 2021 Luca Pizzoferrato

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
