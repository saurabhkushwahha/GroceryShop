import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config'





//app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints

app.use("/app/food",foodRouter)
//here we mount this uploads folder with this /images end point to access this in the future
app.use("/images",express.static('uploads'))

app.use("/app/user",userRouter)

app.use("/app/cart",cartRouter)

app.get("/",(req, res) => {
    res.send("API Working")
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
//mongodb+srv://ashutoshshandilya81:BamAshu7970@cluster0.hhxfb.mongodb.net/?