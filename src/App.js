import "./App.css";
import { useState, useEffect, useContext } from "react";
import Middlebar from "./Components/Middlebar";
import FilterTab from "./Components/FilterTab";
import ProductPage from "./Components/ProductPage";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Data from "./Components/data.json";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./Components/Cart";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartCtx = useContext(CartContext);
  

  const getSearchTerm = (term) => {
    setSearchedTerm(term);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Switch>
        <Route path="/gocomet-myntra-assignment#" exact>
          {console.log(cartIsShown)}
          {cartIsShown && <Cart onHide={hideCartHandler}></Cart>},
          <Navbar onClickCart={showCartHandler} onSearch={getSearchTerm} />,
          <Middlebar />,
          <div className="filter-product row">
            {" "}
            <FilterTab></FilterTab>{" "}
            <ProductPage searchTerm={searchedTerm}></ProductPage>{" "}
          </div>
        </Route>
        <Route path="/product/:id">
          {cartIsShown && <Cart onHide={hideCartHandler}></Cart>},
          <ProductDetail onClickCartBtn={showCartHandler}></ProductDetail>
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
