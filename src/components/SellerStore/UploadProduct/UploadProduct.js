import React, { useState } from "react";
import question from "../../../../public/assets/que.png";
import plusIcon from "../../../../public/assets/plus-icon.png";
import star from "../../../../public/assets/star.png";
import videoIcon from "../../../../public/assets/vedio-icon.png";

const UploadProduct = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState("onePrice");

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };
  const [inputSets, setInputSets] = useState(1);

  const handleAddMoreClick = (e) => {
    e.preventDefault();
    setInputSets((prevSets) => prevSets + 1);
  };

  return (
    <div className="upload_product">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <div>
                <label>
                  Product name <img src={question} alt="" />
                </label>
                <input type="text" placeholder="Product name" />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div>
                <label>Product category</label>
                <select>
                  <option>Select category</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div>
                <label>
                  Keyword <img src={question} alt="" />
                </label>
                <input type="text" placeholder="keyword 01" />
                <input type="text" placeholder="keyword 01" />
                <input type="text" placeholder="keyword 01" />
              </div>
            </div>

            <div className="col-12 col-lg-6 ">
              <div>
                <label>Model</label>
                <input type="text" placeholder="Model No " />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div>
                <label>Product group </label>
                <select>
                  <option>Select group </option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <label>
                Product photos <span>(max 6 photos)</span>{" "}
              </label>
              <div className="row mb-5">
                <div className="col-12 col-lg-4">
                  <div className="input_box">
                    <div className="input_inner">
                      <img src={plusIcon.src} alt="" />
                    </div>
                  </div>
                  <p className="primary d-flex align-items-center justify-content-center gap-1">
                    {" "}
                    <img src={star.src} alt="" /> Primary
                  </p>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="input_box">
                    <div className="input_inner">
                      <img src={plusIcon.src} alt="" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="dot_btn">1</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="input_box">
                    <div className="input_inner">
                      <img src={plusIcon.src} alt="" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    {" "}
                    <p className="dot_btn">2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-5">
              <label>Upload a video presentation of your company</label>
              <div className="input_box">
                <div className="input_inner">
                  <img src={videoIcon.src} alt="" />
                  <p>Drop your video here or browse</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 ">
              <div>
                <label>Unit </label>
                <select>
                  <option>Pieces </option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div>
                <label>
                  MOQ <img src={question} alt="" />
                </label>
                <input type="text" placeholder="MOQ " />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <label>FOB-price</label>
              <div className="d-flex align-items-center gap-5 mb-5">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === "ladder"}
                    onChange={() => handleCheckboxChange("ladder")}
                  />
                  <span>Ladder price</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === "onePrice"}
                    onChange={() => handleCheckboxChange("onePrice")}
                  />
                  <span>One price </span>
                </div>
              </div>

              <div style={{ maxWidth: "471px" }}>
                {Array.from({ length: inputSets }).map((_, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-5 mb-3"
                  >
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        id={`special-${index}`}
                        className="mb-0"
                        type="number"
                      />
                      <span> Pieces</span>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        style={{ width: "129px" }}
                        id={`special-price-${index}`}
                        className="mb-0"
                        type="number"
                      />
                      <span style={{ whiteSpace: "nowrap" }}>euro/ piece </span>
                    </div>
                  </div>
                ))}
                {selectedCheckbox === "ladder" && (
                  <button onClick={handleAddMoreClick} className="add_btn">
                    Add more
                  </button>
                )}
              </div>
              <div>
                <label>
                  Lead time <img src={question} alt="" />
                </label>
                <div className="d-flex align-items-center gap-4 mb-5">
                  <div className="d-flex gap-4 align-items-center">
                    <input id="special" className="mb-0" type="number" />
                    <span> -</span>
                  </div>
                  <div className="d-flex gap-4 align-items-center">
                    <input id="special" className="mb-0" type="number" />
                    <select id="special" className="mb-0">
                      <option>days</option>
                      <option>hours</option>
                      <option>weeks</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-5 pb-3">
              <div>
                <label>
                  Product details{" "}
                  <span>(Write a detailed description of your product)</span>{" "}
                </label>
                <textarea rows="16"></textarea>
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-between align-items-center">
              <button className=" submit_btn" type="submit">
                Submit
              </button>
              <button className="save_btn">Save as draft</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
