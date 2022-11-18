import React,{useContext} from "react";
import { ProductType } from "../types/types";
import {RiDeleteBinLine} from 'react-icons/ri'
import {CartContext} from '../store/ShoppinCartContextProvider'

type CartItemTypeProps = {
  cartItem: ProductType;
};

const CartItem = ({ cartItem }: CartItemTypeProps) => {
    const cartCtx = useContext(CartContext);

  return (
    <li className="flex items-center p-4">
      <img className="w-10 h-50  cursor-pointer p-2" src={cartItem.image} />
      <h1 className="text-xs ">{cartItem.title}</h1>
      <div className="p-3" onClick={()=>{cartCtx.dispatchCart({type:'REMOVE-FROM-CART', product:cartItem})}}>
        <RiDeleteBinLine/>
      </div>
    </li>
  );
};

export default CartItem;
