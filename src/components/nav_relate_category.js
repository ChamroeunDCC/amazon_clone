import ProductCategory from "../pages/product_category";
import NavGroupCategory from "./nav_group_category";

const RelateCategory = () => {
  return (
    <>
      <div id="nav_relate_category">
        <NavGroupCategory />
      </div>
      <div id="product_category">
        <ProductCategory />
      </div>
    </>
  );
};

export default RelateCategory;
