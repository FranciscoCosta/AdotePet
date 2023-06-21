import {
  loginService,
  registerService,
  logoutService,
} from "../Services/Auth.Service.js";

import createError from "../Utils/Create.Error.js";

const register = async (req, res, next) => {
  try {
    const newUser = await registerService(req, res);
    if (!newUser) {
        return next(createError(404, "Email já cadastrado"));
    }
  } catch (error) {
    return next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const user = await loginService(req, res);
    if (!user) {
        return next(createError(404, "Usuário ou senha incorretos"));
    }
  } catch (error) {
    return next(error);
  }
};

const logout = async (req, res) => {
  try {
    await logoutService(req, res);
  } catch (error) {
    return next(error);
  }
};

export { login, register, logout };
