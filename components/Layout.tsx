import React from "react";
import Header from "./Header";
import ShoppingCartContextProvider from "../store/ShoppinCartContextProvider";

type LayoutPropsType = {
  children: any;
};

const Layout = (props: LayoutPropsType) => {
  return (
    <ShoppingCartContextProvider>
      <Header />
      <div>{props.children}</div>
    </ShoppingCartContextProvider>
  );
};

export default Layout;
