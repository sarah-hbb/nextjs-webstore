import React, { useContext } from "react";
import ProductList from "../../components/ProductList";
import { ProductType } from "../../types/types";
import ShoppingCartContextProvider from "../../store/ShoppinCartContextProvider";
import Header from "../../components/Header";

type ProductsPropsType = {
  products: ProductType[];
};

const AllProductsPage = ({ products }: ProductsPropsType) => {
  return (
    <ShoppingCartContextProvider>
      <Header />
      <ProductList products={products} />
    </ShoppingCartContextProvider>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  return {
    props: {
      products,
    },
  };
}

export default AllProductsPage;
