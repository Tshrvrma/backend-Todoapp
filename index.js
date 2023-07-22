 const express=require('express');
 const app=express();


//load cofig from env file 
require("dotenv").config();


const PORT=process.env.PORT || 4000

//middleare to parsee json request body
app.use(express.json());


//imporgt routes for Todo API
 const todoRoutes=require("./routes/todos"); 

//  mount the todo ASPI rioutes 
 app.use("/api/v1",todoRoutes);

 //start server
 app.listen(PORT,()=>{
   console.log(`server started successfully at ${PORT}`);
 })

 const dbConnect=require("./config/database");
 dbConnect();


 app.get("/",(req,res)=>{
   res.send(`<h1>this iss home page</h1>`);
 })