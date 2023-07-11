import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { Order } from "@/models/Order";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fulfilled, setFulfilled] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
      setIsLoading(false);
    });
  }, [fulfilled]);

  async function handleFulfill(id) {
    await axios.post(`/api/orders?id=${id}`);
    setFulfilled((prev) => !prev);
  }

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <th>Products</th>
            <th>Fulfill</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={5}>
                <div className="py-4">
                  <Spinner fullWidth={true} />
                </div>
              </td>
            </tr>
          )}
          {orders.length > 0 &&
            orders.map((order) => {
              if (order.fulfilled) return null;
              return (
                <tr key={order._id}>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td
                    className={order.paid ? "text-green-600" : "text-red-600"}
                  >
                    {order.paid ? "YES" : "NO"}
                  </td>
                  <td>
                    {order.name} {order.email}
                    <br />
                    {order.city} {order.postalCode}
                    <br />
                    {order.country}
                    <br />
                    {order.streetAddress}
                  </td>
                  <td>
                    {order.line_items.map((line) => (
                      <div key={line.price_data.product_data.name}>
                        {line.price_data.product_data.name} x {line.quantity}{" "}
                      </div>
                    ))}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleFulfill(order._id)}
                    >
                      &#x2713;
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}
