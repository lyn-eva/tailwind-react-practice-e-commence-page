import { useState, useReducer } from "react";
import Context from "./Context";

const initial = {
  total: 0,
  items: {},
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const keys = Object.keys(state.items);
      let total = action.price * action.amount,
        amount = action.amount;
      if (action.name in state.items) {
        const stateAmount = state.items[action.name].amount;
        amount = stateAmount + action.amount;
        total = amount * action.price;
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.name]: {
            price: action.price,
            amount: amount,
            total: total
          },
        },
      };
  }
  return state;
};

function ContextProvider(props) {
  const [cart, dispatchCart] = useReducer(cartReducer, initial);

  const addCartItem = (name, price, amount) => {
    dispatchCart({
      type: "ADD_ITEM",
      name: name,
      price: price,
      amount: amount,
    });
  };

  const provider = {
    ...cart,
    addCartItem: addCartItem,
  };

  console.log(cart);

  return <Context.Provider value={provider}>{props.children}</Context.Provider>;
}

export default ContextProvider;
