const mongoose = require('mongoose');
const mongo_url = process.env.databaseString;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("MongoDb Connected");
    }).catch((err)=>{
        console.log('MongoDb connection error' , err); 
    })