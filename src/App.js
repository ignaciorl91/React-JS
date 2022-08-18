import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {

const  persona={
  nombre: "Ignacio",
  localidad:"San Fernando"
}

  return (
    <div className="App"> 
      <header className="App-header">
    <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {persona.nombre} de {persona.localidad}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
