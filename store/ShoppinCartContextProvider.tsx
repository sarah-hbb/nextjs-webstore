import React, { useReducer, useState } from "react";
import { ProductType } from "../types/types";

//Types
type CartContextProviderProps = {
  children: React.ReactNode;
};
type CartAction = {
  type: "ADD-TO-CART" | "REMOVE-FROM-CART";
  product: ProductType;
};

//Creatin Context
export const CartContext = React.createContext<any>(null);

const cartReducer = (state: ProductType[], action: CartAction) => {
  switch (action.type) {
    case "ADD-TO-CART": {
      if (state.some((i) => action.product.id === i.id)) {
        return [...state];
      } else {
        return [...state, action.product];
      }
    }
    case "REMOVE-FROM-CART": {
      return state.filter((p) => p.id !== action.product.id);
    }
  }
};

const ShoppinCartContextProvider = (props: CartContextProviderProps) => {
  const [cartItems, dispatchCart] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cartItems, dispatchCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ShoppinCartContextProvider;
