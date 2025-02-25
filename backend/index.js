const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)

        app.listen(port,()=>{
            console.log(`listening at port number ${port}`);
        });
        console.log("connect to MongoDB successfully!");
    }
    catch(error){
        console.error("error in connecting with DataBase ",error.message);
    }
}

connectDB();

