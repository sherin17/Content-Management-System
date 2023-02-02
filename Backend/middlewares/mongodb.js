//mongoDB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Sherin17:Reenijiji1@cluster0.quvjjgb.mongodb.net/ContentManagementSystem?retryWrites=true&w=majority')
. then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})