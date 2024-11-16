import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import LoginAndRegister from "../Pages/Login&Register";
import LoadingPage from "../Components/LoadingPages";
import CreateAccount from "../Pages/CreateAccount";
import NavbarInside from "../Pages/Shared/Navbar/Navbar2";
import Matching from "../Pages/Matching";
import MemberShip from "../Pages/MemberShip";
import PaymentStatus from "../Pages/PaymentReturn";
import Dashboard from "../Pages/Dashboard/dashboard";
import User from "../Pages/Dashboard/User/User";
import MainPayment from "../Pages/Dashboard/MainPayment/MainPayment";
import UserProfile from "../Pages/profile";
import TransactionHistory from "../Pages/Transactions";
import { ValidRouteAdmin } from "./ProtectedRoutes";
import CourtList from "../Pages/courtsBadminton/CourtList";
import courts from "../Pages/courtsBadminton/data";
import CourtDetail from "../Pages/courtsBadminton/CourtDetail";
import BookingForm from "../Pages/courtsBadminton/BookingForm";
import ChooseCourts from "../Pages/courtsBadminton/ChooseCourts";
import PaymentPage from "../Pages/courtsBadminton/Payment";
import TransactionSuccess from "../Pages/courtsBadminton/PaymentSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage />, // Khi vào trang gốc sẽ hiển thị LoadingPage
  },
  {
    path: "/home", // Đường dẫn cho trang chính
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/home", // Đường dẫn cho trang Home
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginAndRegister />,
  },
  {
    path: "/matching",
    element: <Matching />,
    children: [
      {
        path: "/matching:id",
        element: <Matching />,
      },
    ],
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/history",
    element: <TransactionHistory />,
  },
  {
    path: "/navbar2",
    element: <NavbarInside />,
  },
  {
    path: "/membership",
    element: <MemberShip />,
  },
  {
    path: "/paymentReturn",
    element: <PaymentStatus />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/dashboard",
    element: <ValidRouteAdmin element={<Dashboard />} />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/payment",
    element: <MainPayment />,
  },
  {
    path: "/courts",
    element: <CourtList courts={courts} />,
  },
  {
    path: "/court/:id",
    element: <CourtDetail courts={courts} />,
  },
  {
    path: "/choosecourt",
    element: <ChooseCourts />,
  },
  {
    path: "/bookinginfo",
    element: <BookingForm />,
  },
  {
    path: "/paymentbooking",
    element: <PaymentPage />,
  },
  {
    path: "/paymentsuccess",
    element: <TransactionSuccess />,
  },
]);

export default router;
