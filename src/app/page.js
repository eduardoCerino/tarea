"use client"

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [formData, setFormData] = useState({
    id: '',
    titulo: '',
    estatus: 'Nuevo',
    prioridad: 'Bajo',
    descripcion: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.id === '' || formData.titulo === '' || formData.descripcion === '') {
      return toast.error('Todos los campos son obligatorios');
    }

    toast.success('Reporte enviado correctamente');
    setFormData({
      id: '',
      titulo: '',
      estatus: 'Nuevo',
      prioridad: 'Bajo',
      descripcion: ''
    });
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Toaster/>
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800">
            Reporte
          </h2>
          <p className="text-sm text-gray-600">
            Rellena todos los campos para reportar algún defecto.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
              <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5">
                ID
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-account-email"
                type="number"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="1"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="af-account-username" className="inline-block text-sm text-gray-800 mt-2.5">
                Título
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-account-username"
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Ingresa un título..."
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="estatus" className="inline-block text-sm text-gray-800 mt-2.5">
                Estatus
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="sm:flex">
                <label htmlFor="estatus-nuevo" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <input
                    type="radio"
                    name="estatus"
                    value="Nuevo"
                    id="estatus-nuevo"
                    checked={formData.estatus === 'Nuevo'}
                    onChange={handleChange}
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <span className="text-sm text-gray-500 ms-3">Nuevo</span>
                </label>

                <label htmlFor="estatus-progreso" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <input
                    type="radio"
                    name="estatus"
                    value="En progreso"
                    id="estatus-progreso"
                    checked={formData.estatus === 'En progreso'}
                    onChange={handleChange}
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <span className="text-sm text-gray-500 ms-3">En progreso</span>
                </label>

                <label htmlFor="estatus-cerrado" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <input
                    type="radio"
                    name="estatus"
                    value="Cerrado"
                    id="estatus-cerrado"
                    checked={formData.estatus === 'Cerrado'}
                    onChange={handleChange}
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <span className="text-sm text-gray-500 ms-3">Cerrado</span>
                </label>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="prioridad" className="inline-block text-sm text-gray-800 mt-2.5">
                Prioridad
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <label htmlFor="prioridad-baja" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <input
                    type="radio"
                    name="prioridad"
                    value="Bajo"
                    id="prioridad-baja"
                    checked={formData.prioridad === 'Bajo'}
                    onChange={handleChange}
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <span className="text-sm text-gray-500 ms-3">Bajo</span>
                </label>

                <label htmlFor="prioridad-media" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <input
                    type="radio"
                    name="prioridad"
                    value="Media"
                    id="prioridad-media"
                    checked={formData.prioridad === 'Media'}
                    onChange={handleChange}
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <span className="text-sm text-gray-500 ms-3">Media</span>
                </label>

                <label htmlFor="prioridad-alta" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <input
                    type="radio"
                    name="prioridad"
                    value="Alta"
                    id="prioridad-alta"
                    checked={formData.prioridad === 'Alta'}
                    onChange={handleChange}
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <span className="text-sm text-gray-500 ms-3">Alta</span>
                </label>
              </div>
            </div>




            <div className="sm:col-span-3">
              <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5">
                Descripción
              </label>
            </div>
            <div className="sm:col-span-9">
              <textarea
                id="af-account-bio"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows="6"
                placeholder="Ingresa una descripción..."
              ></textarea>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
              Cancelar
            </button>
            <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Enviar datos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
