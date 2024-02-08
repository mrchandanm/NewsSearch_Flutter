import newsmodels from "../models/newsmodels.js";

export const searchNewsController=async (req,res)=>{
    try {
        const search_text=req.query.search;

        const doc=await newsmodels.find({type:search_text});
        return res.status(200).send({
            success:true,
            doc,
        })
    } catch (error) {
        return res.status(400).send({
            success:false,
            message:"something went wrong",
            error
        })
    }
}

export const addNewsController=async (req,res)=>{
    try {
       const {title, content, type}=req.body;
       
       const news= await new newsmodels({title,content,type}).save();
       res.status(200).send({
        success:true,
        message:"news added succesfully",
        news
    })

    } catch (error) {
        return res.status(400).send({
            success:false,
            message:"something went wrong",
            error
        })
    }
}
