import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCards from "../TabSection/ToyCards";

const DisplayToy = () => {
  const toys = useLoaderData();

  return (
    <div className="text-center">
      <h1 className="lg:text-4xl font-bold">Our Collections</h1>
      <div className="grid grid-cols-4 gap-6 justify-between">
        {toys.map((toy) => (
          <ToyCards key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default DisplayToy;
