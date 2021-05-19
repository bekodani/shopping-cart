import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';


const Shop = (props) => {
  const [cart, setCart] = useContext(CartContext);


/*      const items = { id: props.id, name: props.name, price: props.price, img: props.img, qty: props.qty, index: props.index };
    setCart(currentState => [...currentState, items]); 

    console.log(cart) */


  function addToCartList(product) {
    const { id, name, price, img } = product;
    if (cart.some((item) => item.id === product.id)) {
      let newList = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
      );
      setCart(newList);
    } else {
      setCart([...cart, { id: id, name: name, quantity: 1, price: price, img: img }]);
    }
    console.log(product)
  }

  
  
  return (

      <div key={props.index}>
        <Link to={`/shop/${props.id}`}>
        <div className="item-img">
            <img src={props.img} alt={props.name}/>
        </div>
        </Link>
        <Link to={`/shop/${props.id}`}>
            <h3 className="item-names">{props.name}</h3>
        </Link>
        <h4 className="item-price">£{props.price}</h4>
        <button className="addToCart-button" onClick={()=>addToCartList(props)}><FaShoppingCart /> Add to Cart</button>
        {/* <input type='submit' value="add" onClick={()=>addToCartList(props)} /> */}
      </div>
  )
}

export default Shop;