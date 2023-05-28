import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const ToyCards = ({ toy }) => {
  const { name, price, rating, image, _id } = toy;

  return (
    <div
      className="m-4 lg:m-0 card max-w-md bg-base-100 shadow-xl bg-stone-300"
      data-aos="zoom-out-up"
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="toy-figures" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
        <div className="card-actions">
          <button className="btn active">
            <Link to={`/all/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCards;
