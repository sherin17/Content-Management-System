const express = require('express')
const router = express.Router()
const users = require('../models/usersModel')
const jwt = require('jsonwebtoken')

// Adding new user
router.post('/',(req,res)=>{
    let Email = req.body.Email
    let Password = req.body.Password

    // Checking for registered user
    users.findOne({ Email : Email }).then((user)=>{

        if(user){
            // Checking password and creating token
            if(Password == user.Password){
                let payload = {
                    Subject : Email + Password
                }

                let token = jwt.sign(payload, 'secretkey')

                res.send({
                    loggedIn : true,
                    token : token,
                    name : user.Name,
                    email : user.Email,
                    userRole : user.UserRole
                })
            }
            else{
                res.send({
                    loggedIn : false,
                    message : 'Incorrect Password'
                })
            }
        }
        else{
            res.send({
                loggedIn : false,
                message : 'User not registered'
            })
        }
    })
})

module.exports = router