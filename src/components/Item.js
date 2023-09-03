import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Item = ({ items }) => {
  const pathname = usePathname();
  return (
    <div className="item_parent">
      <div className="items">
        <div style={{ gap: "49px" }} className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Link
              href={`/product/${item.name}`}
              key={index}
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="item"
            >
              <img className="img-fluid w-100 " src={item.pic.src} alt="" />
              <div style={{ padding: "21px 18px" }}>
                <p className={`${pathname === "/" && "text-center"} name`}>
                  {item.name}
                </p>
                {pathname !== "/" && (
                  <>
                    <p className="price">
                      US$ {item.price}/ <span>piece</span>
                    </p>

                    <p className="amount">{item.amount} Pieces (MOQ)</p>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
