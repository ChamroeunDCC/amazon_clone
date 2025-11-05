import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function MobileCartButton() {
  const cart = useSelector((state) => state.cart.items);
  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const navigate = useNavigate();

  return (
    <>
      {/* Floating button visible only on mobile (d-md-none) */}
      <button
        className="btn btn-warnin g d-lg-none position-fixed"
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
          <motion.span
            key={cartCount} // triggers animation on value change
            initial={{ x: 0 }}
            animate={{ x: [0, -5, 5, -5, 5, 0] }} // shake animation
            transition={{ duration: 0.4 }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {cartCount}
          </motion.span>
        </span>
      </button>
    </>
  );
}
