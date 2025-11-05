import { Link, useLocation, useNavigate } from "react-router-dom";
import amazon_logo from "../assets/logo/amazon_logo.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import SwitchLang from "../components/switch-lang/SwitchLang";
import SwitchLangSheet from "../components/switch-lang/SwitchLangSheet";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const cart = useSelector((state) => state.cart.items); // items from Redux slice
  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const lang = useSelector((state) => state.lang.lang);
  const navigate = useNavigate();
  const location = useLocation();
  const [databstoggle, setdatabstoggle] = useState({
    dataBsToggle: "",
    dataBsTarget: "",
  });

  const handleClickLogo = () => {
    if (location.pathname === "/") {
      setdatabstoggle({
        dataBsTarget: "#mobileMenu",
        dataBsToggle: "offcanvas",
      });
    } else {
      setdatabstoggle({
        dataBsTarget: "",
        dataBsToggle: "",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    i18n.changeLanguage(lang === "EN" ? "en" : "kh");
  }, [i18n, lang]);

  return (
    <header
      id="navbar_main"
      className="sticky-top px-3 text-white d-flex align-items-center p-2"
    >
      {/* Logo (Always Visible) */}
      <div className="cursor-pointer me-3">
        <img
          width={90}
          src={amazon_logo}
          alt="Amazon Logo"
          onClick={handleClickLogo}
          data-bs-toggle={databstoggle.dataBsToggle}
          data-bs-target={databstoggle.dataBsTarget}
        />
      </div>

      {/* Content visible only on md+ screens */}
      <div id="nav_left" className="d-flex justify-content-between flex-grow-1">
        {/* Left */}
        <div id="nav_global_location" className="ms-2">
          <div className="d-none d-md-flex">
            <i className="d-flex align-items-end fa-solid fa-location-dot me-1 mb-1"></i>
            <div className="d-flex flex-column">
              <span className="txt-deliver text-secondary">
                {t("deliver_to")}
              </span>
              <span className="txt-country">{t("cambodia")}</span>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div id="nav_middle" className="w-100">
          <div className="search-bar w-100">
            <div className="input-group">
              {/* Dropdown */}
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t(`All`)}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">{t(`New`)}</button>
                </li>
                <li>
                  <button className="dropdown-item">{t(`Clothes`)}</button>
                </li>
                <li>
                  <button className="dropdown-item">{t(`Skin Care`)}</button>
                </li>
              </ul>

              {/* Search Input */}
              <input
                type="search"
                className="form-control"
                placeholder="Search Amazon"
                style={{ fontSize: "14px" }}
              />

              {/* Search Button */}
              <button className="btn btn-warning" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div id="nav_right">
          <div className="d-none d-md-flex nav_tools ms-2 align-items-center mb-2">
            <div className="d-flex align-items-center">
              <SwitchLang />
            </div>
            <div
              href=""
              className="right_nav_item d-flex flex-column ms-4 mt-2 text-white"
            >
              <span className="line-1">{t("hello_sigin")}</span>
              <span className="line-2 dropdown-toggle">
                {t("account_and_lists")}
              </span>
            </div>
            <div
              href=""
              className="right_nav_item d-flex flex-column ms-4 mt-2 text-white"
            >
              <span className="line-1">{t("returns")}</span>
              <span className="line-2">{t("orders")}</span>
            </div>
            <Link
              to="/shopping_cart"
              href=""
              className="right_nav_item d-flex ms-4 mt-2 text-white"
            >
              <span className="line-1 position-relative">
                {/* <img width={30} src={icon_shopping} alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <motion.span
                  key={cartCount} // triggers animation on value change
                  initial={{ x: 0 }}
                  animate={{ x: [0, -5, 5, -5, 5, 0] }} // shake animation
                  transition={{ duration: 0.4 }}
                  className="position-absolute top-0 start-100 text-warning fw-bold fs-6"
                >
                  {cartCount}
                </motion.span>
              </span>
              <div className="ms-2 mt-2">
                <span className="line-2">{t("cart")}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Offcanvas for mobile */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu">
        {/* Header with Logo */}
        <div
          style={{ backgroundColor: "#242F3E" }}
          className="offcanvas-header  border-bottom"
        >
          <div className="d-flex align-items-center">
            <img
              src={amazon_logo}
              alt="Amazon Logo"
              width="90"
              className="me-2"
            />
          </div>
          <button
            type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* Search Bar */}
          <div className="input-group mb-3">
            <input
              type="search"
              placeholder="Search Amazon"
              className="form-control"
            />
            <button className="btn btn-warning">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <SwitchLangSheet />

          {/* Deliver Location */}
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-location-dot me-2"></i>
            <span>Deliver to Cambodia</span>
          </div>

          {/* Navigation Links */}
          <div className="list-group">
            <button className="list-group-item list-group-item-action">
              Account & Lists
            </button>
            <button className="list-group-item list-group-item-action">
              Returns & Orders
            </button>
            <Link
              to="/shopping_cart"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bi bi-cart me-2"></i> Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
