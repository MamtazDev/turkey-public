import Item from "@/components/Item";
import Pagination from "@/utils/Pagination";
import { storeItems } from "@/utils/datas/items";
import React from "react";

const StoreOverview = () => {
  return (
    <div>
      <Item items={storeItems} />
      <Pagination />
    </div>
  );
};

export default StoreOverview;
