import ProductCategory from "../pages/product_category";
import SubNavGroup from "./SubNavGroup";

const RelateCategory = () => {
  return (
    <>
      <div id="nav_relate_category">
        <SubNavGroup />
      </div>
      <div id="product_category">
        <ProductCategory />
      </div>
    </>
  );
};

export default RelateCategory;
