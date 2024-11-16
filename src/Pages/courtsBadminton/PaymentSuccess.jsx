import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Thêm icon tích xanh
import logo from "../../assets/logo/game.png"; // Đường dẫn đến logo của bạn

const TransactionSuccess = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/courts");
  };

  useEffect(() => {
    // Một số hiệu ứng khi trang được tải (như fade-in)
    const timeout = setTimeout(() => {
      document.getElementById("successMessage").classList.remove("opacity-0");
      document.getElementById("successMessage").classList.add("opacity-100");
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 overflow-hidden">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105">
        {/* Logo và tên trang web */}
        <div className="flex flex-col items-center mb-8 animate__animated animate__fadeInUp">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-cover mb-4 transform transition duration-500 hover:rotate-12 hover:scale-110"
          />
          <h1 className="text-3xl font-bold text-green-700 tracking-wider mb-2">
            ShuttleMatch
          </h1>
          <p className="text-xl text-gray-600">Cảm ơn bạn đã tham gia!</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="successMessage"
        >
          {/* Icon tích xanh */}
          <div className="flex justify-center mb-6 animate__animated animate__bounceIn">
            <AiOutlineCheckCircle className="text-8xl text-green-600" />
          </div>

          <h2 className="text-3xl font-semibold text-orange-400 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
            Đặt Lịch Thành Công!
          </h2>
          <p className="text-base text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Cảm ơn bạn đã đặt sân. Chúc bạn chơi vui vẻ!
          </p>

          <motion.button
            onClick={handleBack}
            className="px-8 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transform transition duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
          >
            Quay lại danh sách sân
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TransactionSuccess;
