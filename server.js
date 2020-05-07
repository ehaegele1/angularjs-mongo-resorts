const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const db = 'mongodb+srv://ehaegele:haegele1@cluster0-9jarg.mongodb.net/test?retryWrites=true&w=majority'
// ======middleware=====
app.use(express.json());
app.use(express.static('public'));


//CONTROLLERS
const resortsController = require('./controllers/resorts.js');
app.use('/resorts', resortsController);

//


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});


app.listen(process.env.PORT, () => {
    console.log(`listening on port`);
})
