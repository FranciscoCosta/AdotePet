import express from 'express';
import * as dotenv from "dotenv";
import connectDB from "./mongo/connect.js";

import userRoute from "./Routes/User.route.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
    res.send("adotePet");
  });

app.use(express.json());

app.use("/api/user", userRoute);
  

const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => {
        console.log("Server is running on port 8080");
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();