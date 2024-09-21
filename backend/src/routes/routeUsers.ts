// src/routes/routeUsers.ts
import { Router } from 'express';
import { getUsers } from '../controllers/usercontroller';
import { registerUser, loginUser, logoutUser } from '../controllers/authController';
import { authenticateUser } from '../middleware/authMiddleware';

const router = Router();

// Rutas de autenticación
router.post('/register', registerUser); // Registrar un nuevo usuario
router.post('/login', loginUser); // Iniciar sesión de un usuario
router.post('/logout', authenticateUser, logoutUser); // Cerrar sesión del usuario autenticado

// Rutas de gestión de usuarios
router.get('/', authenticateUser, getUsers); // Obtener todos los usuarios (requiere autenticación)

export default router;
