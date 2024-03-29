import React from "react";
import banner from "../../public/assets/banner.png";

const CategorySlider = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src={banner.src} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={banner.src} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner.src} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
