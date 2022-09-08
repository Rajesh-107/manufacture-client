import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = ({ transactionId }) => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);

          if (res.status === 401 || res.status === 403) {
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  const handleCancelOrder = (id) => {
    const url = `http://localhost:5000/order/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders.filter((product) => product._id !== id);

          setOrders(remaining);
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Images
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Total Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="avatar">
                          <div className="w-20 rounded-full">
                            <img src={order.img} alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {order.product}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {order.price}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {order.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {order.totalPrice}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {order.status ? (
                          <p className="text-green-500">Shipped</p>
                        ) : (
                          <p className="text-red-500">Pending</p>
                        )}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {
                          !order.paid && <button
                          onClick={() => handleCancelOrder(order._id)}
                          className="btn btn-xs"
                        >
                          Delete
                        </button>
                        }
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {order.price && !order.paid && (
                          <Link
                            to={`/dashboard/payment/${order._id}`}
                            className="btn btn-xs btn-success"
                          >
                            Pay Now
                          </Link>
                        )}

                        {order.price && order.paid && (
                          <div>
                            <button className="btn btn-xs btn-success">Paid</button>
                            <p>
                              {" "}
                              <span className="text-green-500">
                                Transaction id: {order.transactionId}
                              </span>{" "}
                            </p>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
