import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";

const ToysTable = ({ toy, editable }) => {
  const {
    _id,
    name,
    price,
    rating,
    image,
    subcategory,
    description,
    quantity,
    sellerName,
    email,
  } = toy;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://figure-universe.vercel.app/figures/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your selected toy has been deleted.",
                "success"
              );
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">{sellerName}y</div>
          <div className="text-sm opacity-50">${email}</div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>
        {subcategory}
        <br />
        <span className="badge badge-ghost badge-sm">
          {description.slice(0, 25)}...
        </span>
      </td>
      <td>
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
      </td>
      <td>{quantity}</td>
      <th>
        <Link to={`/all/${_id}`}>
          <button className="btn active btn-xs">details</button>
        </Link>
      </th>
      {editable && (
        <>
          <th>
            <Link to={`/all/${_id}`}>
              <Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">
                <FaEdit className="text-lg" />
              </Link>
            </Link>
          </th>
          <th>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost btn-xs"
            >
              <MdOutlineDelete className="text-2xl text-red-600" />
            </button>
          </th>
        </>
      )}
    </tr>
  );
};

export default ToysTable;
