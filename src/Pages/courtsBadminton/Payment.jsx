import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineQrcode } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import qrcode from "../../assets/logo/qrcode.jpg";

function PaymentPage() {
  const location = useLocation();
  const { bookingDate, selectedCourts, totalPrice } = location.state || {};
  const [countdown, setCountdown] = useState(300);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(qrcode);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const courtDetails = selectedCourts
    ?.map((court) => `${court.name} từ ${court.time}`)
    .join(", ");

  const handleImageClick = () => {
    setIsModalOpen(true); // Mở modal khi bấm vào ảnh
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Đóng modal
  };

  return (
    <div className="bg-gradient-to-b from-green-100 via-white to-green-50 min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
          Thanh toán
        </h1>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          Các hình thức thanh toán
        </h2>

        <div className="space-y-4 mb-6 bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-green-600">
              1. Tài khoản ngân hàng
            </h3>
            <AiOutlineQrcode className="text-4xl text-green-600" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700">
                Tên tài khoản: <span className="font-bold">Le Anh Duy</span>
              </p>
              <p className="text-gray-700 my-8">
                Số tài khoản: <span className="font-bold">05327322101</span>
              </p>
              <p className="text-gray-700">
                Ngân hàng: <span className="font-bold">TPBANK</span>
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={qrcode}
                alt="QR Code"
                className="w-40 h-40 object-contain rounded-lg shadow-lg border-2 border-green-600 cursor-pointer"
                onClick={handleImageClick} // Khi bấm vào ảnh sẽ mở modal
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4 p-4 bg-gray-50 rounded-lg shadow">
          <p>
            Bạn đặt lịch ngày{" "}
            <span className="font-bold text-green-700">{bookingDate}</span>. Bao
            gồm:{" "}
            <span className="font-bold text-green-700">{courtDetails}</span>
          </p>
          <p className="text-orange-600 font-semibold">
            Tổng đơn của bạn là {totalPrice} VND. Bạn cần phải thanh toán để
            hoàn tất việc đặt lịch.
          </p>
          <p className="text-red-600">
            Đơn của bạn được giữ trong <span className="font-bold">5 phút</span>
          </p>
        </div>

        <div className="text-3xl font-semibold text-center text-green-700 mb-8 border-b-2 pb-4">
          {formatCountdown()}
        </div>

        <div className="flex flex-col items-center mb-8">
          <label className="w-48 h-48 flex flex-col items-center justify-center border-2 border-green-300 border-dashed rounded-lg cursor-pointer hover:bg-green-50 transition-colors">
            <input type="file" className="hidden" />
            <FiUpload className="text-green-500 text-5xl mb-2" />
            <span className="text-gray-500 mt-2 text-sm">
              Nhấp vào để tải hình thanh toán
            </span>
          </label>
        </div>

        <button
          className="w-full bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
          onClick={() => {
            navigate("/paymentsuccess");
          }}
        >
          Xác nhận đặt
        </button>
      </div>

      {/* Modal hiển thị ảnh */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal} // Đóng modal khi bấm vào nền
        >
          <div
            className="relative p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // Ngăn chặn việc đóng modal khi bấm vào ảnh
          >
            <img
              src={imagePreview}
              alt="Preview"
              className="w-96 h-96 object-contain rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 text-white bg-red-500 rounded-full py-2 px-4 transform translate-x-14 -translate-y-10"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
