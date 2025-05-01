import React from "react";
import useOrders from "../hooks/useOrders";

const OrderCard = () => {
  const { orders, loading, error } = useOrders();

  if (error) return <p>{error}</p>;

  if (loading) return <p>...</p>;

  return (
    <ul>
      {orders.map((order) => (
        <li key={order.order_id}>{order.status}</li>
      ))}
    </ul>
  );
};

export default OrderCard;
