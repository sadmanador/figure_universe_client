import { Rating } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ReviewCard = ({ review }) => {
  const { customerName, reviewTitle, reviewBody, rating, img } = review;
  return (
    <div className="lg:grid grid-cols-2 bg-stone-300 card shadow-2xl mb-4 max-w-xl" data-aos="zoom-out-up">
      <div className="avatar p-6">
        <div className="rounded-full">
          <img src={img} />
        </div>
      </div>
      <div className="p-6">
        <Rating
          readOnly
          name="simple-controlled"
          value={rating}
          precision={0.5}
        />
        <h3 className="text-xl">{customerName}</h3>
        <h2 className="text-2xl font-bold">{reviewTitle}</h2>
        <p>{reviewBody}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
