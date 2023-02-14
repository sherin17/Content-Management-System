const express = require('express')
const router = express.Router()
const categories = require('../models/categoriesModel')
const posts = require('../models/postsModel')

// Add category
router.post('/',(req,res)=>{
    categories.findOne({Name : req.body.category}).then((category)=>{

        if(category){
            res.send({message : 'Category already exists',
                        staus : 'fail'})
        }

        else{
            var newCategory = {
                Name : req.body.category
            }

            var newCategory = new categories(newCategory)
            newCategory.save()

            res.send({message : "Category added successfully",
                        status : 'success'})
        }
    })
})

// Get specific category
router.get('/:id', (req,res)=>{
    categories.findById(req.params.id).then((category)=>{
        res.send(category)
    })
})

// Get all categories
router.get('/',(req,res)=>{
    categories.find().then((categories)=>{
        res.send(categories)
    })
})

// Edit category
router.put('/', (req,res)=>{
    id = req.body._id
    oldName = req.body.oldName
    categories.findByIdAndUpdate( id, {
        Name : req.body.Name
    }).then(()=>{
        posts.updateMany({ Category : oldName },
            { Category : req.body.Name }, ()=>{
                res.send()
            })

    })
})

// Delete category
router.delete('/:id',(req,res)=>{
    id = req.params.id
    categories.findByIdAndDelete({_id : id}).then(()=>{
        res.send()
    })
})

module.exports = router