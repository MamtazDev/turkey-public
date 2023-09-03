import React, { useRef, useState } from "react";
import picIcon from "../../../public/assets/pic-icon.png";
import plusIcon from "../../../public/assets/plus-icon.png";
import videoIcon from "../../../public/assets/vedio-icon.png";

const CompanyForm = () => {
  const [companyInfo, setCompanyInfo] = useState({ certificates: [] });
  const [certificate, setCertificate] = useState([]);

  const logoInputRef = useRef();
  const videoInputRef = useRef();
  const certificate1Ref = useRef();
  const certificate2Ref = useRef();
  const certificate3Ref = useRef();

  const InputChange = (e, type) => {
    if (type === "file") {
      setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.files[0] });
    }
    if (type === "text") {
      setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
    }
  };

  const certificateInputChange = (e) => {
    const newCertificate = { [e.target.name]: e.target.files[0] };
    setCertificate((prevCertificates) => [...prevCertificates, newCertificate]);
    setCompanyInfo((prevCompanyInfo) => ({
      ...prevCompanyInfo,
      certificates: [...prevCompanyInfo.certificates, newCertificate],
    }));
  };

  console.log(companyInfo, "companyInfo");

  return (
    <div className="company_form">
      <div className="container">
        <div>
          <input
            name="logo"
            type="file"
            className="d-none"
            accept="image/*"
            ref={logoInputRef}
            onChange={(e) => InputChange(e, "file")}
          />
          <input
            type="file"
            name="certificate1"
            ref={certificate1Ref}
            onChange={certificateInputChange}
            className="d-none"
          />
          <input
            type="file"
            name="certificate2"
            ref={certificate2Ref}
            onChange={certificateInputChange}
            className="d-none"
          />
          <input
            type="file"
            name="certificate3"
            ref={certificate3Ref}
            onChange={certificateInputChange}
            className="d-none"
          />
          <input
            type="file"
            name="video"
            className="d-none"
            accept="video/mp4,video/x-m4v,video/*"
            ref={videoInputRef}
            onChange={(e) => InputChange(e, "file")}
          />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <div>
              <label>Company info</label>
              <textarea
                rows="7"
                name="info"
                onChange={(e) => InputChange(e, "text")}
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <label>Logo</label>
            {companyInfo.logo ? (
              <div
                className="input_box"
                onClick={() => logoInputRef.current.click()}
              >
                <img
                  src={URL.createObjectURL(companyInfo?.logo)}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div
                className="input_box"
                onClick={() => logoInputRef.current.click()}
              >
                <div className="input_inner">
                  <img className="img-fluid " src={picIcon.src} alt="" />
                  <p>Drop your image here or browse</p>
                </div>
              </div>
            )}
          </div>
          <div className="col-12 col-lg-6 ">
            <label>Add Certificates</label>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div
                  onClick={() => certificate1Ref.current.click()}
                  className="input_box"
                >
                  <div className="input_inner">
                    <img src={plusIcon.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="input_box">
                  <div
                    onClick={() => certificate2Ref.current.click()}
                    className="input_inner"
                  >
                    <img src={plusIcon.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="input_box">
                  <div
                    onClick={() => certificate3Ref.current.click()}
                    className="input_inner"
                  >
                    <img src={plusIcon.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <label>Upload a video presentation of your company</label>
            <div
              onClick={() => videoInputRef.current.click()}
              className="input_box"
            >
              <div className="input_inner">
                <img src={videoIcon.src} alt="" />
                <p>Drop your video here or browse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
