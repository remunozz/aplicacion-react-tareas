import './App.css';
import Logo from './componentes/Logo';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TareaFormulario />        
      </div>
    </div>
  );
}

export default App;

// <Tarea texto='Aprender React'/>