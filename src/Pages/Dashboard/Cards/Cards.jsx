import React, { useEffect, useState } from "react";
import "./Cards.css";
import { CardsData } from "../Data";
import Card from "../Card/Card";
import api from "../../../config/axios";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";
import formatCurrency from "../formatCurrency";

const Cards = () => {
  const [totalUser, setTotalUser] = useState();
  const [revenue, setRevenue] = useState();
  const [completed, setCompleted] = useState();
  const [payment, setPayment] = useState([]);
  const [user, setUser] = useState([]);
  const [pagination, setPagination] = useState({});

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
      console.log(response.data.data.total);
      setTotalUser(response.data.data.total);
      setUser(response.data.data.listAccount);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPayment(pageNumber = 0, pageSize = 10) {
    try {
      const response = await api.get(
        `/admin/v1/getAllPayment?page=${pageNumber}&size=${pageSize}`
      );
      // setDatasource(response.data.data);
      setPagination({
        ...pagination,
        // total: response.data.data.transactionResponseList,
        // pageSize: response.data.pageSize,
        // current: pageNumber,
      });
      setRevenue(response.data.data.revenue);
      setCompleted(response.data.data.totalCompleted);
      setPayment(response.data.data.transactionResponseList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchPayment();
  }, []);

  const data = [
    {
      title: "Người Dùng",
      color: {
        backGround: "linear-gradient(120deg, #A7D676, #85CBCC)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      // value: "250",
      value: totalUser,
      png: HiUsers,
      series: [
        {
          name: "Users",
          data: [11, 5, 17, 24, 67, 109],
          // data: [user.map((us) => {
          //   return 
          // })],
        },
      ],
    },
    {
      title: "Giao Dịch",
      color: {
        backGround: "linear-gradient(0, #43978D, #F9E07F)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      // value: "103",
      value: completed,
      png: FaMoneyBillTrendUp,
      series: [
        {
          name: "Payments",
          data: [5, 0, 10, 18, 32, 59],
        },
      ],
    },

    {
      title: "Tổng Tiền",
      color: {
        backGround: "linear-gradient(0deg, #68B2A0, #CDE0C9)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      // value: "2,345,000",
      value: formatCurrency(revenue),
      png: GrMoney,
      series: [
        {
          name: "Total",
          // data: [50.0, 110.0, 250.0, 410.0, 680.0, 845.0],
          data: [
            payment.map((pay) => {
              return pay.amount;
            }),
          ],
        },
      ],
    },
  ];

  return (
    <div className="Cards">
      {/* {CardsData.map((card, id) => { */}
      {data.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
