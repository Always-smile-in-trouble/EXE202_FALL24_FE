import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./Table.css";
import api from "../../../config/axios";

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
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPage: 1,
  });

  async function fetchData(pageNumber = 0, pageSize = 5) {
    try {
      const response = await api.get(
        `/admin/v1/getAllPayment?currentPage=${pageNumber}&size=${pageSize}`
      );
      setOrders(response.data.data.transactionResponseList);
      setPagination({
        currentPage: pageNumber,
        totalPage: response.data.data.totalPage,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePreviousPage = () => {
    if (pagination.currentPage > 0) {
      fetchData(pagination.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPage - 1) {
      fetchData(pagination.currentPage + 1);
    }
  };

  const convertArrayToDate = (arr) => {
    const [year, month, day] = arr;
    const dateObject = new Date(year, month - 1, day);
    return dateObject.toISOString().split("T")[0];
  };

  // Calculate empty rows to always display 5 rows in the table
  const rowsToDisplay = [...orders, ...Array(6 - orders.length).fill(null)];

  return (
    <div className="Table w-11/12 ml-8">
      <h3 className="mt-14 mb-4 font-bold">Recent Orders</h3>

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã giao dịch</TableCell>
              <TableCell align="center">Người trả</TableCell>
              <TableCell align="center">Ngày</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rowsToDisplay.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row ? row.id : ""}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row ? row.userName : ""}
                </TableCell>
                <TableCell align="center">
                  {row ? convertArrayToDate(row.transactionDate) : ""}
                </TableCell>
                <TableCell align="center">
                  {row ? (
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="pagination-controls mt-4">
        <Button
          variant="contained"
          onClick={handlePreviousPage}
          disabled={pagination.currentPage === 0}
          style={{ backgroundColor: "#326e51da", color: "white" }}
        >
          Previous
        </Button>
        <span className="mx-4">
          Page {pagination.currentPage + 1} of {pagination.totalPage}
        </span>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={pagination.currentPage === pagination.totalPage - 1}
          style={{ backgroundColor: "#326e51da", color: "white" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
