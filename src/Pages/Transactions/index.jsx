import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate if using React Router
import api from "../../config/axios";
import badmintonLogo from "../../assets/logo/Dynamic_Badminton.webp";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate(); // Initialize the navigation hook

  async function fetchTransactions() {
    const response = await api.get("/payos/v1/getAllPaymentUser");
    console.log(response.data.data);
    setTransactions(response.data.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const formatDate = (dateArray) => {
    const [year, month, day, hour, minute, second] = dateArray;
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  };

  // Back button handler
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto h-3/4 p-4">
      {" "}
      {/* Thay đổi chiều cao ở đây */}
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={badmintonLogo} // Đường dẫn đến hình ảnh của bạn
            alt="No Transactions"
            className="mb-4 h-52" // Thay đổi kích thước ảnh
          />
          <p className="text-gray-500 text-2xl font-semibold">
            No transactions available
          </p>{" "}
          {/* Tăng kích thước chữ */}
        </div>
      ) : (
        <div className="h-full">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Order Code</th>
                <th className="py-3 px-6 text-left">Transaction Type</th>
                <th className="py-3 px-6 text-left">Amount (VND)</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{transaction.id}</td>
                  <td
                    className={`py-3 px-6 text-left ${
                      transaction.transactionType === "MEMBERSHIP"
                        ? "text-blue-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {transaction.transactionType}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {transaction.amount.toLocaleString()} VND
                  </td>
                  <td className="py-3 px-6 text-left text-green-500">
                    {transaction.status}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {formatDate(transaction.transactionDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
