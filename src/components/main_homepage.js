import { useEffect, useState } from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../util/helper";

const MainHomePage = () => {
   const navigate = useNavigate();
   const [dataProduct, setDataProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   const getProduct = () => {
      setLoading(true);
      fetchData("test_api/ecommerce", {}, "GET")
         .then((res) => {
            setDataProduct(res.data);
            setLoading(false);
         })
         .catch((err) => {
            setLoading(false);
         });
   };

   useEffect(() => {
      getProduct();
   }, []);

   const scrollup = () => {
      window.scrollTo({
         top: 0,
         behavior: "instant",
      });
   };
   return (
      <div id="main_homepage">
         <div className="container w-100">
            <div
               id="carouselExampleControlsNoTouching"
               className="banner_slide carousel slide"
               data-bs-touch="false"
            >
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src={banner1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src={banner2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src={banner3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src={banner4} className="d-block w-100" alt="..." />
                  </div>
               </div>
               <button
                  style={{ width: "80px" }}
                  className="btn_banner carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon mb-5"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button
                  style={{ width: "80px" }}
                  className="btn_banner carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
               >
                  <span
                     className="carousel-control-next-icon mb-5"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>
         <div id="gv_layout">
            <div>
               {loading && (
                  <div className="d-flex justify-content-center mt-5">
                     <div
                        class="spinner-border text-primary text-center"
                        role="status"
                     >
                        <span class="visually-hidden text-center">
                           Loading...
                        </span>
                     </div>
                  </div>
               )}

               <div className="gv_card_layout">
                  {dataProduct.map((items) => {
                     return (
                        <div
                           productItem={items}
                           key={items.id}
                           className="bg-white p-3 rounded-0 position-relative pb-5"
                           style={{ width: "18rem" }}
                        >
                           <a
                              onClick={() => navigate("/nav_relate_category")}
                              className="text-dark"
                              href=""
                           >
                              <h4 className="fw-bold fs-5"> {items.name} </h4>
                              <img
                                 src={items.product}
                                 class="card-img-top"
                                 alt="..."
                              />
                              <p
                                 style={{ width: "220px" }}
                                 className="position-absolute start-0 end-100 ms-3"
                              >
                                 See more
                              </p>
                           </a>
                        </div>
                     );
                  })}
               </div>
               <div className="product_slide_layout mt-3 p-3">
                  <h4>Best Sellers in Computers & Accessories</h4>
                  <div className="product_group_slide p-3">
                     {dataProduct.map((item) => {
                        return (
                           <div key={item.id} className="product_slide me-3">
                              <a
                                 onClick={() =>
                                    navigate("/nav_relate_category")
                                 }
                                 href="#"
                              >
                                 <img width={200} src={item.product} alt="" />
                              </a>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
         <button onClick={() => scrollup()} className="back_to_top">
            Back to Top
         </button>
      </div>
   );
};

export default MainHomePage;
