import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
         src = {freeCodeCampLogo}
         className = 'freecodecamp-logo' 
        />
      </div>
    </div>
  );
}

export default App;