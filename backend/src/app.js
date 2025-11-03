import express from "express"
import globalErrorHandler from "./middleware/globalErrorHandling.js"
import userRouter from "./user/userRoute.js"
import detectionRouter from "./detection/detectionRoutes.js"
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
 }))


app.get("/",(req,res)=>{
   res.json({
    message:"Express is running",

   }).status(200)
})

app.use("/api/users",userRouter)
app.use("/api/detection",detectionRouter)


app.get("/test",(req,res)=>{
   res.status(201).json({
      message:"Working",
      status:201
   })
})




app.use(globalErrorHandler)
export default app