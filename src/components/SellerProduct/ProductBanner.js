import React, { useState } from "react";
import banner from "../../../public/assets/product-banner.png";
import sms from "../../../public/assets/smsicon.png";
import star from "../../../public/assets/green-star.png";
import product1 from "../../../public/assets/product1.png";
import product2 from "../../../public/assets/product2.png";
import product3 from "../../../public/assets/product3.png";
import ProductSlider from "./ProductSlider";
import Link from "next/link";
import ReactImageZoom from "react-image-zoom";

const ProductBanner = () => {
  const [selectedImage, setSelectedImage] = useState(banner);
  const products = [
    {
      pic: product1,
    },
    {
      pic: product2,
    },
    {
      pic: product3,
    },
    {
      pic: product1,
    },
    {
      pic: product2,
    },
    {
      pic: product3,
    },
  ];
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log(setSelectedImage);
  };
  // const zoomProps = {
  //   width: 500,
  //   height: 415,
  //   zoomWidth: 500,
  //   img: selectedImage.src,
  //   scale: 1,
  //   zoomPosition: "original",
  //   zoomStyle: { border: "2px solid red", borderRadius: "8px" },
  //   zoomLensStyle: { borderColor: "blue" },
  // };
  return (
    <div className="product_banner">
      <div className="container">
        <div className="product_inner">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6">
              {selectedImage && (
                <img
                  style={{ height: "415px" }}
                  className="w-100 img-fluid"
                  src={selectedImage.src}
                  alt="Selected"
                />
              )}
              {/* {selectedImage && <ReactImageZoom {...zoomProps} />} */}
            </div>
            <div className="col-12 col-lg-6">
              <h4>
                High Quality Combination Of sofa Living Room Furniture with
                extra soft textile.
              </h4>
              <h5>
                € 385-400/ <span>piece</span>{" "}
              </h5>
              <div className="d-flex gap-3">
                <div>
                  <p>Seller</p>
                  <p>MOQ </p>
                  <p>Model nr </p>
                  <p>Lead time </p>
                </div>
                <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div>
                  <Link
                    style={{ marginBottom: "23px" }}
                    href="/seller-store"
                    className="text-primary fw-bold text-decoration-none d-block"
                  >
                    Coupon history{" "}
                  </Link>
                  <p style={{ fontWeight: "400" }}>1000 pieces</p>
                  <p style={{ fontWeight: "400" }}>778469</p>
                  <p style={{ fontWeight: "400" }}>15-45 days</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-lg-6">
              <ProductSlider
                products={products}
                handleImageClick={handleImageClick}
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex gap-4 justify-content-between align-items-center h-100">
                <button className="submit_btn">
                  <img src={sms.src} alt="" /> Contact Seller
                </button>
                <button className="savePro_btn">
                  <img src={star.src} alt="" /> Save product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
