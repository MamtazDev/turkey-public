import React from "react";
import BrowseCategory from "./BrowseCategory";
import CategorySlider from "./CategorySlider";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="browse_category">
          <div className="row">
            <div className="col-12 col-lg-4">
              <BrowseCategory />
            </div>
            <div className="col-12 col-lg-8">
              <CategorySlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
