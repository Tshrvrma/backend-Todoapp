// import the models
const Todo=require("../models/Todo");
//route handler

exports.updateTodo= async(req,res)=>{
    try{
        const {id} = req.params;
        const{title,description}=req.body;

        const todo=await Todo.findByIdAndUpdate(
            
               { _id:id},
               {title,description,updatedAt:Date.now()}
            
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:`Updated Sucessfully`
        })

       
    }
    catch(err){
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })

    }
}