const express = require('express');
const router = express.Router();
const multer= require('multer');
const upload = multer({'dest': 'uploads/'});
const {errorHandler} = require('../middleware')
const {
    getPosts,
    newPet, 
    createPet, 
    editPet,
    petUpdate, 
    petComment,
    postComment,
     editComment,
    edit_pet_comment,
    viewPet,
    petDelete
}= require('../controllers/gallery')





// pet gallery================
router.get('/',errorHandler(getPosts))

// ==================================
// form to submit pet
router.get('/adopt',newPet)

// logic

router.post('/',upload.array('images', 4), errorHandler (createPet));

// show pet
router.get('/pet/:id',errorHandler (viewPet))
// ===================================
// form to edit submission

router.get('/pet/:id/edit', errorHandler (editPet))

//  logic
router.put('/pet/:id',upload.array('images', 4), errorHandler (petUpdate))

router.delete('/pet/:id', errorHandler(petDelete))
// ===========================================
// form to comment on pet
router.get('/pet/:id/comment',petComment);

// logic
router.post('/pet/:id/comment',postComment);

// =============================
// form to edit comment on pet
router.get('/pet/:id/comment/edit',edit_pet_comment)

// logic
router.put('/pet/:id/comment/edit', editComment)
// ===========================================









module.exports= router;