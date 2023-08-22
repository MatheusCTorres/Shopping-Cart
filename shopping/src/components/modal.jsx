import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "./modal.css"

const Modal = () => {
    const { selectedPic, closeModal } = useContext(ShopContext);
    const { productName, price, productImage, description } = selectedPic;

    return (
        <aside className="modal-overlay">
            <div className="modal-container">
                <img src={productImage} className="img modal-img" alt="product"/>
                <div className="modal-content">
                    <h4>{productName}</h4>
                    <p><b>price: </b>€{price}</p>
                    <p><b>Description: </b>{description}</p>
                    <button className="btn btn-hipster close-btn" onClick={closeModal}>
                        close
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Modal;
