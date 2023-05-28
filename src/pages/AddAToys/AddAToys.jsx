import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import Swal from "sweetalert2";
import { Rating } from "@mui/material";
import { useTitle } from "../../hooks/useTitle/useTitle";

const AddAToys = () => {
  useTitle("Insert A Toy");
  const { user } = useContext(AuthContext);
  const [category, setSubcategory] = useState("");
  const [rating, setRating] = useState(0);

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = user.email;
    const price = form.price.value;
    const subcategory = category;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
      image,
      name,
      sellerName,
      email,
      price,
      rating,
      subcategory,
      description,
      quantity,
    };

    fetch(`https://figure-universe.vercel.app/figures`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Toy Added!",
            "You toy is added to the database!",
            "success"
          );
          form.reset();
        }
      });
  };

  return (
    <div className="text-center space-y-3 py-10">
      <h1 className="font-bold text-3xl">Add a new Toy</h1>
      <div className="flex justify-center">
        <div className="card max-w-2xl shadow-2xl">
          <form onSubmit={handleAddAToy} className="card-body ">
            <div className="grid grid-cols-2 gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  required
                  name="image"
                  placeholder="photo url"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="sellerName"
                  placeholder="seller name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  readOnly
                  name="email"
                  placeholder={user?.email}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  required
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>

                <Rating
                  required
                  name="simple-controlled"
                  value={rating}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  required
                  name="quantity"
                  placeholder="quantity"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <select
                  required
                  onChange={(event) => setSubcategory(event.target.value)}
                  className="select select-bordered"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Marvel">Marvel</option>
                  <option value="Transformer">Transformer</option>
                  <option value="Star Wars">Star Wars</option>
                  <option value="Anime">Anime</option>
                  <option value="Disney">Disney</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detailed Description</span>
              </label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered h-24"
                placeholder="description"
              ></textarea>
            </div>
            <div className="card-actions justify-center">
              <input
                className="btn active"
                type="submit"
                value="Add to Database"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToys;
