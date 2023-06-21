import express from 'express';
import { login, register, logout } from "../Controllers/Auth.Controller.js";
import { verifyEmail, verifyInputsRegister ,verifyInputsLogin, verifyUserLogin} from "../Middlewares/Auth.Middleware.js";


const authRouter = express.Router();

authRouter.post("/register", verifyInputsRegister, verifyEmail ,register);
authRouter.post("/login",verifyInputsLogin,verifyUserLogin, login);
authRouter.post("/logout", logout);


export default authRouter;