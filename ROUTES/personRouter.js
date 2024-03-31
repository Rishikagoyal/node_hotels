const express= require('express');
const router=express.Router();
const person =require('./../models/person');
//person router
router.post('/',async (req,res)=>{

    try{
        const data= req.body;
        const newPerson= new person(data);
    
        const response= await newPerson.save();
        console.log('data.saved');
        res.status(200).json(response);
  

    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/',async(req,res)=>{
    try{

        const data=await person.find();
        console.log('data fetched');
        res.status(200).json(data);


    }catch(err){
           console.log(err);
    }
})

router.get('/:workType',async(req,res)=>{
    try{
     
        const workType= req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager')
        {
            const response= await person.find({work:workType});
            console.log("response fetched");
            res.status(200).json(response);
        }

    }catch(err)
    {
         res.status(400).json({error:"Internal server error"});
    }
})

router.put('/:id',async(req,res)=>{
    try{

        const personId= req.params.id;
        const updatedData= req.body;

        const response= await person.findByIdAndUpdate(personId, updatedData,{
            new:true,
            runValidators:true
        })

        if(!response)
        {
            return res.status(404).json({error:"Person not found"});
        }
        else
        {
            console.log("Data updated successfully!");
            return res.status(200).json(response);
        }

    }
    catch(err)
    {
        res.status(400).json({error:"Internal server error"});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;

        const response = await person.findByIdAndDelete(personId);

        if(!response)
        {
            console.log("No data found");
            return res.status(404).json(response);
        }
        else
        {
            console.log("data deleted successfully!");
            return res.status(200).json(response);
        }
    }
    catch(err)
    {
        return res.status(400).json({error:"Internal server error!"});
    }
})

module.exports=router;
