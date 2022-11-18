// domain.com/recipe/[recipeId]
import React from "react";

import { ProductType } from "../../../types/types";

type ProductDetailProps = {
  productDetails: ProductType;
};

const SingleProductPage = ({ productDetails }: ProductDetailProps) => {
  return (
    <div className="p-5 text-green-600">
      <img className=" w-40 m-10" src={productDetails.image} />
      <h1 className="text-3xl font-bold m-5">{productDetails.title}</h1>
      <h2 className="text-2xl m-5">$ {productDetails.price}</h2>
      <h3 className="font-bold">About Product:</h3>
      <p>{productDetails.description}</p>
    </div>
  );
};


export async function getServerSideProps(context: any) {
  const productId = context.params.productId;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const productDetails = await data.json();

  return {
    props: {
      productDetails,
    },
  };
}

export default SingleProductPage;
