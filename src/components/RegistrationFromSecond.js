import Link from "next/link";
import React, { useRef } from "react";
import styles from "@/styles/Register.module.css";
import RegistrationVerificationModal from "@/utils/modals/RegistrationVerificationModal";

const RegistrationFromSecond = ({ setRegisterForm }) => {
  const registerButton = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerButton.current.click();
  };
  return (
    <>
      <form
        className={styles.registerFormSecondContainer}
        onSubmit={handleSubmit}
      >
        <div>
          <h6>Register</h6>
          <p style={{ marginBottom: "30px" }}>
            Already have an account? <Link href="signin">Login</Link>
          </p>
          <div>
            <label for="exampleInputEmail1" class="form-label">
              Full Name<span>*</span>
            </label>
            <input type="text" class="form-control" placeholder="Full name " />
          </div>
          <div>
            <label for="exampleInputPassword1" class="form-label">
              Company Address<span>*</span>
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Company address"
            />
          </div>
          <div className="d-flex gap-3">
            <div>
              <label for="exampleInputPassword1" class="form-label">
                City<span>*</span>
              </label>
              <input type="password" class="form-control" placeholder="City" />
            </div>
            <div>
              <label for="exampleInputPassword1" class="form-label">
                Zip code<span>*</span>
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Zip/postal code"
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="w-100">
              <label for="exampleInputPassword1" class="form-label">
                Province<span>*</span>
              </label>
              <input type="text" class="form-control" placeholder="Province" />
            </div>
            <div className="w-100">
              <label for="exampleInputPassword1" class="form-label">
                Business Name<span>*</span>
              </label>
              {/* <input type="text" class="form-control" placeholder="Country" /> */}
              <select
                className={`form-select w-100 ${styles.selectInput}`}
                aria-label="Default select example"
              >
                <option selected style={{ color: "#94959B" }}>
                Business Name
                </option>
                <option value="USA">Business one</option>
                <option value="Germany">Business two</option>
                <option value="Italy">Business Three</option>
              </select>
            </div>
          </div>
          <div className="w-100">
            <label for="exampleInputPassword1" class="form-label">
              Province<span>*</span>
            </label>
            <div className="d-flex  gap-2" style={{ marginBottom: "45px" }}>
              <select
                className={`form-select w-25 ${styles.selectInput}`}
                aria-label="Default select example"
              >
                <option selected>+45</option>
                <option value="+45">+880</option>
                <option value="+65">+65</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="number"
                className="form-control w-75"
                style={{ marginBottom: "unset" }}
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <input type="checkbox" name="" value="" className="mb-0" />
            <p className={`mb-0 ${styles.agreementText}`}>
              I agree to the <Link href="#">User agreement</Link> and{" "}
              <Link href="#">Privacy policy</Link>
            </p>
          </div>
          <div className="d-flex gap-5">
            <button
              type="submit"
              style={{ backgroundColor: "#F2F2F2", color: "#222" }}
              onClick={() => setRegisterForm((prev) => prev - 1)}
            >
              Back
            </button>
            <button type="submit">Register</button>
            <button
              className="btn btn-primary d-none"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              ref={registerButton}
            >
              Open first modal
            </button>
          </div>
        </div>
      </form>
      <RegistrationVerificationModal />
    </>
  );
};

export default RegistrationFromSecond;
