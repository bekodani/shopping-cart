import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import {Link} from 'react-router-dom';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';


const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);


  const removeFromCart = (el) => {
      let hardCopy = [...cart];
      hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
      setCart(hardCopy);
  }


  function incrementItem(product) {
    let newList = cart.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
    );
    setCart(newList)
  }

  function decrementItem(product) {
    let newList = cart.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1} : item
  );

  if (product.quantity <= 1) {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  } else {
    setCart(newList);
  }
  

/*     if (cart.some((item) => item.id === product.id)) {
      let newList = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1} : item
      );
      setCart(newList);
    } else if (product.quantity > 1){
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
        setCart(hardCopy);
        console.log('done')
    }
    console.log(cart, product.quantity) */
  }



  const style = {
    width: '15px'
  }


if(cart.length === 0) {
  return(
    <div>
      <h3>Your cart is empty</h3>
    </div>
  )
} else 
  return (
    <div className="cart-page">
      <h3>Cart ({cart.length})</h3>
      <div className="cart-item-box">
      {cart.map((item, index) => (
      <div key={index}>
        <ul className="cart-item-container">
          <li><img className="mini-pic" src={item.img} alt={item.id}/></li>
          <li><Link to={`/shop/${item.id}`}>{item.name}</Link></li>
          <li>£{item.price}</li>
          <li>
          <div className="button-wrapper">          
              <button className="qty-button" onClick={()=>decrementItem(item)}><IoMdArrowDropleft/></button>
              <div className="item-counter">
                <p>{item.quantity}</p>
              </div>
              <button className="qty-button" onClick={()=>incrementItem(item)}><IoMdArrowDropright style={style}/></button>           
            </div>
          </li>
          <li><button className="cancel-btn" onClick={() => removeFromCart(item)}><MdCancel/></button></li>
        </ul>
        <hr />
        </div>
      ))}
      </div>
      <div className="summary-box">
      <h3>Total Cost: {totalPrice}</h3>
      {cart.map((item, index) => (
        <ul className="summary-list" key={index}>
          <li>{item.quantity * item.price.toFixed(2)}</li>
        </ul>
      ))}
      <Link to="/cart/checkout">
        <button>Checkout</button>
      </Link>
      <button onClick={()=>setCart([])}>Remove all items</button>
      </div>
    </div>    
  )
}

export default Cart;