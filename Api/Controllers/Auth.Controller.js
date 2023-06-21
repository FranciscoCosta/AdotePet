import { loginService, registerService, logoutService } from '../Services/Auth.Service.js';


const register = async (req, res) => {
    try{
        const newUser = await registerService(req,res);
        
        if(!newUser){
            return res.status(400).json({message: ""});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
const login = async (req, res) => {
};


const logout = async (req, res) => {
};

export { login, register, logout };