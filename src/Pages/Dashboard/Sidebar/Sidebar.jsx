import React, { useState } from "react";
import "./Sidebar.css";
import game from "../../../assets/logo/game.png";
import { HiHome } from "react-icons/hi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { SidebarData } from "../Data";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={game} alt="" className="w-28" />
        <span>ShutterMatch</span>
      </div>

      <div className="menuSidebar">
        {SidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className={selected === index ? "menuItem active" : "menuItem"}
              onClick={() => {
                setSelected(index);
                console.log(index);
                {
                  index == "1"
                    ? navigate(`/user`)
                    : index == "2"
                    ? navigate(`/payment`)
                    : navigate(`/dashboard`);
                }
              }}
            >
              <div className="text-lg">
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <div className="text-2xl">
            <LiaSignOutAltSolid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
