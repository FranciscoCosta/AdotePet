import express from 'express';
import * as dotenv from "dotenv";
import connectDB from "./mongo/connect.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from "./Routes/Auth.route.js";
import userRoute from "./Routes/User.route.js";
import petRoute from "./Routes/Pet.route.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
    res.send("adotePet");
  });


//middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());
app.use(cookieParser());


//routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/pet", petRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Algo deu errado";

  return res.status(errStatus).json({ message: errMessage });
});
  

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