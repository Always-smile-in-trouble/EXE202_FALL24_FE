import React from "react";
import { Link } from "react-router-dom";

function CourtItems({ court }) {
  return (
    <div className="court-item flex items-center p-4 border-b border-gray-200">
      <img
        src={court.image}
        alt={court.name}
        className="w-44 h-32 object-cover rounded-md mr-4" // Sử dụng w-48 h-48 cho ảnh lớn hơn
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{court.name}</h3>
        <p className="text-gray-600">{court.address}</p>
        <p className="text-yellow-500">
          ⭐ {court.rating} ({court.reviews})
        </p>
        <Link
          to={`/court/${court.id}`}
          className="text-green-600 font-bold mt-2 inline-block"
        >
          Đặt lịch
        </Link>
      </div>
    </div>
  );
}

export default CourtItems;
