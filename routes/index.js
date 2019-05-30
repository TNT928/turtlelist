const express = require("express");
const router = express.Router();
const passport = require('passport')
const {postRegister} = require('../controllers/index');
const {errorHandler} = require('../middleware')

// get home page
router.get('/', (req, res)=>{
    res.send('home page')
    // res.render('/home');
})

// ==============================

// sign up 
router.get('/signup', (req, res)=>{
    res.send('sign up')
})

// logic
router.post('/signup', errorHandler(postRegister))

// ====================


// login to home page
router.get('/login',(req, res)=>{
    res.send('login page')
    // res.render('login')
})

// logic for login
router.post('/login',passport.authenticate('local',
    { 
    successRedirect: '/',
    failureRedirect: '/login' }));

// logout
router.get('/logout',(req, res)=>{
    // res.send('log out route')
    req.logout();
    res.redirect('/')
})













module.exports= router;