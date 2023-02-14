const express = require('express')
const router = express.Router()
const posts = require('../models/postsModel')

// Add new post
router.post('/', (req,res)=>{

    var newPost = {
        Title : req.body.Title,
        Author : req.body.Author,
        Content : req.body.Content,
        Category : req.body.Category,
        UserId : req.body.UserId,
        Date : req.body.Date
    }

    var newPost = new posts(newPost)
    newPost.save()

    res.send({message : "New Post created successfully",
                        status : 'success'})
})

// Edit post
router.put('/',(req,res)=>{
    id = req.body._id

    posts.findByIdAndUpdate({'_id':id},
                            {$set:{
                                'Category' : req.body.Category,
                                'Content' : req.body.Content,
                                'Title' : req.body.Title
                            }}).then(()=>{
                                res.send()
                            })
})

// Get a specific post
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id
    posts.find({ '_id' : id }).then((post)=>{
        res.send(post)
    })
})

// Get all posts of a user
router.get('/all/:user', (req,res)=>{
    posts.find({ UserId : req.params.user}).sort({ Date : -1 }).then((posts)=>{
        res.send(posts)
    })
})

// Get posts of a user by category
router.get('/:category/:user', (req,res)=>{
    posts.find({Category : req.params.category, UserId : req.params.user}).sort({ Date : -1 }).then((posts)=>{
        res.send(posts)
    })
})

// Get posts of a specific category
router.get('/:category',(req,res)=>{
    posts.find({ Category : req.params.category}).sort({ Date : -1 }).then((posts)=>{
        res.send(posts)
    })
})

// Get all posts of all users
router.get('/',(req,res)=>{
    posts.find().sort({ Date : -1 }).then((posts)=>{
        res.send(posts)
    })
})

// Delete a post
router.delete('/:id',(req,res)=>{
    id = req.params.id

    posts.findByIdAndDelete({'_id' : id})
    .then(()=>{
        res.send()
    })
})

module.exports = router