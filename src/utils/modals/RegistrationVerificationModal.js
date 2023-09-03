import React, { useRef, useState } from "react";
import styles from "@/styles/RegisterModal.module.css";
import tickMark from "/public/assets/tickMark.png";
import Link from "next/link";
import { useRouter } from "next/router";

const RegistrationVerificationModal = () => {
  const [completeStep, setCompleteStep] = useState(0);
  const router = useRouter();

  const closeModalRef = useRef(null);

  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const inputRefs = useRef([]);
  const handleChange = async (index, value) => {
    if (value.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const isFilled = otp.every((digit) => digit !== "");

  const handleGoTradeMarket = () => {
    closeModalRef.current.click();
    localStorage.setItem("welcomeModal", JSON.stringify("on"));
    router.push("/");
  };

  return (
    <div>
      <div
        className="modal fade "
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close d-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeModalRef}
              ></button>
              {completeStep === 0 && (
                <div className={styles.modalContainer}>
                  <p className={styles.title}>
                    Please enter the Verification code received in your email,{" "}
                    <span>kenta@hotmail.com</span>
                  </p>
                  <div className={styles.otpInputContainer}>
                    <div className={`d-flex gap-2 mb-5 ${styles.otpInput}`}>
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          // disabled={isOtpVerified}
                          type="number"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          ref={(ref) => (inputRefs.current[index] = ref)}
                          autoComplete="off"
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.resendButtonContainer}>
                    <button>Resend Code</button>
                  </div>
                  <div className={styles.completeButtonContainer}>
                    <button
                      disabled={!isFilled}
                      onClick={() => setCompleteStep((prev) => prev + 1)}
                    >
                      Complete Verification
                    </button>
                  </div>
                </div>
              )}
              {completeStep === 1 && (
                <div className={styles.modalContainer}>
                  <div className={styles.otpSuccessContainer}>
                    <img src={tickMark.src} alt="" />
                    <h3>Registered Successfully!</h3>

                    <button onClick={handleGoTradeMarket}>
                      Go to my Turkeytrademarket
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationVerificationModal;
