const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('gallery')
    // res.render('gallery')
})

// form to submit pet
router.get('/adopt',(req, res)=>{
    res.send('adopt')
    // res.render('/adopt')
})

// submission logic

router.post('/adopt',(req, res)=>{
    res.send('post gallery')
    // res.render('gallery')
})

// form to edit submission

router.get('/pet/_:id/edit',(req, res)=>{
    res.send('edit pet route')
    // res.render('/edit')
})

// edit submission logic
router.put('/pet/_:id/edit',(req, res)=>{
    res.send('edit pet logic')
    // res.render('/')
})

// form to comment on pet
router.get('/pet/_:id/comment',(req, res)=>{
    res.send('comment ')
    // res.render('comment')
});

// form logic to comment on pet
router.put('/pet/_:id/comment',(req, res)=>{
    res.send('comment on pet route')
    // res.render('comment')
});

// view pet
router.get('/pet/_:id',(req, res)=>{
    res.send('view pet route')
    // res.render('/pet/id')
})






module.exports= router;