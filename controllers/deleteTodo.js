
// import the models
const Todo=require("../models/Todo");
//route handler

exports.deleteTodo= async(req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            sucess:true,
            message:"todo deleted",
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )

    }
}