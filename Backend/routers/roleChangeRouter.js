const express = require('express')
const router = express.Router()
const users = require('../models/usersModel')

// Change user role
router.put('/',(req,res)=>{
    id = req.body._id
    role = req.body.UserRole

    if(role === 'User'){
        users.findByIdAndUpdate({'_id':id},
                                {$set:{
                                    "UserRole" : 'Admin'
                                }})
                                .then(()=>{
                                    res.send()
                                })
    }
    else if(role === 'Admin'){
        users.findByIdAndUpdate({'_id':id},
                                {$set:{
                                    "UserRole" : 'User'
                                }})
                                .then(()=>{
                                    res.send()
                                })
    }
})

module.exports = router