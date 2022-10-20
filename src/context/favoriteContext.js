import { createContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToCart = (id) => {
    setFavorites([...favorites, id]);
  };

  const removeFromCart = (id) => {
    setFavorites(favorites.filter((favorite) => favorite !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToCart, removeFromCart }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
