import { useEffect, useRef, useState } from "react";
import ToysTable from "../utility/ToysTable/ToysTable";
import { useTitle } from "../../hooks/useTitle/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [filter, setFilter] = useState("");
  const searchInput = useRef(null);
  useTitle("All Toys")

  const handleSearch = () => {
    let inputData = searchInput.current.value;
    setFilter(inputData);
    searchInput.current.value = "";
  };

  useEffect(() => {
    if (filter) {
      fetch(`https://figure-universe.vercel.app/figures?name=${filter}`)
        .then((res) => res.json())
        .then((data) => setToys(data));
    } else if (!filter) {
      fetch(`https://figure-universe.vercel.app/figures`)
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  }, [filter]);

  return (
    <div className="text-center space-y-3 py-10 px-12">
      <h1 className="font-bold text-3xl">All Toys</h1>

      <div className="text-center my-4 space-x-2">
        <input
        
          type="text"
          ref={searchInput}
          placeholder="Search by name"
          className=" input input-bordered w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn active normal-case">
          Search
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Product</th>
              <th>Sub-category</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToysTable key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
