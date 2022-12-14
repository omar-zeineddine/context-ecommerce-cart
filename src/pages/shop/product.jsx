import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 ? <>({cartItemAmount})</> : null}
        </button>
      </div>
    </div>
  );
};
