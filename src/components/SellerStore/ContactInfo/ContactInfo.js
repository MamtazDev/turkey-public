import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact_info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <label>Email Address</label>
            <input type="email" placeholder="Contact Seller for Details" />
          </div>
          <div className="col-12 col-md-6">
            <label>
              Telephone No <span>(Contact seller for details)</span> :{" "}
            </label>
            <input type="tel" placeholder="123456789 " />
          </div>
          <div className="col-12 col-md-6">
            <label>Province</label>
            <input type="text" placeholder="Kronoberg " />
          </div>
          <div className="col-12 col-md-6">
            <label>City</label>
            <input type="text" placeholder="Stockholm " />
          </div>
          <div className="col-12 col-md-6">
            <label>Address</label>
            <input type="text" placeholder="Storgatan29 " />
          </div>
          <div className="col-12 col-md-6">
            <label>Postalcode</label>
            <input type="number" placeholder="36258 " />
          </div>
        </div>
        <div className="social_media">
          <h5>Social Media</h5>
          <div className="d-flex justify-content-between">
            <p>
              Facebook :<span> Facebook.jajdjhgkdasl </span>
            </p>
            <p>
              Instagram :<span> instagram.hskdkjshkjdn</span>
            </p>
            <p>
              Twitter :<span> twitter.bajdbkjsd</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
