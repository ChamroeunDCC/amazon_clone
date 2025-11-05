import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../features/lang/langSLice";

export default function SwitchLang() {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flagMap = {
    EN: "fi fi-us",
    KH: "fi fi-kh",
  };

  const containerStyle = { position: "relative", display: "inline-block" };
  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    padding: "8px 0",
    minWidth: "140px",
    background: "rgba(255, 255, 255, 0.15)", // semi-transparent white
    backdropFilter: "blur(10px)", // frosted blur effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    color: "#fff", // white text (for dark backgrounds)
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    borderRadius: "6px",
  };

  const switchLangHandler = (selected) => {
    dispatch(setLang(selected));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div style={containerStyle} ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          padding: "5px 10px",
          borderRadius: "6px",
          userSelect: "none",
        }}
      >
        <span className={flagMap[lang]}></span>
        <span>{lang}</span>
        <i
          className="fa-solid fa-chevron-down"
          style={{ fontSize: "12px" }}
        ></i>
      </div>

      {open && (
        <div
          style={dropdownStyle}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          {Object.keys(flagMap)
            .filter((key) => key !== lang)
            .map((key) => (
              <div
                key={key}
                style={itemStyle}
                onClick={() => switchLangHandler(key)}
              >
                <span
                  className={flagMap[key]}
                  style={{ marginRight: "8px" }}
                ></span>
                {key}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
