import User from '../Models/User.model.js';

const verifyEmail = async (req, res, next) => {
    try{
        const checkEmail = await User.findOne({email: req.body.email});
        if(checkEmail){
            return res.status(400).json({message: "Email já cadastrado"});
        }
        next();
    }catch(error){
        res.status(500).json({message: error.message});
    };
};

const verifyInputsRegister = async (req, res, next) => {

    try{
        console.log(req.body)
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "Preencha todos os campos"});
        }
        next();
    }catch(error){
        res.status(500).json({message: error.message});
    }
};


export {verifyEmail, verifyInputsRegister};