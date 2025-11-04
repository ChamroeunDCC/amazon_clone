import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";
import test_product from "../assets/test_product.jpg";
import { useState } from "react";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    dispatch(clearCart());
    setShowModal(false);
  };

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  return (
    <div
      style={{ backgroundColor: "#EAEDED" }}
      className="p-3"
      id="shopping_cart"
    >
      <div className="container">
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-9 col-md-8">
            <div className="bg-white p-3 shadow-sm rounded">
              <div className="mb-3 border-bottom pb-2">
                <p className="mb-1 text-secondary">
                  Total Items: {cart.length}
                </p>
                <h4 className="text-dark mb-1">Shopping Cart</h4>
                <small
                  className="text-primary cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  Deselect all items
                </small>
                <div
                  className={`modal fade ${showModal ? "show d-block" : ""}`}
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Confirm</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowModal(false)}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>Are you sure you want to deselect all items?</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleConfirm}
                        >
                          Yes, clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backdrop */}
                {showModal && <div className="modal-backdrop fade show"></div>}
              </div>

              {cart.length === 0 && (
                <p className="text-center text-muted">Your cart is empty.</p>
              )}

              {cart.map((item) => (
                <div
                  className="row border-bottom pb-3 mb-3 align-items-start"
                  key={item.id}
                >
                  <div className="col-12 col-md-6 text-center">
                    <img
                      className="img-fluid"
                      src={item.image || test_product}
                      alt={item.name}
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="mb-2">{item.name}</p>
                    <h6 className="mb-2 text-dark">
                      ${item.price ? Number(item.price).toFixed(2) : "0.00"}
                    </h6>

                    {/* Qty Controls */}
                    <div className="d-flex align-items-center mb-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => dispatch(decreaseQty(item.id))}
                        disabled={item.qty <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.qty}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => dispatch(increaseQty(item.id))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-link text-danger p-0"
                      style={{ fontSize: "12px" }}
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {cart.length > 0 && (
                <div className="text-end">
                  <h6>
                    Subtotal ({cart.length} item{cart.length > 1 ? "s" : ""}):{" "}
                    <b>${subtotal.toFixed(2)}</b>
                  </h6>
                </div>
              )}
            </div>
          </div>

          {/* Checkout */}
          <div className="col-lg-3 col-md-4 mt-3 mt-md-0">
            <div className="bg-white p-3 shadow-sm rounded">
              <h6 className="text-dark">
                Subtotal (items): <b>${subtotal.toFixed(2)}</b>
              </h6>
              <button
                style={{ fontSize: "14px", backgroundColor: "#FCD831" }}
                className="btn w-100 mt-2 border-0"
                disabled={cart.length === 0}
                onClick={() => alert("Proceeding to checkout...")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
