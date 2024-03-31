const express=require('express');
const router=express.Router();

const menu=require("./../models/menu");

router.post('/',async(req,res)=>{

    try{
        const data= req.body;
        const newMenu= new menu(data);

        const response =await newMenu.save(data);
        console.log("menu data saved successfully!");
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

});
router.get('/',async(req,res)=>{

    try{
        const data= await menu.find();
        console.log("menu data fetched successfully!");
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

});


module.exports= router;
