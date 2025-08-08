const express = require('express');
const app=express();
const cors= require('cors');

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET,POST'],
    credentials:true
}));
app.use(express.json());
const aiRoutes = require('./routes/ai.routes');


app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/ai', aiRoutes);
module.exports= app;