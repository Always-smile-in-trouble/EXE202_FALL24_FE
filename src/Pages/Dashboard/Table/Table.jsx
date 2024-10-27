import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Bình Minh", 18908424, "2 March 2022", "Premium"),
  createData("Thanh Trúc", 18908424, "2 March 2022", "Standard"),
  createData("Đan Trường", 18908424, "2 March 2022", "Expired"),
  createData("Lê Thanh", 18908421, "2 March 2022", "Pending"),
];

const makeStyle = (status) => {
  if (status === "Standard") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Expired") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else if (status === "Pending") {
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
              <TableCell align="center">Người trả</TableCell>
              <TableCell align="center">Mã giao dịch</TableCell>
              <TableCell align="center">Ngày</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.trackingId}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="center" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
