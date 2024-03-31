const mongoose=require('mongoose');

const findHotel=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        place:{
            type:String,
            required:true,
            unique:true,
        }
    }
);
const hotels= mongoose.model('hotel',findHotel);
module.exports=hotels;