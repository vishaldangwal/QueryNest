import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./Route/user.js"
import queryRouter from "./Route/query.js"
import blogRouter from "./Route/blog.js"
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/v1/user", userRouter)
app.use("/api/v1/query", queryRouter)
app.use("/api/v1/blog", blogRouter)


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)

        app.listen(port, () => {
            console.log(`listening at port number ${port}`);
        });
        console.log("connect to MongoDB successfully!");
    }
    catch (error) {
        console.error("error in connecting with DataBase ", error.message);
    }
}


connectDB();

