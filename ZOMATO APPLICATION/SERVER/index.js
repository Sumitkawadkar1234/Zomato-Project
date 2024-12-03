
const express = require("express");
const mongoose = require('mongoose');
let restroRoutes= require('./routes/restaurant')
let productRoutes= require('./routes/products')
let userRoutes = require('./routes/user');
let loginRoutes = require("./routes/login");
let paymentRoutes = require('./routes/payment')
const cors = require('cors');
const ratingRoutes = require('./routes/rating');

mongoose.connect("mongodb://127.0.0.1:27017/zomatofsd5",{
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', userRoutes);
app.use('/', loginRoutes);
app.use('/', restroRoutes);
app.use('/', productRoutes);
app.use('/', paymentRoutes);
app.use('/', ratingRoutes);

let port=7000

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})