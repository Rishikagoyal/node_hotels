//import mongoose
const mongoose=require('mongoose');

//url for connection
const url= 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to mongodb");
})

db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
});

db.on('error',()=>{
    console.log("error in connection");
})

module.exports=db;