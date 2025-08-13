import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../features/lang/langSLice";

export default function SwitchLangSheet() {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  const switchLanguage = (selected) => {
    dispatch(setLang(selected));
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", selected);
    }
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    width: "100%",
  };

  const flagStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const activeStyle = {
    ...flagStyle,
    border: "4px solid #FFD700",
    backgroundColor: "#fff",
  };

  const inactiveStyle = {
    ...flagStyle,
    border: "2px solid transparent",
    backgroundColor: "#f5f5f5",
  };

  return (
    <div style={containerStyle}>
      {/* English Flag */}
      <div
        style={lang === "EN" ? activeStyle : inactiveStyle}
        onClick={() => switchLanguage("EN")}
      >
        <span className="fi fi-us fs-3"></span>
      </div>

      {/* Khmer Flag */}
      <div
        style={lang === "KH" ? activeStyle : inactiveStyle}
        onClick={() => switchLanguage("KH")}
      >
        <span className="fi fi-kh fs-3"></span>
      </div>
    </div>
  );
}
