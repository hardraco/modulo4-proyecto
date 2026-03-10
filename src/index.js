import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.json({message:"API running"})
})

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT);
  })
})