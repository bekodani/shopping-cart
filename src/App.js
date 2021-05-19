import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Nav from './components/Nav';
import Cart from './components/Cart';
import CartItems from './components/CartItems';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <div>
            <Nav />
            <Switch>
              <Route path='/shopping-cart' exact component={Home}/>         
              <Route path="/shop" exact component={CartItems} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/shop/:id" component={ItemDetail}/>
              <Route path="/cart/checkout" exact component={Checkout} />
            </Switch>
          </div>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
