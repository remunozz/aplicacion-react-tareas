import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
  return(
    <div className={ completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
      <div className='Tarea-texto'>
        {texto} 
      </div>
      <div className='Tarea-contenedor-iconos'>
        <AiOutlineCloseCircle className='Tarea-icono' />
      </div>    
    </div>
  );
}

export default Tarea;