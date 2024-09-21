import { Request, Response, NextFunction } from 'express';

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && (req.session as { userId?: number }).userId) {
    return next();
  }
  res.status(401).json({ message: 'No autorizado. Por favor, inicie sesión.' });
};
