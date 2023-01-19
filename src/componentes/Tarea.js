import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({texto}) {
  return(
    <div className='Tarea-contenedor'>
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