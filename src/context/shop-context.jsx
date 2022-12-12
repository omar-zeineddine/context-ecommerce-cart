import { createContext } from "react";
import { products } from "../data/products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // get array and create empty object, handle addition of new products
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  return <ShopContextProvider>{props.children}</ShopContextProvider>;
};
