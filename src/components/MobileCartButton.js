import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MobileCartButton() {
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <>
      {/* Floating button visible only on mobile (d-md-none) */}
      <button
        className="btn btn-warning d-md-none position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: 1050,
        }}
        onClick={() => navigate("/shopping_cart")}
      >
        <span className="position-relative">
          <i className="fas fa-shopping-cart fa-lg"></i>
          {cart.length > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "12px" }}
            >
              {cart.length}
            </span>
          )}
        </span>
      </button>
    </>
  );
}
