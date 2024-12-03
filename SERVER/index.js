let express = require('express')
let mongoose = require('mongoose')
let userRoutes = require("./routes/user")
let loginRoutes = require('./routes/login')
let restroRouter = require('./routes/restaurant')
let productsRouter = require('./routes/products')
let cors = require('cors')  
mongoose.connect('mongodb://127.0.0.1:27017/Zomato')
    .then(() => {
        console.log('Db start');
    }).catch(() => {
        console.log('error');
    })
let app = express()
app.use(express.json())
app.use(cors())
    // app.use(express.urlencoded({ extended: true }))
app.use('/api', userRoutes)
app.use('/api', loginRoutes)
app.use('/api', restroRouter)
app.use('/api', productsRouter)
let port = 7000 
app.listen(port, () => {
    console.log(`server start ${ port }`);
})
