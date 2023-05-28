
import { useEffect } from 'react';
import { useState } from 'react';
import ToyCards from '../../Home/TabSection/ToyCards/ToyCards';

const TabCardGroup = ({category}) => {
    const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://figure-universe.vercel.app/figures?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  return (
    <div className="lg:grid grid-cols-4 gap-6 justify-between">
      {toys.map((toy) => (
        <ToyCards key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default TabCardGroup;