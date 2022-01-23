import { useState, useReducer } from "react";
import Context from "./Context";

const initial = {
  total: 0,
  items: {},
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
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
            total: total,
          },
        },
      };
    case "REMOVE_ITEM":
      delete state.items[action.name];
      return {...state};// this is not redundant, it's mandatory for component rerendering, return only 'state' will result in no state change detected by context api
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
  const removeCartItem = (name) => {
    dispatchCart({
      type: "REMOVE_ITEM",
      name: name,
    });
  };

  const provider = {
    ...cart,
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
  };

  return <Context.Provider value={provider}>{props.children}</Context.Provider>;
}

export default ContextProvider;
