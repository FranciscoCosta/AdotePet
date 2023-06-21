import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token){
    return next(createError(401, "Você não está logado"));
  };

  jwt.verify(token, process.env.SECRET_JWT, async (err, payload) => {
    if (error){
      return next(error);
    }
    req.userId = payload.id;
    next();
  });
};
