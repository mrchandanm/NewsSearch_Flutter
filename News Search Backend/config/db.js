import mongoose from "mongoose"

const connectdb=async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/newsSearch");
        console.log(`connection successful on port ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}
export default connectdb;