import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteContext";
import { ProductContext } from "../context/productContext";

export const Cart = () => {
  const { favorites, removeFromCart } = useContext(FavoriteContext);

  const products = useContext(ProductContext);

  if (!favorites) return <div></div>;

  return (
    <div>
      {favorites.map((id) => {
        const favorite = products.find((product) => product.id === id);
        return (
          <div>
            <p>{favorite.title}</p>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
