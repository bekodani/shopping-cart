import React from 'react';
import Shop from './Shop';
import ItemList from './ItemList';
import ShopNav from './ShopNav';


const CartItems = () => {

  const Array = ItemList

  return (
    <div className="shop-page" >
        <ShopNav /> 
      <div className="item-card-container">
        {
          Array.map((item, index) => (
            <div className="item-card" key={index}>
              <Shop id={item.id} name={item.name} price={item.price} img={item.img} qty={item.qty} type={item.type}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CartItems;