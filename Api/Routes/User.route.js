import express from 'express';
import { getUser, updateUser } from "../Controllers/User.Controller.js";

const userRouter = express.Router();

userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
    

export default userRouter;