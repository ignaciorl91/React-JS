import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './container/ItemListContainer';



function App() {

const  persona={
  nombre: "Ignacio",
  localidad:"San Fernando"
}

  return (
    <div className="App"> 
      <header className="App-header">
    <Navbar/>
    <CartWidget/>
      </header>
      <body>
        <div className='items'>
          <ItemListContainer name="titulo"/>
        </div>
      </body>
    </div>
  );
}

export default App;
