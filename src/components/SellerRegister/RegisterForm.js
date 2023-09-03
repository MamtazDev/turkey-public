import RegistrationSuccess from "@/utils/modals/RegistrationSuccess";
import Link from "next/link";
import React, { useRef } from "react";

const RegisterForm = () => {
  const closeModalRef = useRef(null);
  return (
    <div className="sr_form">
      <div className="container">
        <p className="title">Please fill in this form</p>
        <form>
          {/* Company Address part */}
          <div className="form_gap">
            <p className="subtitle">Company Address</p>
            <div className="row">
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    Country <span>*</span>
                  </label>
                  <input className="px-2" type="text" placeholder="Country" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    Province <span>*</span>
                  </label>
                  <input className="px-2" type="text" placeholder="Province" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    City <span>*</span>
                  </label>
                  <input className="px-2" type="text" placeholder="City" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    Address <span>*</span>
                  </label>
                  <input className="px-2" type="text" placeholder="City" />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <label>
                    Postalcode <span>*</span>
                  </label>
                  <input
                    className="px-2"
                    type="text"
                    placeholder="Postalcode"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Business information part */}
          <div className="form_gap">
            <p className="subtitle">Business information </p>
            <div className="row">
              <div className="col-12">
                <div>
                  <label>
                    Business name <span>*</span>
                  </label>
                  <input className="px-2" type="text" placeholder="Country" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    Business registration Certificate <span>*</span>
                  </label>
                  <input className="px-2" type="file" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    Business certificate Number <span>*</span>
                  </label>
                  <input
                    className="px-2"
                    type="text"
                    placeholder="Business certificate number"
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <label>
                    Company website <span>*</span>
                  </label>
                  <input
                    className="px-2"
                    type="text"
                    placeholder="Company website"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Tax information part */}
          <div className="form_gap">
            <p className="subtitle">Tax information </p>
            <div className="row">
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    KDV Number <span>*</span>
                  </label>
                  <input
                    className="px-2"
                    type="number"
                    placeholder="KDV Number"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <label>
                    KDV certificate <span>*</span>
                  </label>
                  <input className="px-2" type="file" />
                </div>
              </div>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <input
                style={{ width: "unset" }}
                type="checkbox"
                className="mb-0"
              />
              <p className="agree">
                I agree to Turkeytrademarket{" "}
                <Link href="#"> Terms and conditions</Link>{" "}
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              className=" submit_btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Submit
            </button>
          </div>
        </form>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-body">
                {" "}
                <button
                  ref={closeModalRef}
                  style={{ position: "absolute", right: "40px" }}
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <RegistrationSuccess closeModalRef={closeModalRef}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
