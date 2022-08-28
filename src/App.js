import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './container/ItemListContainer';
import { getValue } from '@testing-library/user-event/dist/utils';



function App() {
  
  const [cart, setCart] = useState([{name:"Articulo", cant:0}])
  const [sumaCantidades, setCantidad] = useState(0)
  const valorContador = getValue(document.getElementById("inputCont"));

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CartWidget carritoLength={sumaCantidades} />
      </header>
      <body>
        <div className='items'>
          <ItemListContainer name="titulo" cart="cart" />
          
          <button onClick={() => {
            setCart([...cart, {name: "Nombre de articulo", cant: Number(valorContador)} ])
            for (let index = 0; index < cart.length; index++) {
              setCantidad(sumaCantidades+cart[index].cant);
              
            }
          }}>Agregar al carrito</button>
        </div>

      </body>
    </div>
  );
}

export default App;
