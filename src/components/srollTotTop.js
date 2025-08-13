import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // npm install react-icons

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed-bottom mb-4 d-flex justify-content-center transition`}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <button
        onClick={scrollToTop}
        className={`scroll-btn d-flex justify-content-center align-items-center rounded-circle shadow-lg border-0 
          ${isVisible ? "show" : "hide"}`}
      >
        <FaArrowUp size={18} />
      </button>

      {/* Inline CSS for the animation */}
      <style jsx>{`
        .scroll-btn {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007bff, #00c6ff);
          color: white;
          transition: all 0.3s ease, transform 0.2s ease;
        }
        .scroll-btn:hover {
          background: linear-gradient(135deg, #0056b3, #0099cc);
          transform: translateY(-3px);
        }
        .scroll-btn.show {
          opacity: 1;
          transform: scale(1);
        }
        .scroll-btn.hide {
          opacity: 0;
          transform: scale(0);
        }
        .transition {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}
