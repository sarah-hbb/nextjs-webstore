import React, { useContext } from "react";
import { MdAddCircle } from "react-icons/md";
import { CartContext } from "../store/ShoppinCartContextProvider";
import { ProductType } from "../types/types";

type AddButtonProps = {
  productData: ProductType;
};
const AddButton = ({ productData }: AddButtonProps) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="hover:scale-125 transition ease-in-out duration-500"
      onClick={() => {
        cartCtx?.dispatchCart({ type: "ADD-TO-CART", product: productData });
      }}
    >
      <MdAddCircle />
    </div>
  );
};

export default AddButton;
