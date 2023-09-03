import ProductBanner from "@/components/SellerProduct/ProductBanner";
import ProductDescription from "@/components/SellerProduct/ProductDescription";
import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <ProductBanner />
      <ProductDescription />
    </div>
  );
};

export default Details;
