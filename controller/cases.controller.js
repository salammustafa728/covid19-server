'use strict';

const axios= require('axios');
const { response } = require('express');

const getData = async (req,res)=>{
    const country = req.query.country;
    // const deaths = req.query.deaths;
    const artUrl = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`
 axios.get(artUrl).then(response=>{
    res.send(response.data);
 }).catch(error=>{
    console.log('==================');
     console.log('an error occurred');
     console.log(error);
     console.log('==================');
 });
    }
    const getAllData = async (req,res)=>{
        const artUrl = `https://api.covid19api.com/summary`
     axios.get(artUrl).then(response=>{
    
        res.send(response.data.Countries);
        console.log('data',response);
     }).catch(error=>{
        console.log('==================');
         console.log('an error occurred');
         console.log(error);
         console.log('==================');
     });
     
        }
    module.exports={getData,getAllData};