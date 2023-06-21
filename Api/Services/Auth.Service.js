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
    return { error };
  }
};

const loginService = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isMatch = await bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Email ou senha incorreto" });
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
    return { error };
  }
};

const logoutService = async (req, res) => {};

export { loginService, registerService, logoutService };
