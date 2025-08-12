import { useLocation, useNavigate, useParams } from "react-router-dom";
import img_product from "../assets/single_product1.jpg";
import ReactImageMagnify from "react-image-magnify";
import { useEffect, useState } from "react";
import { fetchData } from "../util/helper";
import LoadingItachiSharingan from "../components/loading";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get("id");
  // Load cart from localStorage or start with empty array
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Add product to cart and save to localStorage
  const addToCart = () => {
    const productToAdd = {
      id: singleData.id,
      name: singleData.name,
      price: singleData.price,
      qty: 1,
      image: img_product,
    };

    // Check if product already exists in cart
    const existingIndex = cart.findIndex((item) => item.id === productToAdd.id);
    let updatedCart = [];

    if (existingIndex >= 0) {
      // Update quantity
      updatedCart = [...cart];
      updatedCart[existingIndex].qty += 1;
    } else {
      updatedCart = [...cart, productToAdd];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const [singleData, setSingleData] = useState([]);

  const getProductById = () => {
    setLoading(true);
    fetchData(`test_api/ecommerce/${id}`, {}, "GET")
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
              <LoadingItachiSharingan />
            </div>
          ) : (
            <>
              {/* Product Image */}
              <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: singleData.name,
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
              </div>

              {/* Product Details */}
              <div className="col-lg-5 col-md-6 col-sm-12">
                <h4 className="text-dark fw-semibold">
                  {singleData.name} : LEGO Super Mario Character Packs – Series
                  6 71413, Collectible Mystery Toy Figures for Kids, Combine
                  with Starter Course Playset for Extra Play
                </h4>

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
                    Surprise a child with 1 of 8 Super Mario figures in each
                    Series 5 Character Pack, containing buildable toy characters
                    with an Action Tag.
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
