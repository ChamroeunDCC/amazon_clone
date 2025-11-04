import { useEffect, useState } from "react";
import test_product from "../assets/test_product.jpg";
import { Link } from "react-router-dom";
import { fetchData } from "../util/helper";
import ItachiSharingan from "./LoadingItachiSharingan";
import ScrollToTop from "./srollTotTop";
import Loading2 from "./Loading2";

const RightAsideRelateCategory = () => {
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

  return (
    <div id="right_aside_relate_category" className="container-fluid mt-3">
      <div className="inner_right_aside_relate_category">
        <h5 className="fw-bold text-dark">Results</h5>
        <p style={{ fontSize: "14px", lineHeight: "10px" }}>
          Price and other details may vary based on product size and color
        </p>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 200px)",
            }}
          >
            <Loading2 />
          </div>
        )}

        <div className="group_items row">
          {dataProduct.map((items) => ( 
            <div
              key={items.id}
              className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xl-3 mt-2"
            >
              <div className="cart border">
                <div className="inner_cart p-2 d-flex flex-column h-100">
                  <Link
                    to={`/nav_relate_category/product_detail?id=${items.id}`}
                    className="text-decoration-none text-dark h-100 d-flex flex-column"
                  >
                    <div className="d-flex justify-content-center">
                      <img
                        className="bg-secondary img-fluid"
                        src={items.picture}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>

                    <h5 className="mt-3 line-clamp-3 ">{items.name}</h5>
                    <h6 className="text-break line-clamp-3">
                      {items.description}
                    </h6>

                    <div className="star_rate mt-2">
                      <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <label style={{ fontSize: "12px", marginLeft: "5px" }}>
                          & Up
                        </label>
                      </div>
                    </div>

                    <span className="d-flex text-dark mt-2">
                      <span style={{ fontSize: "14px" }} className="mt-1">
                        $
                      </span>
                      <span className="fs-4">{items.price}</span>
                    </span>

                    <div className="delivery mt-2 text-dark">
                      <p style={{ lineHeight: "4px", fontSize: "13px" }}>
                        Delivery <strong>Tue, Nov 7</strong>
                      </p>
                      <p style={{ lineHeight: "4px", fontSize: "12px" }}>
                        ships to Cambodia
                      </p>
                      <p
                        style={{ lineHeight: "4px", fontSize: "13px" }}
                        className="fw-semibold"
                      >
                        Ages: 12 months and up
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!loading && <ScrollToTop />}
      </div>
    </div>
  );
};

export default RightAsideRelateCategory;
