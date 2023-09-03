import React, { useState } from "react";
import login from "../../public/assets/login-banner.png";
import checkbox from "../../public/assets/checkbox.png";
import checked from "../../public/assets/checked.png";
import Link from "next/link";
import RegistrationFromSecond from "@/components/RegistrationFromSecond";

const RegisterPage = () => {
  const [checkIcon, setCheckIcon] = useState(false);
  const [registerForm, setRegisterForm] = useState(1);

  return (
    <div className="login">
      <div className="row m-0">
        <div className="col-12 col-lg-6 my-auto">
          {registerForm === 1 && (
            <form>
              <div>
                <h6>Register</h6>
                <p>
                  Already have an account? <Link href="signin">Login</Link>
                </p>
                <div>
                  <label for="exampleInputEmail1" class="form-label">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email "
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label for="exampleInputPassword1" class="form-label">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label for="exampleInputPassword1" class="form-label">
                    Repeat Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label for="exampleInputPassword1" class="form-label">
                    Company Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Name"
                  />
                </div>

                <div className="d-flex gap-5">
                  <button
                    type=""
                    style={{ backgroundColor: "#F2F2F2", color: "#909090" }}
                    disabled
                  >
                    Back
                  </button>
                  <button
                    type=""
                    onClick={() => setRegisterForm((prev) => prev + 1)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          )}
          {registerForm === 2 && (
            <RegistrationFromSecond setRegisterForm={setRegisterForm} />
          )}
        </div>
        <div className="col-12 col-lg-6 p-0 mb-5 mb-lg-0   d-none d-lg-block">
          <img
            style={{ height: "100vh" }}
            className="img-fluid w-100"
            src={login.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
