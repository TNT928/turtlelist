const express = require('express');
const Post = require('../models/gallery')


module.exports = {
    async getPosts(req, res, next){
       let posts = await Post.find({});
        res.render('posts/gallery', {posts})
    }
}