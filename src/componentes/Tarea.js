import React from 'react';
import '../hojas-de-estilo/Tarea.css';

function Tarea({texto}) {
  return(
    <div className='Tarea-contenedor'>
      <div className='Tarea-texto'>
        {texto} 
      </div>
      <div className='Tarea-icono'>
        Eliminar
      </div>    
    </div>
  );
}

export default Tarea;