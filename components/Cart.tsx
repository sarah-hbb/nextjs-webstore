import React, { useContext, useState } from "react";
import { CartContext } from "../store/ShoppinCartContextProvider";
import { ProductType } from "../types/types";
import CartItem from "./CartItem";

type CartPropsType = {
  isVisible: boolean;
};
const Cart = ({ isVisible }: CartPropsType) => {
  const cartCtx = useContext(CartContext);
  const [stayVisible, setStayVisible] = useState(false);

  console.log( 'hello');

  return (
    <ul
      className={` flex flex-col justify-center items-center absolute z-10  translate-y-6   bg-gray-100 w-96  transition ease-in-out duration-1000 border-collapse ${
        isVisible || stayVisible
          ? "visible  border-2 rounded-3xl border-green-600"
          : "invisible"
      }`}
      onMouseEnter={() => {
        setStayVisible(true);
      }}
      onMouseLeave={() => {
        setStayVisible(false);
      }}
    > {(cartCtx.cartItems.length==0) && <p className="p-3">Your shopping cart is empty!</p>}
      {cartCtx.cartItems.map((product: ProductType) => (
        <CartItem key={product.id} cartItem={product} />
      ))}
    </ul>
  );
};

export default Cart;

//
