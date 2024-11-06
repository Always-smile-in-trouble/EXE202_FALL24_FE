import React, { useState } from "react";
import "./Sidebar.css";
import game from "../../../assets/logo/game.png";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { SidebarData } from "../Data";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "../../../redux/features/userSlice";
import { logout } from "../../../redux/features/userLoginSlice";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (index) => {
    setSelected(index);
    if (index === 1) {
      navigate(`/user`);
    } else if (index === 2) {
      navigate(`/payment`);
    } else {
      navigate(`/dashboard`);
    }
  };

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={game} alt="logo" className="w-28" />
        <span>ShutterMatch</span>
      </div>

      <div className="menuSidebar">
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={`menuItem ${selected === index ? "active" : ""}`}
            onClick={() => handleNavigate(index)}
          >
            <div className="text-lg">
              <item.icon />
            </div>
            <span>{item.heading}</span>
          </div>
        ))}

        <div
          className="menuItem"
          onClick={() => {
            dispatch(clear());
            dispatch(logout());
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          <div className="text-2xl">
            <LiaSignOutAltSolid />
          </div>
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
