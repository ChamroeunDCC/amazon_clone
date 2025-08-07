import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import NavBar from "../components/navbar";
import img_product from "../assets/single_product1.jpg";
import ReactImageMagnify from "react-image-magnify";
import { useEffect, useState } from "react";
import { fetchData } from "../util/helper";

const SingleProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const [singleData, setSingleData] = useState([]);

  const getProductById = () => {
    setLoading(true);
    fetchData(`test_api/ecommerce/${params.id}`, {}, "GET")
      .then((res) => {
        setSingleData(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductById();
  }, []);
  return (
    <>
      <Header />
      <NavBar />
      <div id="single_product">
        <div className="container">
          <div className="p-4">
            <a
              onClick={() => navigate("/nav_relate_category")}
              style={{ fontSize: "12px", cursor: "pointer" }}
              className="text-dark fw-lighter mb-2 mt-4"
            >
              <i
                style={{ marginTop: "3px" }}
                className="fa-solid fa-angle-left me-1 pe-auto"
              ></i>
              Back to results
            </a>
          </div>
          <div className="d-flex justify-content-center">
            {loading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
          <div key={singleData.id} className="single_product_group row mt-2">
            <div className="product_image col-6">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: img_product,
                  },
                  largeImage: {
                    src: img_product,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
              {/* <img width={500} src={img_product} alt="" /> */}
            </div>
            <div className="product_description col-5">
              <h5 className="text-dark">
                <strong>{singleData.name}</strong> :LEGO Super Mario Character
                Packs – Series 6 71413, Collectible Mystery Toy Figures for
                Kids, Combine with Starter Course Playset for Extra Play
              </h5>
              <h3 className="mt-5 d-flex">
                <span className="mb-4" style={{ fontSize: "18px" }}>
                  $
                </span>
                <span style={{ fontSize: "32px" }}>{singleData.price}</span>
              </h3>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
              <div className="border-bottom mt-4 mb-4"></div>

              <ul>
                <li>
                  Surprise a child with random 1 of 8 Super Mario figures in
                  each Series 5 Character Pack, containing buildable toy
                  characters with an Action Tag
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
