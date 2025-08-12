const NavBar = () => {
  return (
    <div id="nav_bar">
      <div
        className="nav_item d-flex align-items-center w-100 scroll"
        style={{ gap: "10px", flexWrap: "nowrap" }}
      >
        <a
          style={{ whiteSpace: "nowrap" }}
          className="btn_nav_bar"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-bars"></i> All
        </a>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div
            style={{ backgroundColor: "#242F3E" }}
            className="offcanvas-header text-white"
          >
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Hello, Dara
            </h5>
            <a data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
          <div className="offcanvas-body">
            <p>
              Try scrolling the rest of the page to see this option in action.
            </p>
          </div>
        </div>
        <a className="btn_nav_bar" style={{ whiteSpace: "nowrap" }}>
          Today's Deals
        </a>
        <a className="btn_nav_bar" style={{ whiteSpace: "nowrap" }}>
          Customer Service
        </a>
        <a className="btn_nav_bar" style={{ whiteSpace: "nowrap" }}>
          Registry
        </a>
        <a className="btn_nav_bar" style={{ whiteSpace: "nowrap" }}>
          Gift Cards
        </a>
        <a className="btn_nav_bar" style={{ whiteSpace: "nowrap" }}>
          Sell
        </a>
      </div>
    </div>
  );
};

export default NavBar;
