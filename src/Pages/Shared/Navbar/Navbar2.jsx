import React from "react";
import logo from "../../../assets/logo/game.png";
import { FaLanguage } from "react-icons/fa6";

function NavbarInside() {
  return (
    <div>
      <div className="flex justify-between mx-4 border-b-8 shadow-md">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo"></img>
          <p>ShuttleSmash</p>
        </div>
        <div>
          <FaLanguage />
          <p>Language</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarInside;
