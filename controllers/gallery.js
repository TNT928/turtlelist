
const Turtle = require('../models/posts')
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name:'tnt928',
    api_key: '495494439284738',
    api_secret: process.env.Cloudinary_Secret
})


module.exports = {
    async getPosts(req, res, next){
       let posts = await Turtle.find({});
        res.render('posts/gallery', {posts})
    },

    newPet(req, res, next){
        res.render('posts/new');
    },

     async createPet(req, res, next){
         req.body.post.images= [];
       for(const file of req.files){
         let image =  await cloudinary.v2.uploader.upload(file.path);
        req.body.post.images.push({
            url: image.secure_url,
            public_id: image.public_id
        })
       }
        let turtle= await Turtle.create(req.body.post)
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
    // - find the post by id
    let post = await Turtle.findById(req.params.id);
    // - check if there's any images for deletion
    if(req.body.deleteImages && req.body.deleteImages.length){
        // 	- assign deleteImages from req.body to its own variable
        let deleteImages= req.body.deleteImages;
    // 	- loop over deleteImages
    for(const public_id of deleteImages){
    // 		- delete images from cloudinary
     await cloudinary.v2.uploader.destroy(public_id);
    // 		- delete image from post.images
    for(const image of post.images){
        if(image.public_id === public_id){
            let index = post.images.indexOf(image);
            post.images.splice(index, 1);
               
             }
        }
    }

    }
	
    // - check if there are any new images for upload
    if(req.files){
        // 	- upload images
        for(const file of req.files){
            let image =  await cloudinary.v2.uploader.upload(file.path);
            // 	add images to post.images array
            post.images.push({
               url: image.secure_url,
               public_id: image.public_id
           })
        }
    }
	
    // - update the post with any new properties 
    post.name = req.body.post.name;
    post.fee = req.body.post.fee;
    post.description = req.body.post.description;
    
    // - save the updated post into the db
    post.save();
	// - redirect to show page
      return res.redirect(`/gallery/pet/${post.id}`)
       
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

    async petDelete(req, res, next){

       let post = await Turtle.findById(req.params.id);
       for(const image of  post.images) {
       await cloudinary.v2.uploader.destroy(image.public_id);
        }
       await post.remove();
        res.redirect('/gallery')
    }
    
}