const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');


require('dotenv').config();
require('./Models/db');

app.get('/ping' , (req , res)=>{
    res.send("PING");
})

app.use(bodyParser.json());
app.use(cors());

app.use('/auth' , AuthRouter);




const Port = process.env.Port || 5050;
app.listen(Port ,()=>{
    console.log("Port Connected to : " );
})
