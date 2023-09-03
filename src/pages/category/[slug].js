import Item from "@/components/Item";
import { storeItems } from "@/utils/datas/items";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container">
      <h3 className="text-center mt-5"> {slug}</h3>
      <Item items={storeItems} />
    </div>
  );
};

export default Category;
