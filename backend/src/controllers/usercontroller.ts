import { Request, Response } from 'express';
import { query } from '../utils/database';


// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await query('SELECT * FROM usuarios');
    return res.json(users);
  } catch (err: any) {
    console.error('Error al obtener usuarios:', err.message);
    return res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
