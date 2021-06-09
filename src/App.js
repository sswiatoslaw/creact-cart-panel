import {Route, Switch} from 'react-router-dom'
import ProductPage from './pages/product';
import CartPage from './pages/cart';
import FavoritePage from './pages/favorite'
import Header from './component/Header'
import './App.scss'
const App = () => {
  return (
    <>
      <Header/>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <ProductPage/>
          </Route>
          <Route path="/cart">
            <CartPage/>
          </Route>
          <Route path="/favorite">
            <FavoritePage/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
