const mongoose=require("mongoose")

const personSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        },
        age:{
            type:Number,
        
        },
        work:{
            type:String,
            enum:['waiter','manager','chef'],
            required:true

        },
        mobile:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        address:{
            type:String,
       
        },
        Salary:{
            type:Number,
            
        }


    }
);

const person=mongoose.model('Person',personSchema);
module.exports=person;