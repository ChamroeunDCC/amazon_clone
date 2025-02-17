import ProductCategory from "../pages/product_category";
import Header from "./header";
import NavGroupCategory from "./nav_group_category";
import NavBar from "./navbar";

const RelateCategory = () => {
    return ( 
        <>
            <div id="nav_relate_category">
                <Header/>
                <NavBar/>
                <NavGroupCategory/>
            </div>
            <div id="product_category">
                <ProductCategory/>
            </div>
        </>
        
     );
}
 
export default RelateCategory;