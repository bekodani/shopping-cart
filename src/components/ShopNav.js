import React from 'react'
import {Link} from 'react-router-dom';

const ShopNav = () => {
    return (
        <nav className="shop-nav">
            <ul className="shopnav-links">
                <Link to='/shop/catalog/kit'>
                    <li className="shopnav-li">Kit</li>
                </Link>
                <Link to='/shop/catalog/clothing'>
                    <li className="shopnav-li">Clothing</li>
                </Link>
                <Link to='/shop/catalog/for-fans'>
                    <li className="shopnav-li">For Fans</li>
                </Link>
                <Link to='/shop/catalog/gifts'>
                    <li className="shopnav-li">Gifts</li>
                </Link>
            </ul>
        </nav>
    )
}

export default ShopNav
