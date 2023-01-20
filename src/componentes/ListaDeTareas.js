import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario.js';
import Tarea from './Tarea.js';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log('Tarea agregada');
    console.log(tarea);
  };

  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              texto={ tarea.texto }
              completadas={ tarea.completadas }
            />
          )
        }
      </div>
    </>
  );   
}

export default ListaDeTareas;