import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHomePage from "./pages/MainHomePage";
import ShoppingCart from "./pages/ShoppingCard";
import ProductDetail from "./pages/ProductDetail";
import RelateCategory from "./components/RelateCategory";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainHomePage />} />
          <Route
            path="/nav_relate_category/product_detail"
            element={<ProductDetail />}
          />
          <Route path="/shopping_cart" element={<ShoppingCart />} />
          <Route path="/nav_relate_category" element={<RelateCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
