const express = require(express);
const router = require(router);

app.get('/',()=>{
    res.render('gallery')
})

// form to submit pet
router.get('/adopt',(req, res)=>{
    res.render('/adopt')
})

// submission logic

router.post('/adopt',()=>{
    res.render('gallery')
})

// form to edit submission

router.get('/post/edit',(req, res)=>{
    res.render('/edit')
})

// edit submission logic
router.post('/post/edit',(req, res)=>{
    res.render('/')
})

// form to comment on pet
router.get('/')






module.exports(router);