import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import ToysTable from "../utility/ToysTable/ToysTable";
import { useTitle } from "../../hooks/useTitle/useTitle";

const MyToys = () => {
  const [filter, setFilter] = useState(null);
  const editable = true;
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  useTitle("My Toys")

  useEffect(() => {
    fetch(`https://figure-universe.vercel.app/myToys?email=${user?.email}&sort=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, filter]);

  return (
    <div className="text-center space-y-3 py-10 px-12">
      <h1 className="font-bold text-3xl">My Toys</h1>

      <div className="my-8 flex justify-end">
        <select
          onChange={(event) => setFilter(event.target.value)}
          className="select select-bordered"
        >
          <option disabled selected>
            Sort by
          </option>
          <option value="ascending">High Price</option>
          <option value="descending">Low Price</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Product</th>
              <th>Sub-category</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToysTable
                key={toy._id}
                toy={toy}
                setToys={setToys}
                editable={editable}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
