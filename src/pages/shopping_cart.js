import { useEffect, useState } from "react";
import test_product from "../assets/test_product.jpg";
import Layout from "../layout/layout";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

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
                  onClick={() => {
                    setCart([]);
                    localStorage.removeItem("cart");
                  }}
                >
                  Deselect all items
                </small>
              </div>

              {/* Products */}
              {cart.length === 0 && (
                <p className="text-center text-muted">Your cart is empty.</p>
              )}

              {cart.map((item) => (
                <div
                  className="row border-bottom pb-3 mb-3 align-items-start"
                  key={item.id}
                >
                  <div className="col-12 col-md-4 text-center">
                    <img
                      className="img-fluid"
                      src={item.image || test_product}
                      alt={item.name}
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    <p className="mb-2">{item.name}</p>
                    <h6 className="mb-2 text-dark">
                      ${item.price ? Number(item.price).toFixed(2) : "0.00"}
                    </h6>
                    <p className="mb-1 text-muted" style={{ fontSize: "12px" }}>
                      <b>Condition:</b> {item.condition || "N/A"}
                    </p>
                    <p className="mb-1 text-muted" style={{ fontSize: "12px" }}>
                      <b>Color:</b> {item.color || "N/A"}
                    </p>
                    <p className="mb-2 text-muted" style={{ fontSize: "12px" }}>
                      <b>Qty:</b> {item.qty}
                    </p>

                    <button
                      className="btn btn-link text-danger p-0"
                      style={{ fontSize: "12px" }}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {/* Subtotal */}
              {cart.length > 0 && (
                <div className="text-end">
                  <h6>
                    Subtotal ({cart.length} item
                    {cart.length > 1 ? "s" : ""}): <b>${subtotal.toFixed(2)}</b>
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
