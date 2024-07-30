import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
      interface Request {
        userId: string;
      }
    }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["auth_token"];
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string)  as JwtPayload;
        req.userId = decoded.userId;
        next();
      } catch (error) {
        console.error("JWT verification error:", error);
        return res.status(401).json({ message: "Invalid or expired token" });
      }
};

export default verifyToken;

