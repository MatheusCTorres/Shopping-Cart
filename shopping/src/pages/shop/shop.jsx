import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { Product } from "./produtc";
import Modal from "../../components/modal";
import "./shop.css";

export function Shop() {
  const { showModal } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>My Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
        {showModal && <Modal />}
      </div>
    </div>
  );
}
