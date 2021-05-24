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
        <nav className="main-nav">
            <div className="logo">
                <Link to='/shopping-cart'>
                    <div className="logo-name">
                    <img id="logo" className="logo-inline" src={logo} alt="logo" /> <h2 className="logo-inline">AFC Richmond</h2>
                    </div>
                </Link>
            </div>
            <ul className="nav-links">
                <Link to='/shop/catalog'>
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