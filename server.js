'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

require('dotenv').config();

const PORT= process.env.PORT;

const {getData,getAllData}= require('./controller/cases.controller');



app.get('/',(req,res)=>{
    res.send('workinnnnnnnnnnnnnnnnnnnnnnnnnnnng!');
})

// app.get('/art',getArtic);
app.get('/cases',getData);
app.get('/allData',getAllData);

// mongoose.connect(process.env.MONGO_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true }
// );



//////////////////////////////////////////

// create new fav art
// app.post('/addcase',createCase);

//  get fav art
// app.get('/getFavCases',getFavCases);

// delete fav art
// app.delete('/deleteFavCases/:id',deleteFavCase);

////////////////////////////////////////

app.listen(PORT,()=>{
    console.log(`server working on ${PORT}`);
});