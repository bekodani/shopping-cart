import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/richmond_logo.png';
import {CartContext} from './CartContext';

function Nav() {
    const [cart, setCart] = useContext(CartContext);
    /* const numOfItems = cart.length */





    function numOfItems() {
        if(cart.length > 0) {
            return <li>Cart {`[${cart.length}]`}</li>
        } else {
            return <li>Cart</li>
        }
    }





    return(
        <nav>
            <div className="logo">
                <Link to='/shopping-cart'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <Link to='/shop'>
                    <li className="li-links">Shop</li>
                </Link>
                <Link className="li-links" to="/cart">
                    {numOfItems()}
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;