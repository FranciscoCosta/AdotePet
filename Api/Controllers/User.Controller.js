import createError from "../Utils/Create.Error.js";
import { getUserService, updateUserService } from "../Services/User.Service.js"; 
const getUser = async (req, res, next) => {
    try{
        const user = await getUserService(req,res);
        if(!user){
            return next(createError(404, "Email já cadastrado"));
        }
        return res.status(200).json(user);

    }catch(error){
        return next(error);
    }
}

const getAllUsers = async (req, res) => {
}

const updateUser = async (req, res, next) => {
    console.log("updateUser")
    try{
        const userUpdated = await updateUserService(req,res);
        if(!userUpdated){
            return next(createError(404, "Não foi possível atualizar o usuário"));
        }
        return res.status(200).json(userUpdated);

    }catch(error){
        return next(error);
    }
}

const deleteUser = async (req, res) => {
}


export { getUser, getAllUsers, updateUser, deleteUser };