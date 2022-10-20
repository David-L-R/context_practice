import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const Navbar = () => {
  const products = useContext(ProductContext);

  return <nav>number of products: {products.length}</nav>;
};
