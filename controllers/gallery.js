
const Turtle = require('../models/posts')


module.exports = {
    async getPosts(req, res, next){
       let posts = await Turtle.find({});
        res.render('posts/gallery', {posts})
    },

    newPet(req, res, next){
        res.render('posts/new');
    },

     async createPet(req, res, next){
        //   res.send('new pet created')
        let turtle= await Turtle.create(req.body)
        res.redirect(`/gallery/pet/${turtle.id}`)
    },

    async viewPet(req, res, next){
        let post = await Turtle.findById(req.params.id);
          res.render('posts/show',{post})
      },

     async editPet(req, res, next){
         let post = await Turtle.findById(req.params.id);
         res.render('posts/edit', {post})
       
    },

   async petUpdate(req, res,next){
      let post = await Turtle.findByIdAndUpdate(req.params.id, req.body.post);
      return res.redirect(`/gallery/pet/${post.id}`)
        res.send('edit pet route')
        // res.render('/edit')
    },

    petComment(req, res, next){
        res.send('edit pet route')
        // res.render('/edit')
    },

    postComment(req, res){
        res.send('edit pet route')
        // res.render('/edit')
    },

    editComment(req, res,next){
        res.send('edit pet route')
        // res.render('/edit')
    },

    edit_pet_comment(req, res, next){
        res.send('edit comment form')
    },

   
    
    
}