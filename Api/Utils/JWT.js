import Jwt from "jsonwebtoken";
import createError from "./Create.Error.js"

const generateToken = (user) => {
    return Jwt.sign(
        {
        id: user._id,
        email: user.email,
        name: user.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "6h" }
        
    );
    };

    const verifyToken = (req,res,next) => {
        const token = req.cookies.acessToken;
        if (!token) {
            return next(createError(401, "Acesso negado"));
        }
        Jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return next(createError(403, "Token  inválido ou expirado"));
            }
            req.userId = decoded.id;
            next();
        });
    };


export {generateToken };