'use strict';

const axios= require('axios');

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
    module.exports=getAllData;