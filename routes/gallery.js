const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middleware')
const {getPosts}= require('../controllers/gallery')



// pet gallery================
router.get('/',errorHandler(getPosts))

// ==================================
// form to submit pet
router.get('/adopt',(req, res)=>{
    res.send('adopt')
    // res.render('/adopt')
})

// logic

router.post('/adopt',(req, res)=>{
    res.send()
})
// ===================================
// form to edit submission

router.get('/pet/:id/edit',(req, res)=>{
    res.send('edit pet route')
    // res.render('/edit')
})

//  logic
router.put('/pet/:id/edit',(req, res)=>{
    res.send('edit pet logic')
    // res.render('/')
})
// ===========================================
// form to comment on pet
router.get('/pet/:id/comment',(req, res)=>{
    res.send('comment ')
    // res.render('comment')
});

// logic
router.post('/pet/:id/comment',(req, res)=>{
    res.send('comment on pet route')
    // res.render('comment')
});

router.put('/pet/:id/comment/edit', (req, res)=>{
    res.send('edit route')
})
// ===========================================
// view pet
router.get('/pet/:id',(req, res)=>{
    res.send('view pet route')
    // res.render('/pet/id')
})






module.exports= router;