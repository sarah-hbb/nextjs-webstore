import React from "react";
import Link from "next/link";
import { ProductType } from "../types/types";
import AddButton from "./AddButton";

type ProductItemProps = {
  productData: ProductType;
};

const ProductItem = ({ productData }: ProductItemProps) => {
  return (
    <li className=" border bg-red-40 m-2 max-h-59">
      <Link
        href={`/products/${productData.id}`}
        className="flex flex-col justify-between w-40  items-center p-3 space-x-1 "
      >
        <img
          className="w-40 h-50  cursor-pointer p-2"
          src={productData.image}
        />
        <h1 className="text-xs font-bold">{productData.title}</h1>
      </Link>
      <div className="flex flex-row items-center justify-between w-30 bg-green-100 p-2">
        <h2 className="text-base font-bold ">$ {productData.price}</h2>
        <div className=" text-2xl cursor-pointer">
          <AddButton productData={productData}/>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
