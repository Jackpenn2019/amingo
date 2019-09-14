const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const User = require('./models/User');
//const router = express.Router();

//database connection details
const db = "mongodb+srv://kibet:isaiah@cluster0-tjbew.mongodb.net/test?retryWrites=true&w=majority"

//to connect to database
mongoose.connect(db, {}).then(() => console.log("DB connected")).catch(err => console.log(err));

const app = express();
//configure body parser
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.urlencoded({extended: false}));
/**
 * post route for register a new user
 * 
 * @name POST /users/register
 * 
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {name} name - of the user
 **/
//User routes
const userRoutes=  require('./routes/User');
app.use('/users', userRoutes);


//Homepage
app.get('/', (req, res) => res.json({
    msg: 'hello amingo'
}));
//About
app.get('/about', (req, res) => res.json({
    msg: 'this is the about page',
    meaning: 'hello',
    more: 'yeey this text is formatted'
}

)

)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}`));

//mongodb+srv://kibet:isaiah@cluster0-tjbew.mongodb.net/test?retryWrites=true&w=majority