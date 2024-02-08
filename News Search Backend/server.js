import express from "express";
import cors from "cors"
import morgan from "morgan";
import connectdb from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";

const app=express();
connectdb();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/news",newsRoutes);

const PORT=8080;
app.get("/", async(req,res)=>{
   
    res.send("News Search App");
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})