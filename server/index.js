import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routers/routerUser.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL, {
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});
app.use("/api", route);