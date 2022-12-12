import { products } from "../../data/products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>A&N shop</h1>
      </div>
      <div className="products">
        {products.map((product, id) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
