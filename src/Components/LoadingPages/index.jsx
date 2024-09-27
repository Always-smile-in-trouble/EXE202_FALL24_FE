import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import game from "../../assets/logo/game.png";

function LoadingPage() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); // Sử dụng hook navigate để điều hướng

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Điều hướng đến trang chính sau khi loading
      setTimeout(() => {
        navigate("/home"); // Chuyển đến trang home
      }, 1000); // Đợi 1 giây để hoàn tất hiệu ứng fade-out
    }, 1600); // Thời gian loading là 1.6 giây

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen bg-gradient-to-r from-green-300 to-green-500 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={game}
        alt="Logo"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 animate-bounce transition-transform duration-1000"
        style={{ transform: fadeOut ? "scale(0.8)" : "scale(1)" }}
      />
      <h1
        className="mt-4 text-white text-3xl md:text-4xl lg:text-5xl font-second_font font-serif transition-opacity duration-1000"
        style={{ opacity: fadeOut ? 0 : 1 }}
      >
        ShuttleSmash
      </h1>
    </div>
  );
}

export default LoadingPage;
