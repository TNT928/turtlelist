const express=require(express);
const router = require(router)

// get home page
router.get('/', (req, res)=>{
    res.send('home page')
    // res.render('/home');
})

// login to home page
router.get('/login',()=>{
    res.send('login page')
    // res.render('login')
})

// logic for login
router.post('/login',(req, res)=>{
    res.send('login logic')
    // successRedirect:('/home')
    // failureRedirect:('/login')
  
})

// logout
router.get('/logout',(req, res)=>{
    res.send('log out route')
    // req.logout();
    // res.redirect('/home')
})











module.exports(router)