import React from "react";
import description from "../../../public/assets/description-sofa.png";
import description2 from "../../../public/assets/desc-sofa2.png";

const ProductDescription = () => {
  return (
    <div className="product_description">
      <div className="container">
        <div className="product_inner">
          <h4>Product Description </h4>

          <div>
            <h6>Product Overview:</h6>
            <p>
              your interior design to new heights. This sophisticated and
              comfortable sofa combines elegant design with high-quality
              materials, offering you and your family a place to relax and
              create memories.
            </p>
          </div>

          <div>
            <h6>Features:</h6>
            <p>
              <span>High-Quality Construction:</span> Crafted with carefully
              selected, premium materials for long-lasting durability and
              comfort.
            </p>
            <p>
              {" "}
              <span>Sleek Design:</span> Modern and timeless design that
              seamlessly fits into various interior styles.
            </p>
            <p>
              {" "}
              <span>Room for All:</span> Comfortably accommodates multiple
              individuals, perfect for family gatherings or socializing with
              friends.
            </p>
            <p>
              {" "}
              <span>Extra Plush Seat Cushions:</span> Generously stuffed seat
              cushions and backrests provide a luxurious feel and maximum
              relaxation.
            </p>
          </div>
          <img className="img-fluid" src={description.src} alt="" />

          <div className="table">
            <table>
              <tr>
                <th>Packaging and Delivery:</th>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Individual packaging:</span> Carefully protected to
                  minimize any potential transportation damage.{" "}
                </td>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Weight: </span>55 kg
                </td>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Delivery:</span> Standard delivery within 7-10 working
                  days (depending on the destination)
                </td>
              </tr>
            </table>
          </div>
          <p>
            Explore the comfort, elegance, and versatility of our modern corner
            sofa. Create an elegant and comfortable space in your home. Order
            today and receive this stylish addition to your interior.
          </p>
          <img className="img-fluid" src={description2.src} alt="" />
          <h6>Packaging and Delivery:</h6>
          <p>
            <span>Frame:</span> Sturdy hardwood frame provides stability and
            durability.
          </p>
          <p>
            <span>Suspension:</span> High-quality sinuous spring suspension
            system ensures even support and long-lasting comfort.
          </p>
          <p>
            <span> Cushioning:</span> Multi-density foam cushions offer the
            perfect balance between support and plushness.
          </p>

          <div className="table">
            <table className="mb-0">
              <tr>
                <td>
                  <span>Model: </span> CornerComfort Deluxe (Model Number:
                  CCX-2023)
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Material:</span> High-quality
                </td>
                <td className="text-center">durable fabric</td>
                <td></td>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Dimensions (WxDxH): </span> 240cm x 180cm x 85cm
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Seat Height:</span> 45cm
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                {" "}
                <td>
                  <span>Color Options: </span>Elegant gray
                </td>
                <td className="text-center">timeless beige</td>
                <td className="text-center">stylish black</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
