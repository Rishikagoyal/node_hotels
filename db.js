//import mongoose
const mongoose=require('mongoose');

//url for connection
const url=process.env.DB_URL;

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