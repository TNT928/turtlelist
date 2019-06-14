const express= require("express")
const app= express();
const bodyParser=require('body-parser');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/user')
const index= require('./routes/index')
const gallery = require('./routes/gallery');
const contact = require('./routes/contact');
const methodOverride = require('method-override')
require('dotenv').config()
const port =3000;


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(methodOverride('_method'));



// configure passport and sessions
app.use(session({
    secret: 'bane beat batman',
    resave: false,
    saveUninitialized: true,
    }))
  
    app.use(passport.initialize());
    app.use(passport.session());
  
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

//   =====================================


// connect to database
mongoose.connect('mongodb://localhost:27017/turtlefarm', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
  console.log("we're connected!")
});


app.use('/', index)

app.use('/gallery', gallery)

app.use('/contact', contact)

app.listen(3000,()=>{
    console.log('SERVER RUNNING')
})