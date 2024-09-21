import { Request, Response } from 'express';
import { query } from '../utils/database'; // Reutiliza la función de consulta basada en promesas
import { RowDataPacket } from 'mysql2/promise';
import { ICita } from '../models/ModelCita'; // Asegúrate de importar tu interfaz ICita

// Crear una cita
export const createCita = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { nombre, fecha, hora }: ICita = req.body;

    // Validar los campos requeridos
    if (!nombre || !fecha || !hora) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    const sql = 'INSERT INTO citas (nombre, fecha, hora) VALUES (?, ?, ?)';
    await query(sql, [nombre, fecha, hora]);

    return res.status(201).json({ message: 'Cita creada exitosamente' });
  } catch (err: any) {
    console.error('Error al crear cita:', err.message);
    return res.status(500).json({ error: 'Error al crear cita' });
  }
};

// Obtener todas las citas
export const getCitas = async (req: Request, res: Response): Promise<Response> => {
  try {
    const results = await query('SELECT * FROM citas') as RowDataPacket[];
    return res.json(results);
  } catch (err: any) {
    console.error('Error al obtener citas:', err.message);
    return res.status(500).json({ error: 'Error al obtener citas' });
  }
};

// Actualizar una cita
export const updateCita = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { nombre, fecha, hora }: ICita = req.body;

    // Validar los campos requeridos
    if (!nombre || !fecha || !hora) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    const sql = 'UPDATE citas SET nombre = ?, fecha = ?, hora = ? WHERE idCita = ?';
    await query(sql, [nombre, fecha, hora, id]);

    return res.json({ message: 'Cita actualizada exitosamente' });
  } catch (err: any) {
    console.error('Error al actualizar cita:', err.message);
    return res.status(500).json({ error: 'Error al actualizar cita' });
  }
};

// Eliminar una cita
export const deleteCita = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const sql = 'DELETE FROM citas WHERE idCita = ?';
    await query(sql, [id]);

    return res.json({ message: 'Cita eliminada exitosamente' });
  } catch (err: any) {
    console.error('Error al eliminar cita:', err.message);
    return res.status(500).json({ error: 'Error al eliminar cita' });
  }
};
