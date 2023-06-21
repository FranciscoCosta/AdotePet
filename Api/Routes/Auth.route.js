import express from 'express';
import { login, register, logout } from "../Controllers/Auth.Controller.js";
import { verifyEmail, verifyInputsRegister } from "../Middlewares/Auth.Middleware.js";


const authRouter = express.Router();

authRouter.post("/register", verifyInputsRegister, verifyEmail ,register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);


export default authRouter;