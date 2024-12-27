# Express EJS

## Setting Up
    -   Installation
        -   Create a repo
        -   npm init -y
        -   npm install express ejs
    -   Change some in package.json
        -   "Scripts": {
                "start": "node app",
                "dev": "node --watch app"
            }
        -   "main": "app.js",
        -   "type": "module",
    -   Create app.js and add setting up codes there
    -   Create 'views' folder and include index.ejs file with html boiler plate
    -   Run npm run dev and see the output

## Update the app
    -   Add 2nd argument as object to the app
    -   Update ejs file with ejs syntax
    -   Add an array to the app
    -   Update the array to display as list in the ejs

## Add partials under views
    -   Create 'partials' folder under the 'views'
    -   Create header.ejs, etc.
        -   Include this in the app