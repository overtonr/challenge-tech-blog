//Dependencies
const path = require('path');
const express = require('express');
const routes = require('./controllers')
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');

//Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

//Set handlebars as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//Sends data to server (POST & PUT)
//recognize incoming req obj as json obj
app.use(express.json());
//recognize incoming req obj as string or arrays
app.use(express.urlencoded({ extended: true }));

//Serves static files using built-in express middleware
app.use(express.static(path.join(__dirname, 'public')));

//Turn on routes
app.use(routes);


//Connection to the db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`))
});