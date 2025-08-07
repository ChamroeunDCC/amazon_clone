import { useEffect, useState } from "react";
import test_product from "../assets/test_product.jpg";
import { Link } from "react-router-dom";
import { fetchData } from "../util/helper";

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
  // axios.get('https://6524af9bea560a22a4ea00cf.mockapi.io/test_api/ecommerce')
  //     .then(res=>{
  //         setDataProduct(res.data)
  //         setLoading(false)
  //     })
  //     .catch(err=> {
  //         console.log(err)
  //         setLoading(false)
  //     })
  // console.log(dataProduct)

  return (
    <div id="right_aside_relate_category" className="container-fluid">
      <div className="inner_right_aside_relate_category">
        <h5 className="fw-bold text-dark">Results</h5>
        <p style={{ fontSize: "14px", lineHeight: "10px" }}>
          Price and other details may vary based on product size and color
        </p>
        {loading && (
          <div
            className="spinner-border text-primary text-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        <div className="group_items row gx-3 gy-3">
          {dataProduct.map((items) => (
            <div
              key={items.id}
              className="col-6 xs-col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
              style={{ height: "550px" }}
            >
              <div className="cart w-100">
                <div className="inner_cart p-2 d-flex flex-column h-100">
                  <Link
                    to={`/nav_relate_category/single_product/${items.id}`}
                    className="text-decoration-none text-dark h-100 d-flex flex-column"
                  >
                    <div className="d-flex justify-content-center">
                      <img
                        className="bg-secondary img-fluid"
                        src={test_product}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>

                    <h6 className="text-break mt-3 line-clamp-3">
                      {items.name}: LEGO Super Mario Character Packs – Series 6
                      71413, Collectible Mystery Toy Figures for Kids, Combine
                      with Starter Course Playset for Extra Play
                    </h6>

                    <div className="star_rate mt-2">
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <label style={{ fontSize: "12px", marginLeft: "5px" }}>
                          & Up
                        </label>
                      </a>
                    </div>

                    <span className="d-flex text-dark mt-2">
                      <span style={{ fontSize: "14px" }} className="mt-1">
                        $
                      </span>
                      <span className="fs-4">{items.price}</span>
                    </span>
                  </Link>

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightAsideRelateCategory;
