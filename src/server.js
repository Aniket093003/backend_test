import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",      
  })
);

import route from "./route/index.js";
app.use("/api/v1",route);

export const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("Server is running at : ", PORT);
  
});
