import User from '../Models/User.model.js'
import createError from "../Utils/Create.Error.js";

const getUserService = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        return user;
    }catch(error){
        return next(error);
    }
    
}

const getAllUsersService = async (req, res, next) => {
}

const updateUserService = async (req, res, next) => {
    const { state, city, neighborhood} = req.body.location;
    console.log(state,city,neighborhood);
    try{
        const updatedUser = await User.findById(req.params.id);
        if(!updatedUser){
            return next(createError(404, "Usuário não encontrado"));    
    }
    updatedUser.location.state = req.body.location.state;
    updatedUser.location.city = req.body.location.city;
    updatedUser.location.neighborhood = req.body.location.neighborhood;
    await updatedUser.save();
    const { location} = updatedUser;
    return location;
    }catch(error){
        return next(error);
    }

}

const deleteUserService = async (req, res) => {
}


export { getUserService, getAllUsersService, updateUserService, deleteUserService };