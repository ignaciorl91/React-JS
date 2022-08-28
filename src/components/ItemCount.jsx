import { useState } from 'react';

const ItemCount = () => {

    let [contador, setContador] = useState(0)


    return (<div>
        <button onClick={() =>( setContador(contador--))}>-</button>
        <input type="number" Value={contador} name="" id="inputCont" />
        <button onClick={() =>( setContador(contador++))
        }> + </button>
    </div>
    )

}

export default ItemCount ;


