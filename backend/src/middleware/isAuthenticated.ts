import { Request, Response, NextFunction } from "express";

const isUserAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
      next();
    } else {
      res.status(401).json({message: "Necesitas iniciar sesión"});
    }
  };

export default isUserAuthenticated;