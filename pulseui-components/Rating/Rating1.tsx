import { Star } from "lucide-react";
import { useState } from "react";

function Rating1({
  setRating,
  initial
}: {
  setRating: React.Dispatch<React.SetStateAction<number>>;
  initial:number
}) {
  const [rating, setRatingThis] = useState(initial);

  return (
    <div className="flex items-center gap-2">
      <Star
        className={`stroke-1 cursor-pointer hover:stroke-amber-600 ${rating >= 1 ? "fill-amber-400" : ""}`}
        onClick={() => {
          if (rating !== 1) {
            setRating(1);
            setRatingThis(1);
          } else {
            setRatingThis(0);
            setRating(0);
          }
        }}
      />
      <Star
        className={`stroke-1 cursor-pointer hover:stroke-amber-600 ${rating >= 2 ? "fill-amber-400" : ""}`}
        onClick={() => {
          if (rating !== 2) {
            setRating(2);
            setRatingThis(2);
          } else {
            setRatingThis(0);
            setRating(0);
          }
        }}
      />
      <Star
        className={`stroke-1 cursor-pointer hover:stroke-amber-600 ${rating >= 3 ? "fill-amber-400" : ""}`}
        onClick={() => {
          if (rating !== 3) {
            setRating(3);
            setRatingThis(3);
          } else {
            setRatingThis(0);
            setRating(0);
          }
        }}
      />
      <Star
        className={`stroke-1 cursor-pointer hover:stroke-amber-600 ${rating >= 4 ? "fill-amber-400" : ""}`}
        onClick={() => {
          if (rating !== 4) {
            setRating(4);
            setRatingThis(4);
          } else {
            setRatingThis(0);
            setRating(0);
          }
        }}
      />
      <Star
        className={`stroke-1 cursor-pointer hover:stroke-amber-600 ${rating >= 5 ? "fill-amber-400" : ""}`}
        onClick={() => {
          if (rating !== 5) {
            setRating(5);
            setRatingThis(5);
          } else {
            setRatingThis(0);
            setRating(0);
          }
        }}
      />
    </div>
  );
}

export default Rating1;
