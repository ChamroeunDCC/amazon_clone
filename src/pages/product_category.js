import { useState } from "react";
import LeftAsideRelateCategory from "../components/left_aside_relate_category";
import RightAsideRelateCategory from "../components/right_aside_relate_category";

const ProductCategory = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="layout_main_relate_category d-flex p-3">
      <div
        className="inner_layout_relate_category d-flex position-relative"
        style={{ width: "100%" }}
      >
        {/* Toggle button */}
        <button
          className={`btn btn-primary rounded-pill filter-toggle-btn d-lg-none ${
            showSidebar ? "active" : ""
          }`}
          onClick={() => setShowSidebar(!showSidebar)}
          aria-expanded={showSidebar}
          aria-label="Toggle Filters"
        >
          {showSidebar ? (
            <i className="fa-solid fa-filter-circle-xmark"></i> // no filter / clear filter icon
          ) : (
            <i className="fa-solid fa-filter"></i> // filter icon
          )}
        </button>

        {/* Offcanvas sidebar */}
        <div
          tabIndex={-1}
          aria-labelledby="offcanvasWithBothOptionsLabel"
          className={`offcanvas offcanvas-start py-2 px-2 scroll ${
            showSidebar ? "show d-block" : "d-none d-md-block"
          }`}
          style={{
            visibility: showSidebar ? "visible" : "hidden",
            transition: "visibility 0.3s ease",
          }}
        >
          <LeftAsideRelateCategory />
        </div>

        <div className="d-none d-md-block">
          <LeftAsideRelateCategory />
        </div>

        {/* Main content */}
        <div className="flex-grow-1 ms-3">
          <RightAsideRelateCategory />
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
