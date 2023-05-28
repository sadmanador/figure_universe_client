import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle/useTitle";

const UpdateToys = () => {
  const toys = useLoaderData();
  const { _id, image, name, price, quantity, description } = toys;
  const navigate = useNavigate();
  useTitle("Update Toy");

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedInfo = { price, quantity, description };

    fetch(`https://figure-universe.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Updated!", `${name} is updated`, "success");
          navigate('/myToys')
        }
      });
  };

  return (
    <div className="text-center space-y-3 py-10 min-h-screen ">
      <h1 className="font-bold text-3xl ">
        Update: <span className="font-normal">{name}</span>{" "}
      </h1>
      <div className="avatar">
        <div className="w-48 mask mask-hexagon">
          <img src={image} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card max-w-2xl shadow-2xl">
          <form onSubmit={handleUpdateToy} className="card-body ">
            <div className="grid grid-cols-2 gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detailed Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                defaultValue={description}
              ></textarea>
            </div>
            <div className="card-actions justify-center">
              <input
                className="btn active normal-case"
                type="submit"
                value={`Update the "${name}"`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
