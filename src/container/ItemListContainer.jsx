import { useState } from 'react';
import ItemCount from '../components/ItemCount';


const ItemListContainer = (props)=>{
    return(
    <div className="item">
        <h3>{props.name}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <ItemCount></ItemCount>
    
    
    </div>
)
}

export default ItemListContainer;