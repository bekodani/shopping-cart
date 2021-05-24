import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import {Link} from 'react-router-dom';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { Helmet } from 'react-helmet';


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

  if (product.quantity === 1) {
    return
  }
 else if (product.quantity <= 1) {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  } else {
    setCart(newList);
  }
  
  }




if(cart.length === 0) {
  return(
    <div className="empty-cart">
              <Helmet>
            <title>{ 'Cart' }</title>
        </Helmet>
      <div className="back-to-shop">
        <h2>Your cart is empty</h2> 
        <Link to="/shop/catalog">   
          <button className="shop-btn"><h3>Back to the Shop</h3></button>
        </Link>    
      </div>
    </div>
  )
} else 
  return (
    <>
        <Helmet>
            <title>{ 'Cart' }</title>
        </Helmet>
    <div className="cart-page">
      <h3>Cart ({cart.length})</h3>


        <table className="cart-items-card">
          <tbody>
          <tr className="table-row-title">
            <th></th>
            <th>Item name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
            <th></th>
          </tr>
          {cart.map((item, index) => (
                    <tr key={index}>
                      <td><img className="mini-pic" src={item.img} alt={item.id}/></td>
                      <td className="td-name"><Link to={`/shop/product/${item.id}`}>{item.name}</Link></td>
                      <td>£{item.price}</td>
                      <td>          <div className="button-wrapper">          
              <button className="qty-button" onClick={()=>decrementItem(item)}><IoMdArrowDropleft/></button>
              <div className="item-counter">
                <p>{item.quantity}</p>
              </div>
              <button className="qty-button" onClick={()=>incrementItem(item)}><IoMdArrowDropright/></button>           
            </div></td>
                      <td><button className="cancel-btn" onClick={() => removeFromCart(item)}><MdCancel/></button></td>
                    </tr>
          ))}
          </tbody>     
        </table>


      <div className="summary-box">
        <div className="summary-box-title">
        <h3>Total Cost: £{totalPrice}</h3>
        </div>
      <hr/>
      {cart.map((item, index) => (
        <ul className="summary-list" key={index}>
          <li>£{item.quantity * item.price.toFixed(2)}</li>
        </ul>
      ))}
      <button onClick={()=>setCart([])}>Remove all items</button>
      <Link to="/cart/checkout">
        <button>Checkout</button>
      </Link>
      </div>
    </div>  
    </>  
  )
}

export default Cart;