import React, { useContext } from "react";
import { ProductType } from "../types/types";
import ProductItem from "./ProductItem";
import { CartContext } from "../store/ShoppinCartContextProvider";


type ProductsPropsType = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductsPropsType) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.cartItems);
  return (
 
      <ul className="flex flex-wrap justify-center items-stretch">
        {products.map((product) => (
          <ProductItem key={product.id} productData={product} />
        ))}
      </ul>

  );
};

export default ProductList;
