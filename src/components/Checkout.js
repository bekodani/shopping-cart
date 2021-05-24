import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from './CartContext';
import { Helmet } from 'react-helmet';


const Checkout = () => {
    const [cart, setCart] = useContext(CartContext);

    const [boughtItems, setBoughtItems] = useState([...cart])

    useEffect(() => {
        const timer = setTimeout(()=> {
            setCart([])
        }, 100);
        return () => {
            clearTimeout(timer)
        }
    }, [])


    return (
        <div>
            <Helmet>
                <title>{'Checkout'}</title>
            </Helmet>
            <p>Checking out!!</p>
            {boughtItems.map((item, index) => (
                <ul key={index}>
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    )
}

export default Checkout
