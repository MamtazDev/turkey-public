import React, { useContext, useEffect } from "react";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import star from "../../public/assets/star1.png";
import message from "../../public/assets/message.png";
import user from "../../public/assets/profile.png";
import { AuthContext } from "./context/AuthContext";

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [isSignedIn, setIsSignedIn] = React.useState(false);


  useEffect(() => {
    const isLoggedValue = isLoggedIn();
    console.log("isLoggedIn", isLoggedValue);
    setIsSignedIn(isLoggedValue);
  }, [isSignedIn]);
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand p-0" href="/">
            <img src={logo.src} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mt-5 mt-md-0">
                <Link class="nav-link p-0" aria-current="page" href="#">
                  <img src={star.src} alt="" /> Saved
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link p-0" aria-current="page" href="#">
                  <img src={message.src} alt="" /> Messages
                </Link>
              </li>
              {isSignedIn && (
                <li class="nav-item">
                  <Link
                    class="nav-link register_btn"
                    aria-current="page"
                    href="/seller-store"
                  >
                    <img src={user.src} alt="" />
                    Account
                  </Link>
                </li>
              )}

              {!isSignedIn && (
                <li class="nav-item ">
                  <Link
                    class="nav-link register_btn"
                    aria-current="page"
                    href="#"
                  >
                    <img src={user.src} alt="" /> Sign In/ Register
                  </Link>
                  <ul class="child  ms-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                      <Link
                        class="nav-link register_btn"
                        aria-current="page"
                        href="/signin"
                      >
                        Log In
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link p-0"
                        aria-current="page"
                        href="/register"
                      >
                        Register as a Buyer
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link p-0"
                        aria-current="page"
                        href="/seller-register"
                      >
                        Register as a Seller
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
