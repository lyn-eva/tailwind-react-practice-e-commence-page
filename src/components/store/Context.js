import { createContext } from "react";

const initial = {
  cartItems: [],
  itemAmount: [],
  itemValue: []
}
  
export default createContext(initial);