import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import api from "../../../config/axios";
// import { Button, Popconfirm, Space, Table, Tag } from "antd";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const makeStyle = (status) => {
  if (status === "COMPLETED") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "NOT") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else if (status === "PENDING") {
    return {
      background: "#59bfff",
      color: "white",
    };
  } else {
    return {
      background: "#000",
      color: "#FFD700",
    };
  }
};

export default function BasicTable() {
  const [orders, setOrder] = useState([]);
  const [pagination, setPagination] = useState({});

  async function fetchData(pageNumber = 0, pageSize = 10) {
    try {
      const response = await api.get(
        `/admin/v1/getAllPayment?page=${pageNumber}&size=${pageSize}`
      );
      console.log(response.data.data);
      setOrder(response.data.data.transactionResponseList);
      setPagination({
        ...pagination,
        // totalCompleted: response.data.data.totalCompleted,
        // revenue: response.data.data.revenue,
        // pageSize: response.data.pageSize,
        current: pageNumber,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const convertArrayToDate = (arr) => {
    const [year, month, day] = arr; // Destructure year, month, and day
    const dateObject = new Date(year, month - 1, day); // Month is zero-based
    return dateObject.toISOString().split("T")[0]; // Format as "YYYY-MM-DD"
  };

  return (
    <div className="Table w-11/12 ml-8">
      <h3 className="mt-14 mb-4 font-bold">Recent Orders</h3>
      {/* <Table dataSource={orders} pagination={pagination} /> */}

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          pagination={pagination}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã giao dịch</TableCell>
              <TableCell align="center">Người trả</TableCell>
              <TableCell align="center">Ngày</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {orders.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.userName}
                </TableCell>
                <TableCell align="center">
                  {convertArrayToDate(row.transactionDate)}
                </TableCell>
                <TableCell align="center">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
