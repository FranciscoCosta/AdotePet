import User from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../Utils/JWT.js";

const registerService = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

const loginService = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isMatch = await bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) {
      const error = new Error();
      error.status = 404;
      error.message = "Usuário ou senha incorretos";
      return next(error);
    }
    const { password, ...info } = user._doc;
    const token = generateToken(info);
    res
      .cookie("acessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(info);
  } catch (error) {
    return next(error);
  }
};

const logoutService = async (req, res) => {
  try {
    res
      .clearCookie("acessToken",{
        sameSite: "none",
        secure: true,
      })
      .status(200).send("Deslogado com sucesso");
  } catch (error) {
    return next(error);
  }
};

export { loginService, registerService, logoutService };
