import React from "react";
import Link from "next/link";
import { ProductType } from "../types/types";
import AddButton from "./AddButton";

type ProductItemProps = {
  productData: ProductType;
};

const ProductItem = ({ productData }: ProductItemProps) => {
  return (
    <li className=" m-4 border border-green-300 flex flex-col w-60 h-full hover:scale-105 transition ease-in-out duration-500 z-1">
      <Link href={`/products/${productData.id}`} className="flex flex-col justify-end items-center p-2 h-80 space-x-1 ">
        <img
          className="pt-2 cursor-pointer w-50 max-h-60  object-contain"
          src={productData.image}
        />
        <h1 className="text-xs font-bold mt-6">{productData.title}</h1>
      </Link>
      <div className="flex flex-row items-center justify-between w-30 h-10 bg-green-300 p-2">
        <h2 className="text-base font-bold ">$ {productData.price}</h2>
        <div className=" text-2xl cursor-pointer">
          <AddButton productData={productData} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
