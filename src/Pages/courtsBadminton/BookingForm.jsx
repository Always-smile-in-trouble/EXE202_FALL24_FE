import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiNotebook } from "react-icons/gi";

function BookingForm({ courtsData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    selectedCourts,
    courtTimes,
    courtPrice,
    courtName,
    courtAddress,
    courtNames,
  } = location.state || {};

  // State to handle the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  const calculateTotalPrice = () => {
    return selectedCourts.length * courtPrice;
  };

  const calculateTotalHours = () => {
    return selectedCourts.length; // Adjust based on actual hours if needed
  };

  const handlePayment = () => {
    navigate("/paymentbooking", {
      state: {
        bookingDate: selectedDate.toLocaleDateString("vi-VN"),
        selectedCourts: selectedCourts.map((courtId) => ({
          name: courtNames[courtId],
          time: courtTimes[courtId],
        })),
        totalPrice: calculateTotalPrice(),
      },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center mb-5 gap-2">
          <h1 className="text-2xl font-semibold text-center text-green-600">
            Thông tin đặt lịch
          </h1>
          <GiNotebook className="text-xl text-green-600 " />
        </div>

        {courtName && courtAddress && (
          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Tên sân : <span className="text-green-600">{courtName}</span>
            </h3>
            <p className="text-sm text-gray-600">Địa chỉ: {courtAddress}</p>
          </div>
        )}

        <div className="mb-6 text-sm text-gray-700 space-y-2">
          <div>
            <label className="block font-semibold text-gray-700">Ngày:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-transparent"
            />
          </div>

          {selectedCourts.map((courtId, index) => (
            <div key={courtId} className="flex justify-between">
              <span>
                - {courtNames[courtId]} : {courtTimes[courtId]}
              </span>
              <span className="text-green-600 font-medium">
                {courtPrice} VND
              </span>
            </div>
          ))}

          <p className="mt-2">
            Tổng giờ:{" "}
            <span className="text-red-500">{calculateTotalHours()} giờ</span>
          </p>
          <p>
            Tổng tiền:{" "}
            <span className="text-red-500">{calculateTotalPrice()} VND</span>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên của bạn
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 cursor-pointer bg-transparent"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-transparent"
              placeholder="0123 456 987"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ghi chú cho sân
            </label>
            <textarea
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-transparent"
              placeholder="Nhập ghi chú"
            ></textarea>
          </div>

          <button
            className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition duration-150"
            onClick={handlePayment}
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
