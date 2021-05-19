import React, {useContext, useState} from 'react';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import { CartContext } from './CartContext';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const ItemDetail = () => {
    const [cart, setCart] = useContext(CartContext);
    const [numOfItems, setNumOfItems] = useState(1)
    const {id} = useParams()
    const thisItem = ItemList.find(prod => prod.id === id)

    
    

 

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
      console.log(cart)
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
      <div className="item-detail-container">
        <div className="item-detail">
            <h3>{thisItem.name}</h3>      
            <p>{thisItem.desc}</p>
            <div className="item-img">
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
    )
}

export default ItemDetail;