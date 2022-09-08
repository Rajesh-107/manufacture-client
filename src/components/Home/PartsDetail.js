import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PartsDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [update, setUpdate] = useState({});
  const [quantity, setQuantity] = useState(200);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/purchase/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [update, id]);

  const increaseQuantity = () => {
    if (
      inventory.availablequantity <= quantity &&
      inventory.availablequantity >= 5
    )
      return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (inventory.minquantity >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const price = parseFloat(inventory.price);
    const order = {
      name: user.displayName,
      email: user.email,
      product: inventory.partName,
      img: inventory.img,
      price: parseFloat(inventory.price),
      productId: id,
      quantity: event.target.quantity.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      totalPrice: parseFloat(price*quantity),
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast.success('your order placed successfully');
        event.target.reset();
      });
  };
  return (
    <div className="hero min-h-screen">
      <form onSubmit={handlePlaceOrder}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={inventory.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">
              Product name:{inventory.partName}
            </h1>
            <p className="py-6">{inventory.description}</p>
            <p className="text-red-500 font-bold">Price: {inventory.price}</p>
            <p className="text-lg">Quantity: {inventory.available}</p>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Enter Quantity</span>
              </label>
              <label className="input-group">
                <span onClick={decreaseQuantity}>-</span>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  className="input input-bordered focus:outline-none"
                />
                <span onClick={increaseQuantity}>+</span>
              </label>
            </div>

            <label className="form-control">
              <input
                type="text"
                className="input input-bordered  focus:outline-none mb-2  "
                value={user?.displayName}
              />
            </label>
            <label className="form-control">
              <input
                type="email"
                className="input input-bordered  focus:outline-none mb-2  "
                value={user?.email}
              />
            </label>
            <label className="form-control">
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                className="input input-bordered  focus:outline-none mb-2  "
              />
            </label>
            <label className="form-control">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="input input-bordered  focus:outline-none mb-2  "
              />
            </label>

            <button className="btn btn-red my-3">Place order</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartsDetail;
