import ProductCategory from "../pages/product_category";
import Header from "../layout/header";
import NavGroupCategory from "./nav_group_category";
import NavBar from "../layout/navbar";

const RelateCategory = () => {
  return (
    <>
      <div id="nav_relate_category">
        <Header />
        <NavBar />
        <NavGroupCategory />
      </div>
      <div id="product_category">
        <ProductCategory />
      </div>
    </>
  );
};

export default RelateCategory;
