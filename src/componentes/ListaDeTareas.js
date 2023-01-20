import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario.js';
import Tarea from './Tarea.js';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  return (
    <>
      <TareaFormulario onSubmit={ agregarTarea }/>
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