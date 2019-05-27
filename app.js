const express= require("express")
const app= express();
const bodyParser=require('body-parser');
const port =3000;
require('dotenv').config()

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


const index= require('./routes/index')
const gallery = require('./routes/gallery');
const contact = require('./routes/contact');





app.use('/index', index)

app.use('/gallery', gallery)

app.use('/contact', contact)

app.listen(3000,()=>{
    console.log('SERVER RUNNING')
})