import { useEffect, useState } from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../util/helper";
import noImage from "../assets/no_image.jpg";
import ItachiSharingan from "../components/loading";
import ScrollToTop from "../components/srollTotTop";

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
      <div className="container">
        <div className="row justify-content-center gv_card_layout">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 500px)",
              }}
            >
              <ItachiSharingan />
            </div>
          ) : (
            <>
              {dataProduct?.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mb-4"
                  >
                    <div
                      className="card shadow-sm border-0 h-100"
                      style={{
                        width: "100%",
                        maxWidth: "18rem",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/nav_relate_category")}
                    >
                      <img
                        src={items.picture}
                        alt={items.name}
                        className="card-img-top"
                        style={{ height: "180px", objectFit: "cover" }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = noImage; // Replace with your actual path
                        }}
                      />

                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-semibold text-truncate">
                          {items.name}
                        </h5>
                        <p className="text-muted small mb-2">
                          {items.description || "Short product description..."}
                        </p>

                        <div className="row">
                          {/* <span className="col-12 col-md-6 fw-bold text-primary">
                            ${items.price || "19.99"}
                          </span> */}
                          <span className="see-more-link text-decoration-none text-primary small">
                            See more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      {!loading && <ScrollToTop />}
    </div>
  );
};

export default MainHomePage;
