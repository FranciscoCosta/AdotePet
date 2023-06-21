import { loginService, registerService, logoutService } from '../Services/Auth.Service.js';


const register = async (req, res) => {
    try{
        const newUser = await registerService(req,res);
        if(!newUser){
            return res.status(400).json({message: "Não foi possível cadastrar o usuário"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
const login = async (req, res) => {
    try{
        const user = await loginService(req,res);
        if(!user){
            return res.status(400).json({message: "Não foi possível logar o usuário"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
};


const logout = async (req, res) => {
};

export { login, register, logout };