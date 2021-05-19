import React from 'react';
import Shop from './Shop';
import ItemList from './ItemList';

const CartItems = () => {

  const Array = ItemList

  return (
    <div className="shop-page" >
      <div className="page-box">
      {
        Array.map((item, index) => (
          <div className="shop-item-container" key={index}>
            <Shop id={item.id} name={item.name} price={item.price} img={item.img} qty={item.qty} type={item.type}/>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default CartItems;