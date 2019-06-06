const User = require('../models/user');
const passport =  require('passport');



module.exports = {
   async postRegister(req, res, next){
       const newUser = new User ({
           username: req.body.username,
           email: req.body.email
        
          })
        await User.register( newUser, req.body.password);
        res.redirect('/');
          
        },

        postLogin(req, res, next){
            passport.authenticate('local', { 
                successRedirect: '/',
                failureRedirect: '/login'})(req, res, next);
        },

        getLogout(req, res, next){
                req.logout();
                res.redirect('/')
            },

        getHome(req, res, next){
        res.send('home page')
            
        },

        getSignup(req, res, next){
            res.send('sign up')
            },

        getLogin(req, res, next){
            res.send('login page')
                // res.render('login')
            
        }
        
        
}