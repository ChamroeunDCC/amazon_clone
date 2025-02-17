import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import NavRelateCategory from "./components/nav_relate_category";
import SingleProduct from "./pages/singel_product";
import ShoppingCart from "./pages/shopping_cart";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
               path="/nav_relate_category"
               element={<NavRelateCategory />}
            />
            <Route
               path="/nav_relate_category/single_product/:id"
               element={<SingleProduct />}
            />
            <Route path="/shopping_cart" element={<ShoppingCart />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
