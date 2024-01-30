import logo from '../src/imagen/logo.png'
import './app.css'
import ListaDeTareas from './components/ListaDeTareas'

function App() {
  return (
    <div className='Aplicacion-tareas'>
      <div className="logo-contenedor">
        <img 
        className="logo"
        src={logo}
        alt="Logo" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>


  )
}

export default App