import React from 'react';
import TareaFormulario from '../componentes/TareaFormulario.js';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {
  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        Lista de tareas
      </div>
    </>
  );   
}

export default ListaDeTareas;