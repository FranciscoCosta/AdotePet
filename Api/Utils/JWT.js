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

    const verifyToken = (token, userId) => {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
         const { id, email, name } = decoded;
            if (id !== userId) {
                return false;
            }
            return { id, email, name };
    };


export {generateToken };