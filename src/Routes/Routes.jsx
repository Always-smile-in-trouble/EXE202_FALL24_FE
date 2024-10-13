import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import LoginAndRegister from "../Pages/Login&Register";
import LoadingPage from "../Components/LoadingPages";
import CreateAccount from "../Pages/CreateAccount";
import NavbarInside from "../Pages/Shared/Navbar/Navbar2";
import Matching from "../Pages/Matching";
// import { AnimatedModalDemo } from "../Pages/Matching/index2";

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
  },
  // {
  //   path: "/aniamtedmodal",
  //   element: <AnimatedModalDemo />,
  // },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/navbar2",
    element: <NavbarInside />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, // Chuyển hướng bất kỳ đường dẫn nào không xác định về LoadingPage
  },
]);

export default router;
