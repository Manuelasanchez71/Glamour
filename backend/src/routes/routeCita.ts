// src/routes/routeCita.ts
import { Router } from 'express';
import { createCita, getCitas, updateCita, deleteCita } from '../controllers/citaController';
import { authenticateUser } from '../middleware/authMiddleware'; // Middleware para verificar autenticación

const router = Router();

// CRUD de citas
router.post('/', authenticateUser, createCita);       // Crear una nueva cita: POST /citas
router.get('/', authenticateUser, getCitas);          // Obtener todas las citas: GET /citas
router.put('/:id', authenticateUser, updateCita);     // Actualizar una cita por ID: PUT /citas/:id
router.delete('/:id', authenticateUser, deleteCita);  // Eliminar una cita por ID: DELETE /citas/:id

export default router;
