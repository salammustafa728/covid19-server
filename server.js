'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

require('dotenv').config();

const PORT= process.env.PORT;

const getAllData= require('./controller/cases.controller');

app.get('/',(req,res)=>{
    res.send('workinnnnnnnnnnnnnnnnnnnnnnnnnnnng!');
})

app.get('/allData',getAllData);

app.listen(PORT,()=>{
    console.log(`server working on ${PORT}`);
});