# Backend

# Glamour - Servicios de Cuidado Facial Personalizado

El backend de la aplicación gestiona la verificación de usuarios y la administración de citas, utilizando una base de datos MySQL para almacenar la información.

### Base de Datos
El sistema cuenta con dos tablas principales:

- **Tabla de Usuarios**:
  - `idUsuario`: Identificador único del usuario.
  - `nombre`: Nombre del usuario.
  - `correo`: Correo electrónico del usuario.
  - `contraseña`: Contraseña cifrada del usuario.

- **Tabla de Citas**:
  - `idCita`: Identificador único de la cita (opcional).
  - `nombre`: Nombre del cliente asociado a la cita.
  - `fecha`: Fecha de la cita.
  - `hora`: Hora de la cita.

### Verificación de Usuarios
El proceso de autenticación se divide en tres acciones principales:

- **Registro de Usuario**:
  - Verificar si el usuario ya está registrado en la base de datos.
  - Cifrar la contraseña antes de guardarla para mayor seguridad.
  - Almacenar la información del nuevo usuario en la base de datos.

- **Inicio de Sesión**:
  - Comprobar si el usuario existe en la base de datos.
  - Comparar la contraseña ingresada con la almacenada de forma cifrada.
  - Crear una sesión de usuario utilizando una validación estricta para evitar errores de tipos.

- **Cierre de Sesión**:
  - Finaliza la sesión activa del usuario.
  - Devuelve una respuesta de éxito, confirmando que la sesión ha sido cerrada correctamente.

### Administración de Citas
El sistema también permite a los usuarios gestionar sus citas con las siguientes funciones:

- **Crear una Cita**:
  - Validar que todos los campos necesarios (nombre, fecha y hora) estén completos.
  - Registrar la cita en la base de datos.

- **Obtener todas las Citas**:
  - Recuperar y mostrar todas las citas agendadas por los usuarios.

- **Actualizar una Cita**:
  - Permitir al usuario editar los detalles de una cita existente.

- **Eliminar una Cita**:
  - Eliminar una cita específica de la base de datos.
