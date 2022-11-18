import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../store/ShoppinCartContextProvider";
import { BsFillCartFill } from "react-icons/bs";


const Header = () => {
  const cartCtx = useContext(CartContext);

  return (
   
      <header className="flex justify-between p-2 max-w-7xl mx-auto border">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              className="w-20 object-contain cursor-pointer "
              src="https://www.iconpacks.net/icons/2/free-plant-icon-1573-thumb.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center space-x-5 text-green-600">

          <div className="border px-4 py-1 rounded-full border-green-600">
          {cartCtx.cartItems.length}
            <BsFillCartFill />
          </div>
        </div>
      </header>

  );
};

export default Header;
