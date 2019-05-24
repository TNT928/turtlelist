const express= require("express")
const app= express();
const bodyParser=require('body-parser');
const port =3000;
require('dotenv').config()

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


const home= require('./routes')





app.use('/home', home, ()=>{
    res.send('Hello from home')
})

app.use('/gallery', ()=>{
    res.send('Hello from home')
})

app.use('/contact', ()=>{
    res.send('Hello from home')
})


app.listen(3000,()=>{
    console.log('SERVER RUNNING')
})