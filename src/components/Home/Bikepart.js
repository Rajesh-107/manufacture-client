import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useDBUser from "../hooks/dbUser";
import useSinglePart from "../hooks/useSinglePart";

const Bikepart = ({ part }) => {
  const [user] = useAuthState(auth);
 
  const { _id, partName, img, description, price, minOrder, available } = part;


  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={
            img ||
            "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
          }
          alt=""
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {partName}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Minimum Order: {minOrder}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>

          <p className="leading-relaxed mb-3">
            Quantity:
            {available > 0 ? (
              ""
            ) : (
              <span class="indicator-item indicator-center indicator-middle badge badge-secondary">
                Out of Stock
              </span>
            )}
          </p>
          <p>Available: {available > 0 ? available : "Out of Stock"}</p>
          <div className="flex justify-between flex-wrap">
            <p>Minimum Order: {minOrder || "N/A"}</p>

            {useDBUser.role !== "admin" ? (
              <div className="flex justify-between flex-wrap">
                {parseInt(available) >= parseInt(minOrder) ? (
                  <Link
                    to={`/purchase/${_id}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 "
                  >
                    Buy Now
                  </Link>
                ) : (
                  <Link
                    to={`/purchase/${_id}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    disabled
                  >
                    Buy Now
                  </Link>
                )}
              </div>
            ) : (
              <div className="inline-flex justify-end ml-5 items-center">
                <Link
                  to={`/inventory/${_id}`}
                  style={{ background: "#32C6D9" }}
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Update
                </Link>
              </div>
            )}
            <span className="btn text-white py-1 px-4 bg-red-600">
              Price: {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikepart;
