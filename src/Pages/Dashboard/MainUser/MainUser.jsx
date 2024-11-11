import { Button, Popconfirm, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";

const MainUser = () => {
  const [users, setUser] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  async function fetchUser(pageNumber = 1, pageSize = 10) {
    try {
      const response = await api.get(
        `/admin/v1/getAllAccount?currentPage=${pageNumber - 1}&size=${pageSize}`
      );

      const totalPage = response.data.data.totalPage;

      setPagination({
        ...pagination,
        total: totalPage * pageSize,
        pageSize: pageSize,
        current: pageNumber,
      });
      setUser(response.data.data.listAccount);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser(pagination.current, pagination.pageSize);
  }, []); // Mảng phụ thuộc rỗng giúp gọi API chỉ khi component lần đầu render

  // Xử lý thay đổi trang
  const handleTableChange = (pagination) => {
    fetchUser(pagination.current, pagination.pageSize);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      render: (_, record) => {
        return record.level === "CASUAL" ? (
          <Tag color="warning">{record.level}</Tag>
        ) : record.level === "BEGINNER" ? (
          <Tag color="blue">{record.level}</Tag>
        ) : (
          <Tag color="red">{record.level}</Tag>
        );
      },
    },
  ];

  return (
    <div className="MainUser">
      <h1 className="text-3xl font-bold mt-10 ml-8 mb-8">List Of Users</h1>
      <Table
        dataSource={users}
        columns={columns}
        className="w-11/12 ml-8 "
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          showSizeChanger: false,
          hideOnSinglePage: true,
          disabled: pagination.total <= pagination.pageSize,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default MainUser;
