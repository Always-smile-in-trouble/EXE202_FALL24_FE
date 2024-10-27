import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export const SidebarData = [
  {
    icon: HiHome,
    heading: "Dashboard",
  },
  {
    icon: FaUser,
    heading: "Users",
  },
  {
    icon: FaMoneyBillTransfer,
    heading: "Payments",
  },
];

export const CardsData = [
  {
    title: "Người Dùng",
    color: {
      backGround: "linear-gradient(120deg, #A7D676, #85CBCC)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    value: "250",
    png: HiUsers,
    series: [
      {
        name: "Users",
        data: [11, 5, 17, 24, 67, 109],
      },
    ],
  },
  {
    title: "Giao Dịch",
    color: {
      backGround: "linear-gradient(0, #43978D, #F9E07F)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    value: "103",
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
    value: "2,345,000",
    png: GrMoney,
    series: [
      {
        name: "Total",
        data: [50.0, 110.0, 250.0, 410.0, 680.0, 845.0 ],
      },
    ],
  },
];
