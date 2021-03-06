# Getting Started Lotto Lookup
Tests scrips can be run from the appui directory using JEST:
cd/appui
npm tests

API ENDPOINT:
Raw Data API can be found here:
/expressindex


# Stack description:
This application uses the following:
React Frontend - Scaffolding via [create-react-app] (https://github.com/facebook/create-react-app)
Technologies used in the FrontEnd include:
-create react app
-react router
-react bootstrap via npm install react-bootstrap 
-styled components

Express Middleware - Scaffolding via [express-generator] (https://expressjs.com/en/starter/generator.html)
Technologies used in the Express middleare include:
-express-generator framework
Testing dependencies: jest - supertest - cross-env
npm install jest --save-dev
npm install supertest --save-dev
npm install cross-env --save-dev

Postgres Database
Using: https://node-postgres.com/


# Installation
Node.js is required to run this application, as well as a database (Postgres is assumed)
DB configuration is done via the config.js file at the root directory.

This application is comprised of two layers: the React front end and the Express middle teir.
This has been optimized to run on a Heroku platform. More on this later.

To deploy this app in a hot reloadable dev environment, you want to first stand up the express
middle ware by running npm run in the root directory. This will start up the middle application
on port:3000 by default

The next step would be to run the react frontend via: cd appui --> npm run. Accept the recommended
port: 3001
This will start up the UI on port 3001. Middleware calls are proxied to 3000. See appui/package.json

To deploy this app in a production environment, you want to first run 'npm run build' from the root 
directory. See /package.json --> scrpts: for more detail. This is package the ui application and run 
it along with the middlware all on port 3000.