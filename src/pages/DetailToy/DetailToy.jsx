import { Rating } from "@mui/material";
import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle/useTitle";

const DetailToy = () => {
  const toys = useLoaderData();
  const {
    name,
    price,
    rating,
    image,
    subcategory,
    description,
    quantity,
    sellerName,
    email,
  } = toys;
  useTitle(name)
  
  return (
    <div className="p-12">
      <div className="card lg:card-side bg-base-100 shadow-xl bg-stone-300">
        <div className="avatar p-10">
          <div className="w-96 object-none object-top mask mask-squircle">
            <img src={image} />
          </div>
        </div>
        <div className="card-body relative">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h2 className="card-title text-2xl">{name}</h2>
              <p>{description}</p>
            </div>
            <div>
              <div className="space-y-4">
                <p className="text-xl">
                  {" "}
                  <span className="font-semibold">Price:</span> ${price}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Category:</span> {subcategory}
                </p>
                <Rating
                  name="read-only"
                  value={rating}
                  precision={0.5}
                  readOnly
                />
                <p>
                  {" "}
                  <span className="font-semibold">Quantity:</span> {quantity}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Publisher Name:</span>{" "}
                  {sellerName}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Email:</span> {email}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailToy;
