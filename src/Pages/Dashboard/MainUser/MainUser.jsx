import { Button, Popconfirm, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";

const MainUser = () => {
  const [users, setUser] = useState([]);
  const [pagination, setPagination] = useState({});

  // const fetchUser = async () => {
  //   const response = await api.get(`/admin/v1/getAllAccount`);
  //   console.log(response.data.data.listAccount);
  //   setUser(response.data.data.listAccount);
  // };

  async function fetchUser(pageNumber = 0, pageSize = 10) {
    try {
      const response = await api.get(
        `/admin/v1/getAllAccount?page=${pageNumber}&size=${pageSize}`
      );
      // setDatasource(response.data.data);
      setPagination({
        ...pagination,
        total: response.data.data.total,
        // pageSize: response.data.pageSize,
        // current: pageNumber,
      });
      console.log(response.data.data.listAccount);
      setUser(response.data.data.listAccount);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const response = await api.delete(`/admin/v1`);

    console.log(response);
    const listAfterDelete = users.filter((user) => user.id !== id);
    setUser(listAfterDelete);
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
    // {
    //   title: "Actions",
    //   dataIndex: "id",
    //   key: "id",
    //   render: (id) => (
    //     <Popconfirm
    //       title="Delete user"
    //       description="Are you sure to delete this user?"
    //       onConfirm={() => handleDelete(id)}
    //       okText="Yes"
    //       cancelText="No"
    //     >
    //       <Button danger>Delete</Button>
    //     </Popconfirm>
    //   ),
    // },
  ];

  return (
    <div className="MainUser">
      <h1 className="text-3xl font-bold mt-10 ml-8 mb-8">List Of Users</h1>
      <Table
        dataSource={users}
        columns={columns}
        className="w-11/12 ml-8 "
        pagination={pagination}
      ></Table>
    </div>
  );
};

export default MainUser;
