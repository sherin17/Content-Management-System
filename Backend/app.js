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
const registerRouter = require('./routers/registerRouter')
const loginRouter = require('./routers/loginRouter')
const usersRouter = require('./routers/usersRouter')
const roleChangeRouter = require('./routers/roleChangeRouter')
const categoriesRouter = require('./routers/categoriesRouter')
const postsRouter = require('./routers/postsRouter')

// Routes
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/users', usersRouter)
app.use('/changerole', roleChangeRouter)
app.use('/categories', categoriesRouter)
app.use('/posts', postsRouter)

app.listen( port, function(){
    console.log('Listening on PORT ' + port)
})
