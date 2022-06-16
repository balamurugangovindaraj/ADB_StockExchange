const express= require('express');
const app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://node-api:1234@srh-adb-01.inyaq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Database Connected')
}).catch(err=> {
     console.log('Database not connected'+err)
});
