import { useLocation, useNavigate } from "react-router-dom";
import img_product from "../assets/single_product1.jpg";
import ReactImageMagnify from "react-image-magnify";
import { useEffect, useState } from "react";
import { fetchData } from "../util/helper";
import LoadingItachiSharingan from "../components/LoadingItachiSharingan";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import Loading2 from "../components/Loading2";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [singleData, setSingleData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get ID from query param
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get("id");

  // Add product to Redux cart
  const addToCart = () => {
    if (!singleData.id) return;

    const productToAdd = {
      id: singleData.id,
      name: singleData.name,
      description: singleData.description,
      price: singleData.price,
      qty: 1,
      image: img_product,
    };

    dispatch(addItem(productToAdd));
  };

  // Fetch product details
  const getProductById = () => {
    setLoading(true);
    fetchData(`test_api/ecommerce/${id}`, {}, "GET")
      .then((res) => {
        setSingleData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <div
      id="product_detail"
      className="py-4"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        {/* Back to results */}
        <div
          onClick={() => navigate("/nav_relate_category")}
          className="text-dark fw-light mb-3 d-flex align-items-center"
          style={{ fontSize: "13px", cursor: "pointer" }}
        >
          <i className="fa-solid fa-angle-left me-2"></i>
          Back to results
        </div>

        <div className="row g-4 justify-content-center">
          {loading ? (
            <div className="text-center py-5">
              <Loading2 />
            </div>
          ) : (
            <>
              {/* Product Image */}
              <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: singleData.picture,
                      isFluidWidth: true,
                      src: singleData.picture,
                    },
                    largeImage: {
                      src: singleData.picture,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </div>

              {/* Product Details */}
              <div className="col-lg-5 col-md-6 col-sm-12">
                <h4 className="text-dark fw-semibold">{singleData.name}</h4>
                <h4 className="text-dark ">{singleData.description}</h4>

                {/* Price */}
                <div className="mt-3">
                  <span className="text-muted" style={{ fontSize: "18px" }}>
                    $
                  </span>
                  <span style={{ fontSize: "32px" }} className="fw-bold ms-1">
                    {singleData.price}
                  </span>
                </div>

                {/* Add to Cart */}
                <div className="mt-4">
                  <button
                    onClick={addToCart}
                    className="btn w-100 text-dark"
                    style={{ backgroundColor: "#FFD814", fontWeight: "bold" }}
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Divider */}
                <hr className="my-4" />

                {/* Description */}
                <ul className="ps-3">
                  <li style={{ fontSize: "14px" }}>
                    Surprise a child with a fun collectible figure and buildable
                    toy character.
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
