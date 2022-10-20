import "./App.css";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { FavoriteProvider } from "./context/favoriteContext";
import { ProductProvider } from "./context/productContext";

const App = () => {
  return (
    <FavoriteProvider>
      <ProductProvider>
        <div className='App'>
          <Navbar />
          <Cart />
          <Products />
          {/* <footer></footer> */}
        </div>
      </ProductProvider>
      ;
    </FavoriteProvider>
  );
};

export default App;
