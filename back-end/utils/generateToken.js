import Jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return Jwt.sign({id}, process.env.JWT_TOKEN_SECRET, {expiresIn: "30d"});
};
