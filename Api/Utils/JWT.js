import Jwt from "jsonwebtoken";

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


export {generateToken };