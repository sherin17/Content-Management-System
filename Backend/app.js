const express = require('express')
const cors = require('cors')

const app = new express()
app.use(cors())
app.use(express.urlencoded( { extended : true } ))
app.use(express.json())

const port = 3000

// Connecting to Database

require('./middlewares/mongodb')


// Routers
const register = require('./routers/register')
const login = require('./routers/login')
const users = require('./routers/users')
const roleChange = require('./routers/RoleChange')
const categories= require('./routers/categories')
const blogs = require('./routers/blogs')

// Routes
app.use('/register', register)
app.use('/login', login)
app.use('/users', users)
app.use('/changerole', roleChange)
app.use('/categories', categories)
app.use('/posts', blogs)

app.listen( port, function(){
    console.log('Listening on PORT ' + port)
})
