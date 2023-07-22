// import the models
const Todo=require("../models/Todo");
//route handler

exports.createTodo= async(req,res)=>{
    try{
        //fetch the data fro, request 

        const{title,description} =req.body;
        //create new todo object and inset in db
        const response= await Todo.create({title,description});

        //send a jsomn responce with a sucess flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
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