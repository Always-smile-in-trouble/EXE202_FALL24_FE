import { Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import formatCurrency from "../formatCurrency";

const Payment = () => {
  const [pay, setPay] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1, // Trang hiện tại mặc định là 1
    pageSize: 5, // Số bản ghi mỗi trang
    total: 0, // Tổng số bản ghi
  });

  // Fetch payment with pagination
  async function fetchPayment(pageNumber = 1, pageSize = 5) {
    try {
      const response = await api.get(
        `/admin/v1/getAllPayment?page=${pageNumber - 1}&size=${pageSize}`
      );
      setPay(response.data.data.transactionResponseList); // Dữ liệu giao dịch
      setPagination({
        current: pageNumber,
        pageSize: pageSize,
        total: response.data.data.totalCompleted, // Tổng số giao dịch từ API
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch data on mount
  useEffect(() => {
    fetchPayment(1, 5); // Lấy dữ liệu khi component mount
  }, []);

  // Handle page change
  const handleTableChange = (pagination) => {
    fetchPayment(pagination.current, pagination.pageSize); // Khi chuyển trang, gọi lại fetchPayment
  };

  // Columns for the table
  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Transaction",
      dataIndex: "transactionType",
      key: "transactionType",
      render: (_, record) => {
        return record.transactionType === "MEMBERSHIP" ? (
          <p className="text-green-700">{record.transactionType}</p>
        ) : record.transactionType === "LIKE" ? (
          <p className="text-red-700">{record.transactionType}</p>
        ) : (
          <p className="text-yellow-600">{record.transactionType}</p>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (_, render) => {
        return <p>{formatCurrency(render.amount)}</p>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        return record.status === "PENDING" ? (
          <Tag color="warning">{record.status}</Tag>
        ) : record.status === "COMPLETED" ? (
          <Tag color="green">{record.status}</Tag>
        ) : (
          <Tag color="red">{record.status}</Tag>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
      render: (record) => {
        const formattedDate = convertArrayToDate(record);
        return <span>{formattedDate}</span>;
      },
    },
  ];

  // Function to convert array to date string "YYYY-MM-DD"
  const convertArrayToDate = (arr) => {
    const [year, month, day] = arr;
    const dateObject = new Date(year, month - 1, day);
    return dateObject.toISOString().split("T")[0]; // Định dạng ngày "YYYY-MM-DD"
  };

  return (
    <div className="payment">
      <h1 className="text-3xl font-bold mt-10 ml-8 mb-8">List Of Payments</h1>
      <Table
        dataSource={pay}
        columns={columns}
        scroll={{
          y: 55 * 7,
        }}
        className="w-11/12 ml-8"
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          onChange: (page, pageSize) => fetchPayment(page, pageSize),
          showSizeChanger: false,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Payment;
