import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, selectPicture } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div className="product">
      <img src={productImage} alt="product" onClick={() => selectPicture(id)} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>€{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  );
}

