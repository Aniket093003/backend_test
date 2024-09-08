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


app.listen(3000);
