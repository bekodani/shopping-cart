import React, {useContext, useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import { CartContext } from './CartContext';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import ShopNav from './ShopNav';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Helmet } from 'react-helmet';

const ItemDetail = () => {
    const [cart, setCart] = useContext(CartContext);
    const [numOfItems, setNumOfItems] = useState(1)
    const {id} = useParams()
    const thisItem = ItemList.find(prod => prod.id === id)

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/cart'), [history]);
  
    const submit = () => {
      confirmAlert({
        title: 'Cart',
        message: 
        <div>
          <hr />
          <div className="msg-container">
            <img className="mini-pic" src={thisItem.img} alt={thisItem.name}/>
            <h3>{thisItem.name} was added to your cart</h3>
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
          item.id === product.id ? { ...item, quantity: item.quantity + numOfItems} : item
        );
        setCart(newList);
      } else {
        setCart([...cart, { id: id, name: name, quantity: numOfItems, price: price, img: img  }]);
      }
      submit()
      }

      const increment = () => {
        setNumOfItems(numOfItems + 1)
      }

      const decrement = () => {

        if (numOfItems === 1) {
          return
        } else {
          setNumOfItems(numOfItems - 1)
        }
      }


      const style = {
        width: '15px'
      }
    

    return (
      <div>
        <Helmet>
          <title>{thisItem.name}</title>
        </Helmet>
      <ShopNav />

      <div className="item-detail-card-container">

        <div className="item-detail-card">
            <h3>{thisItem.name}</h3>      
            <p>{thisItem.desc}</p>
            <hr/>
            <div>
                <img src={thisItem.img} alt={thisItem.name}/>
            </div>
            <div className="button-wrapper">
              <p className="qty-p">Quantity: </p>            
              <button className="qty-button" onClick={decrement}><IoMdArrowDropleft/></button>
              <div className="item-counter">
                <p>{numOfItems}</p>
              </div>
              <button className="qty-button" onClick={increment}><IoMdArrowDropright style={style}/></button>           
              <button className="item-detail-btn" onClick={()=>addToCartList(thisItem)}>Add to Cart</button>
            </div>
        </div>
      </div>
      </div>
    )
}

export default ItemDetail;