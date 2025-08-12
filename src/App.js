import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavRelateCategory from "./components/nav_relate_category";
import SingleProduct from "./pages/product_detail";
import ShoppingCart from "./pages/shopping_cart";
import MainHomePage from "./pages/main_homepage";
import Layout from "./layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainHomePage />} />
          <Route
            path="/nav_relate_category/product_detail"
            element={<SingleProduct />}
          />
          <Route path="/shopping_cart" element={<ShoppingCart />} />
        </Route>
        <Route path="/nav_relate_category" element={<NavRelateCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
