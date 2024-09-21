export interface ICita {
  idCita?: number; // Propiedad opcional para el identificador de la cita
  nombre: string;  // Nombre asociado a la cita
  fecha: string;   // Fecha de la cita en formato string (puede ser tipo Date si prefieres)
  hora: string;    // Hora de la cita en formato string
}
