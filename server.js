//Dependencies
const path = require('path');
const express = require('express');
const routes = require('./controllers')
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');
//SQL session store using sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

//Set handlebars as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Create session and ID persists based on default
const ses = {
    //used to sign session ID cookie
    secret: 'good luck buttercup',
    cookie: {},
    //not saved back to session store
    resave: false,
    //unitialized = new but not modified
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(ses));

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