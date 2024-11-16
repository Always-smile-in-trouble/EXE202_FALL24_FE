import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CourtDetail({ courts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const court = courts.find((c) => c.id === parseInt(id));

  if (!court) return <p>Sân không tồn tại</p>;

  const handleBookingClick = () => {
    navigate("/choosecourt", {
      state: {
        courtName: court.name,
        courtAddress: court.address,
        courtImage: court.image,
        courtPrice: 60000, // Đơn giá mỗi sân
      },
    });
  };

  return (
    <div className="court-detail max-w-4xl mx-auto p-4 text-black">
      <Link to="/courts" className="text-green-600 mb-4 inline-block">
        ← Quay lại
      </Link>
      <img
        src={court.image}
        alt={court.name}
        className="w-full h-[370px] rounded mb-4"
      />
      <h2 className="text-3xl font-bold">{court.name}</h2>
      <p className="text-gray-600">{court.address}</p>
      <p className="text-yellow-500">
        ⭐ {court.rating} ({court.reviews})
      </p>
      <p className="text-gray-700 mt-2">Hoạt động từ {court.hours}</p>
      <p className="text-gray-700">SĐT: {court.phone}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Bảng giá sân</h3>
        <table className="table-fixed border-collapse border border-gray-300 w-full">
          <tbody>
            {court.pricing.map((price, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{price.day}</td>
                <td className="border border-gray-300 p-2">{price.time}</td>
                <td className="border border-gray-300 p-2">{price.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleBookingClick}
        className="mt-4 p-2 bg-green-600 text-white rounded"
      >
        Đặt sân ngay
      </button>
    </div>
  );
}

export default CourtDetail;
