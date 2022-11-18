import React, { useContext } from 'react';
import { CartContext } from '../store/ShoppinCartContextProvider';
import { ProductType } from '../types/types';
import CartItem from './CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext)
  return (
    <ul className='flex flex-col justify-center items-start border border-solid border-green-400 '>
        {cartCtx.cartItems.map((product: ProductType) => (
          <CartItem
            key={product.id}
            cartItem ={product}
          />
        ))}
      </ul>
  )
}

export default Cart;