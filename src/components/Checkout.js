import React, {useContext} from 'react';
import {CartContext} from './CartContext';


const Checkout = () => {
    const [cart, setCart] = useContext(CartContext);




    return (
        <div>
            <p>Checking out!!</p>
            {cart.map((item, index) => (
                <ul key={index}>
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    )
}

export default Checkout
