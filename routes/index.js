const express = require("express");
const router = express.Router();
const {postRegister,postLogin, getLogout, getHome,getSignup, getLogin} = require('../controllers/index');
const {errorHandler} = require('../middleware')

// get home page
router.get('/', getHome)

// ==============================

// sign up 
router.get('/signup',getSignup)

// logic
router.post('/signup', errorHandler(postRegister))

// ====================


// login to home page
router.get('/login',getLogin)

// logic for login
router.post('/login',postLogin);

// logout
router.get('/logout',getLogout)













module.exports= router;