import Link from "next/link";
import React, { useContext,useState } from "react";
import { CartContext } from "../store/ShoppinCartContextProvider";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "./Cart";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const [isVisible,setIsVisible]=useState(false)

  return (
    <header className="flex justify-between p-2 w-full mx-auto bg-white  z-10 border h-28 ">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-20 object-contain cursor-pointer "
            src="https://www.iconpacks.net/icons/2/free-plant-icon-1573-thumb.png"
            alt=""
          />
        </Link>
      </div>

      <div className="flex flex-col items-end space-x-5 text-green-600  p-4 relative" >
        <div className="flex flex-col items-center border-2 px-4 py-1 rounded-full border-green-600 bg-green-200 font-bold z-50" onMouseEnter={()=>setIsVisible(true) } onMouseLeave={()=>setIsVisible(false)} >
          {cartCtx.cartItems.length}
          <BsFillCartFill />
        </div>
        <Cart isVisible={isVisible}/>
      </div>
    </header>
  );
};

export default Header;

//