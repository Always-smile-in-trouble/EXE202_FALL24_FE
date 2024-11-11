import { Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import formatCurrency from "../formatCurrency";

const Payment = () => {
  const [pay, setPay] = useState([]); // Dữ liệu payment
  const [pagination, setPagination] = useState({
    current: 1, // Trang bắt đầu
    pageSize: 10, // Số mục mỗi trang
    total: 0, // Tổng số mục
  });

  async function fetchPayment(pageNumber = 1, pageSize = 10) {
    try {
      const response = await api.get(
        `/admin/v1/getAllPayment?currentPage=${pageNumber - 1}&size=${pageSize}`
      );

      const totalPage = response.data.data.totalPage;

      // Cập nhật pagination với totalPage từ API
      setPagination({
        ...pagination,
        total: totalPage * pageSize,
        pageSize: pageSize,
        current: pageNumber,
      });

      setPay(response.data.data.transactionResponseList);
    } catch (error) {
      console.log(error);
    }
  }

  // Sử dụng useEffect để lấy dữ liệu khi load trang lần đầu
  useEffect(() => {
    fetchPayment(pagination.current, pagination.pageSize);
  }, []); // Mảng phụ thuộc rỗng giúp gọi API chỉ khi component lần đầu render

  // Xử lý thay đổi trang
  const handleTableChange = (pagination) => {
    fetchPayment(pagination.current, pagination.pageSize);
  };

  // Columns cho bảng
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

  const convertArrayToDate = (arr) => {
    const [year, month, day] = arr;
    const dateObject = new Date(year, month - 1, day);
    return dateObject.toISOString().split("T")[0]; // Định dạng ngày "YYYY-MM-DD"
  };

  const tableHeight = 55 * pagination.pageSize;

  return (
    <div className="payment">
      <h1 className="text-3xl font-bold mt-10 ml-8 mb-8">List Of Payments</h1>
      <Table
        dataSource={pay}
        columns={columns}
        scroll={{
          y: tableHeight, // Cập nhật chiều cao bảng cố định
        }}
        className="w-11/12 ml-8"
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          showSizeChanger: false,
          hideOnSinglePage: true,
          disabled: pagination.total <= pagination.pageSize,
        }}
        onChange={handleTableChange} // Gọi lại hàm khi thay đổi trang
      />
    </div>
  );
};

export default Payment;
