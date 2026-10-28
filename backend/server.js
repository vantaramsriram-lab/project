import express from "express"
import { configDotenv } from "dotenv";
import connectDB from "./db.js";
import cors from "cors"
import requestRouter from "./requests.routes.js"
const app = express();
app.use(cors())
configDotenv()
connectDB()
app.use(express.json())
app.get("/", (req, res) => {
  res.json("connected successfully")
})
app.use("/api/requests", requestRouter)
app.listen(5000, () => {
  console.log("app is working")
})