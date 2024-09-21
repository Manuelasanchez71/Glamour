// src/components/AgendarCita.tsx
import React, { useState, useEffect } from 'react';

interface ICita {
  idCita?: number;
  nombre: string;
  fecha: string;
  hora: string;
}

const AgendarCita: React.FC = () => {
  const [citas, setCitas] = useState<ICita[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [fecha, setFecha] = useState<string>('');
  const [hora, setHora] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCitaId, setEditingCitaId] = useState<number | null>(null);

  // Obtener todas las citas al cargar el componente
  useEffect(() => {
    fetchCitas();
  }, []);

  const fetchCitas = async () => {
    try {
      const response = await fetch('http://localhost:3002/citas', { // URL correcta
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        console.error('Error al obtener citas:', response.statusText);
        return;
      }
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaCita = { nombre, fecha, hora };

    try {
      const url = `http://localhost:3002/citas${isEditing ? `/${editingCitaId}` : ''}`; // URL correcta
      const response = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(nuevaCita),
      });

      if (response.ok) {
        alert(`Cita ${isEditing ? 'actualizada' : 'creada'} exitosamente`);
        setIsEditing(false);
        setEditingCitaId(null);
        setNombre('');
        setFecha('');
        setHora('');
        fetchCitas();
      } else {
        console.error(`Error al ${isEditing ? 'actualizar' : 'crear'} la cita`);
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3002/citas/${id}`, { // URL correcta
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Cita eliminada exitosamente');
        fetchCitas();
      } else {
        console.error('Error al eliminar la cita');
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
    }
  };

  const handleEdit = (cita: ICita) => {
    setNombre(cita.nombre);
    setFecha(cita.fecha);
    setHora(cita.hora);
    setIsEditing(true);
    setEditingCitaId(cita.idCita || null);
  };

  // Renderizar citas en formato de carta
  const renderCitas = () => {
    return citas
      .filter((cita) =>
        cita.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((cita) => (
        <div key={cita.idCita} className="bg-white border p-4 mb-4 rounded shadow">
          <h3 className="font-semibold">{cita.nombre}</h3>
          <p>Fecha: {cita.fecha}</p>
          <p>Hora: {cita.hora}</p>
          <button
            onClick={() => handleDelete(cita.idCita!)}
            className="bg-red-500 text-white py-1 px-3 rounded mt-2"
          >
            Eliminar
          </button>
          <button
            onClick={() => handleEdit(cita)}
            className="bg-blue-500 text-white py-1 px-3 rounded mt-2 ml-2"
          >
            Editar
          </button>
        </div>
      ));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mb-12 mt-8">
        <h2 className="text-xl font-semibold mb-4 text-black">
          {isEditing ? 'Editar Cita' : 'Agendar Cita'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nombre Completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 border-b-2 border-gray-300 bg-gray-100 focus:outline-none focus:border-pink-500"
            required
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="p-2 border-b-2 border-gray-300 bg-gray-100 focus:outline-none focus:border-pink-500"
            required
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="p-2 border-b-2 border-gray-300 bg-gray-100 focus:outline-none focus:border-pink-500"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-lg mt-4 hover:bg-pink-600"
          >
            {isEditing ? 'Actualizar' : 'Agendar'}
          </button>
        </form>
      </div>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border-b-2 border-gray-300 bg-gray-100 focus:outline-none focus:border-pink-500"
      />

      {/* Cartas de Citas Alineadas a la Izquierda */}
      <div className="w-full max-w-md flex flex-col items-start">
        {renderCitas()}
      </div>
    </div>
  );
};

export default AgendarCita;
