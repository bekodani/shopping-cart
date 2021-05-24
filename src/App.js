import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Nav from './components/Nav';
import Cart from './components/Cart';
import CartItems from './components/CartItems';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home';
import Checkout from './components/Checkout';
import KitItems from './components/pages/KitItems';
import Clothing from './components/pages/ClothingItems';
import FansPage from '../src/components/pages/FansPage';
import GiftPage from '../src/components/pages/GiftPage';



function App() {
  return (
    <div className="App">

      <Router>
      <CartProvider>
          <div>
            <Nav />
            <Switch>
            <Route path="/cart" exact component={Cart}/>
              <Route path='/shopping-cart' exact component={Home}/>
              <Route path="/cart/checkout" exact component={Checkout} />        
              <Route path="/shop/catalog" exact component={CartItems}/>          
              <Route path="/shop/product/:id" component={ItemDetail}/>
              <Route path="/shop/catalog/clothing" component={Clothing} /> 
              <Route path="/shop/catalog/kit" exact component={KitItems} />
              <Route path="/shop/catalog/for-fans" exact component={FansPage}/>
              <Route path="/shop/catalog/gifts" exact component={GiftPage}/>
              </Switch>  
          </div>
          </CartProvider>
      </Router>
      </div>
  );

}

export default App;
