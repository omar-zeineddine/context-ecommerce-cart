import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <button className="addToCartBtn">Add to Cart</button>
      </div>
    </div>
  );
};
