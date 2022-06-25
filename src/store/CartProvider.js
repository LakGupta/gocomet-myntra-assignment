import React from "react";
import CartContext from "./cart-context";
import { useReducer, useEffect } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItem;

  let updatedItems;

  if (action.type === "ADD_CART_ITEM") {
    var newTotalAmount=0;
    
    updatedItem = { ...action.item };
    updatedItems = state.items.concat(action.item);

     newTotalAmount = state.totalAmount + action.item.price;

    const localData = localStorage.getItem("cart");

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if(action.type === "REMOVE_CART_ITEM")
  {
    const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.id 
      );
      const existingCartItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

  
      let updatedItem;
      let updatedItems;
      if (existingCartItem.amount > 1) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    
  }
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id:id});

  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
   
  useEffect(() => {
    let items=JSON.parse(localStorage.getItem("cart"));
    if(items){
     addItemToCartHandler (items);

    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.items));
  }, [cartState.items]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
