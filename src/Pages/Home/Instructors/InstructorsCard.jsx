import React from 'react';
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const InstructorsCard = ({staff}) => {
    const { name, image, designation, experience, ratings } = staff;
    return (
      <div className="card card-compact max-w-md  shadow-xl">
        <figure>
          <img
            className="w-96 h-96 object-cover hover:grayscale transition-all duration-300"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-gray-800 dark:text-white">
          <h2 className="card-title ">{name}</h2>
          <p className="-mt-4">{designation}</p>
          <p className="-mt-2 text-base">
            <span className="font-semibold">Experience:</span> {experience}{" "}
            years
          </p>
          <p className="-mt-2 text-base flex gap-2 items-center">
            <span className="font-semibold">Ratings:</span>{" "}
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(ratings || 0)}
              readOnly
            />
            {ratings}
          </p>
        </div>
      </div>
    );
};

export default InstructorsCard;