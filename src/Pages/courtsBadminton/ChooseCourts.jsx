import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ChooseCourts() {
  const courtsData = [
    {
      id: 1,
      name: "Court 1",
      image: "https://sanbaokim.com/upload/images/san-cau-long-01.jpg",
    },
    {
      id: 2,
      name: "Court 2",
      image:
        "https://sieuthicaulong.vn/images/badminton-yard/1693450009_gallery_2021-12-11.jpg",
    },
    {
      id: 3,
      name: "Court 3",
      image:
        "https://binhngan.com/wp-content/uploads/2017/02/hinh-anh-thuc-te-tham-san-cau-long-tinsue-bc-600.jpg",
    },
    {
      id: 4,
      name: "Court 4",
      image: "https://thamcaulong.vn/upload_images/images/2022/04/14/3(7).jpg",
    },
    {
      id: 5,
      name: "Court 5",
      image:
        "https://mekongsport.com/public/uploads/gallery/TdPe_tham%20cau%20long%204.png",
    },
  ];

  const location = useLocation();
  const { courtName, courtAddress } = location.state || {};
  const [selectedCourts, setSelectedCourts] = useState([]);
  const [courtTimes, setCourtTimes] = useState({});
  const navigate = useNavigate();

  const handleCheckboxChange = (courtId) => {
    setSelectedCourts((prevSelected) => {
      const newSelected = prevSelected.includes(courtId)
        ? prevSelected.filter((id) => id !== courtId)
        : [...prevSelected, courtId];

      if (!courtTimes[courtId] && newSelected.includes(courtId)) {
        setCourtTimes((prevTimes) => ({
          ...prevTimes,
          [courtId]: "",
        }));
      }

      return newSelected;
    });
  };

  const handleTimeChange = (courtId, time) => {
    setCourtTimes((prevTimes) => ({
      ...prevTimes,
      [courtId]: time,
    }));
  };

  const handleCheckInfo = () => {
    const selectedCourtNames = selectedCourts.reduce((acc, courtId) => {
      const court = courtsData.find((court) => court.id === courtId);
      if (court) {
        acc[courtId] = court.name;
      }
      return acc;
    }, {});

    navigate("/bookinginfo", {
      state: {
        selectedCourts,
        courtTimes,
        courtPrice: 60000,
        courtName,
        courtAddress,
        courtNames: selectedCourtNames,
      },
    });
  };

  // Kiểm tra xem người dùng đã chọn sân và giờ chưa
  const isFormValid =
    selectedCourts.every(
      (courtId) => courtTimes[courtId] // Kiểm tra nếu đã chọn giờ cho sân đó
    ) && selectedCourts.length > 0;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-8 text-green-500">
        Chọn sân cầu lông
      </h1>
      {courtName && courtAddress && (
        <div className="mb-4 text-black">
          <p className="text-lg font-medium">Tên sân: {courtName}</p>
          <p className="text-lg">Địa chỉ: {courtAddress}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-black">
        {courtsData.map((court) => (
          <div
            key={court.id}
            className="court-card p-4 rounded-lg shadow-lg border hover:shadow-2xl transition duration-300 ease-in-out relative"
          >
            <img
              src={court.image}
              alt={court.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-center mb-2">
              {court.name}
            </h3>
            <div className="mb-4 relative">
              <label
                htmlFor={`time-${court.id}`}
                className="block text-sm font-medium text-green-600 mb-2"
              >
                Thời gian chơi
              </label>
              <select
                id={`time-${court.id}`}
                value={courtTimes[court.id] || ""}
                onChange={(e) => handleTimeChange(court.id, e.target.value)}
                className="w-full p-2 border rounded-md bg-transparent"
              >
                <option value="">Chọn thời gian</option>
                <option value="9:00 - 10:00 AM">9:00 - 10:00 AM</option>
                <option value="10:00 - 11:00 AM">10:00 - 11:00 AM</option>
                <option value="11:00 - 12:00 AM">11:00 - 12:00 AM</option>
                <option value="12:00 - 13:00 PM">12:00 - 13:00 PM</option>
                <option value="17:00 - 18:00 PM">17:00 - 18:00 PM</option>
                <option value="18:00 - 19:00 PM">18:00 - 19:00 PM</option>
                <option value="19:00 - 20:00 PM">19:00 - 20:00 PM</option>
                <option value="20:00 - 21:00 PM">20:00 - 21:00 PM</option>
              </select>

              {/* Hiển thị thông báo nếu chưa chọn thời gian */}
              {!courtTimes[court.id] && selectedCourts.includes(court.id) && (
                <p className="absolute text-red-500 text-sm mt-2 top-full left-0 w-full">
                  Vui lòng chọn thời gian
                </p>
              )}
            </div>
            <div className="absolute top-2 right-2">
              <input
                type="checkbox"
                checked={selectedCourts.includes(court.id)}
                onChange={() => handleCheckboxChange(court.id)}
                className="accent-green-500 transform scale-150"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 right-8">
        <button
          onClick={handleCheckInfo}
          disabled={!isFormValid} // Vô hiệu hóa nút nếu không chọn đủ sân và giờ
          className={`relative px-6 py-3 ${
            isFormValid
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out`}
        >
          Kiểm tra thông tin đặt sân
          {selectedCourts.length > 0 && (
            <span className="absolute top-[-12px] right-[-2px] bg-red-500 text-white text-lg rounded-full w-7 h-7 flex items-center justify-center">
              {selectedCourts.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default ChooseCourts;
