import User from "../Models/User.model.js";

import createError from "../Utils/Create.Error.js";

const verifyEmail = async (req, res, next) => {
  try {
    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) {
      return next(createError(400, "Email já cadastrado"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

const verifyInputsRegister = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(createError(400, "Preencha todos os campos"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

const verifyInputsLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(createError(400, "Preencha todos os campos"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

const verifyUserLogin = async (req, res, next) => {
  try {
    const checkEmail = await User.findOne({ email: req.body.email });
    if (!checkEmail) {
      return next(createError(404, "Usuário ou senha incorretos"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

export {
  verifyEmail,
  verifyInputsRegister,
  verifyInputsLogin,
  verifyUserLogin,
};
