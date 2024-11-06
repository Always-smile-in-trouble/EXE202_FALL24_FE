import { Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import api from "../../../config/axios";
import formatCurrency from "../formatCurrency";

const Payment = () => {
  const [user, setUser] = useState([]);
  const [pay, setPay] = useState([]);
  const [pagination, setPagination] = useState({});

  // const fetchPayment = async () => {
  // const response = await api.get(`/admin/v1/getAllPayment`);
  //   console.log(response.data.data.transactionResponseList);
  //   setPay(response.data.data.transactionResponseList);
  // };

  async function fetchPayment(pageNumber = 0, pageSize = 10) {
    try {
      const response = await api.get(
        `/admin/v1/getAllPayment?page=${pageNumber}&size=${pageSize}`
      );
      // setDatasource(response.data.data);
      setPagination({
        ...pagination,
        total: response.data.data.transactionResponseList,
        // pageSize: response.data.pageSize,
        // current: pageNumber,
      });
      setPay(response.data.data.transactionResponseList);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUser = async (id) => {
    const response = await api.get(`/user/v1/getInfo/${id}`);
    return response.data.data.fullName;
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
      // render: (record) => {
      //   return <p>{render}</p>;
      // },
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
    const [year, month, day] = arr; // Destructure year, month, and day
    const dateObject = new Date(year, month - 1, day); // Month is zero-based
    return dateObject.toISOString().split("T")[0]; // Format as "YYYY-MM-DD"
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
        className="w-11/12 ml-8 "
        pagination={pagination}
      ></Table>
    </div>
  );
};

export default Payment;
