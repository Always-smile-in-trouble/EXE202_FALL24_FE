import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function PaymentStatus() {
  const query = new URLSearchParams(useLocation().search);
  const status = query.get("status");
  const cancel = query.get("cancel");
  const orderCode = query.get("orderCode");
  const navigate = useNavigate();

  const isPaymentSuccess = status === "PAID" && cancel === "false";

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        {isPaymentSuccess ? (
          <div className="text-green-500">
            <FaCheckCircle size={64} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-lg text-gray-700">Thank you for your payment.</p>
            <p className="text-gray-500 mt-2">Order Code: {orderCode}</p>
            <button
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
              onClick={() => navigate(`/membership`)}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="text-red-500">
            <FaTimesCircle size={64} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">
              Payment Failed or Cancelled
            </h2>
            <p className="text-lg text-gray-700">
              Your payment could not be completed.
            </p>
            <p className="text-gray-500 mt-2">Order Code: {orderCode}</p>
            <button
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={() => navigate(`/membership`)}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentStatus;
