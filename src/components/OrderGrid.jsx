import React from "react";
import useOrders from "../hooks/useOrders";
import capitalizeFirstLetter from "../services/capitalize-first-letter";
import formatDate from "../services/format-date";

const OrderGrid = () => {
  const { orders, loading, error } = useOrders();

  if (error) return <p>{error}</p>;

  if (loading) return <p>...</p>;

  return (
    <section className="flex flex-col gap-y-10 text-black">
      {orders.map((o) => (
        <div
          key={o.order_id}
          className="grid grid-col xs:grid-cols-2 md:grid-cols-3 gap-x-35 gap-y-3 bg-neutral-300 p-8 rounded-3xl border-1 border-solid border-neutral-400"
        >
          <p>
            Order: <span className="font-semibold">#00000000{o.order_id}</span>
          </p>
          <p className="">
            Item Ordered:{" "}
            <span className="font-semibold">{o.product_name} </span>
          </p>
          <p>
            Total: <span className="font-semibold">${o.product_price}</span>
          </p>
          <p>
            Order Status:{" "}
            <span className="font-semibold">
              {capitalizeFirstLetter(o.status)}
            </span>
          </p>
          <p>
            Order Created at:{" "}
            <span className="font-semibold">{formatDate(o.created_at)}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

export default OrderGrid;
