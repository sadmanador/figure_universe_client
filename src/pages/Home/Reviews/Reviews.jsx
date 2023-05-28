import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://figure-universe.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="py-12">
      <h1 className="font-bold text-3xl text-center my-4">
        Customer Satisfaction
      </h1>
      <div className="lg:grid grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
