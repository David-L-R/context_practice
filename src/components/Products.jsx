import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteContext";
import { ProductContext } from "../context/productContext";

export const Products = () => {
  const { favorites, addToCart } = useContext(FavoriteContext);
  const products = useContext(ProductContext);
  return (
    <div className='flex'>
      <div className='main'>
        {products
          .filter((product) => !favorites.includes(product.id))
          .map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <h3>{product.description}</h3>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add</button>
            </div>
          ))}
      </div>
    </div>
  );
};
