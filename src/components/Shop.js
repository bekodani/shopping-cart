import {useHistory} from 'react-router-dom';
import React, { useContext, useCallback } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';




const Shop = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/cart'), [history]);

  const submit = () => {
    confirmAlert({
      title: 'Cart',
      message: 
      <div>
        <hr />
        <div className="msg-container">
          <img className="mini-pic" src={props.img} alt={props.name}/>
          <h3>{props.name} was added to your cart</h3>
        </div>
        <hr />
      </div>,

      buttons: [
        {
          label: 'Continue shopping',
          onClick: () => {return}
        },
        {
          label: 'Go to Checkout',
          onClick: () => {handleOnClick()}
        }
      ]
    });
  };


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
    submit()
  }



  
  
  return (

      <div className="item-card-wrapper" key={props.index}>
        <Link to={`/shop/product/${props.id}`}>
        <div className="img-hover-zoom">
            <img className="item-img-shop-page" src={props.img} alt={props.name}/>
      </div>
        </Link>
        <Link to={`/shop/product/${props.id}`}>
            <h3 className="item-names">{props.name}</h3>
        </Link>
        <h4 className="item-price">£{props.price}</h4>
        <button className="addToCart-button" onClick={()=>addToCartList(props)}><FaShoppingCart /> Add to Cart</button>
      </div>

  )
}

export default Shop;


