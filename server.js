const express=require('express');
const app= express();
const db=require('./db');
const menu=require('./models/menu');
const hotel=require('./models/hotels');
require('dotenv').config();

const bodyParser= require('body-parser');
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("Welcome to my first server");
})




const personRoutes=require('./ROUTES/personRouter');
app.use('/person',personRoutes);

const menuRoutes=require('./ROUTES/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});
