import mongoose from "mongoose";

const newsSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    content:{
        type:String,
    },
    type:{
        type:String,
    }
},{timestamps:true})

export default new mongoose.model("Allnews", newsSchema);

