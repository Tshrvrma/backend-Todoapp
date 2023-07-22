const Todo=require('../models/Todo');



exports.getTodo=async(req,res)=>
{
    try{
        //fetch all todo items from  
        const todos=await Todo.find({});
        //response update 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched"
        })
    }
    catch(err)
    {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })
    }
}


exports.getTodoById=async(req,res)=>
{
    try{
        //extract todo item by id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})

        if(!todo)
        {
            return res.status(404).json(
                {
                    success:false,
                    message:"NO data found with given id",
                }
            )
        }
        //data for given id found
        return res.status(404).json(
            {
                success:true,
                data:todo,
                message:`todo ${id} succefully found`,
            }
        )
    }
    catch(err)
    {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })

    }
}