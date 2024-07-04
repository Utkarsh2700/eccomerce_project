import React from "react";
import "./style.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

//generating stars based on rating

const generateStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className="text-gold h-4 w-4" />);
    } else if (i === Math.round(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} className="text-gold h-4 w-4" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gold h-4 w-4" />);
    }
  }
  return stars;
};

const Stars = ({ rating }) => {
  return <div className="stars items-center">{generateStars(rating)}</div>;
};

export default Stars;
