import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51L19WzD5qkxKjAbjCVQDag0uuDNfkeNbMIw1RKGpfljCigYQRPF3jkebQomw1ceuBLClT1w9iqDKYh3AGKkhC9Mi00tmsIH1NC"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://thefinancialexpress.com.bd/uploads/1660321243.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />

          <div className="card-body">
            <h2 className="font-bold text-green-500">Hello, {order.name}</h2>
            <h2 className="font-bold text-green-500">
              Your Email, {order.email}
            </h2>
            <h2 className="card-title">Pay for{order.product}</h2>
            <p>Please Pay: ${order.totalPrice}</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
