import mongoose from 'mongoose'

export const connectDB=async()=>{
     await mongoose.connect('mongodb+srv://saurabh123:saurabh123@cluster0.xz0tz.mongodb.net/saurabh-ecom').then(()=>console.log("DB connected"));
}
