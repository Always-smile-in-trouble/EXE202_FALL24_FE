import React, { useState } from "react";
import "./RoomMessage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { useStateValue } from "../../Context/StateProvider";
function RoomMessage({
  room,
  active,
  setActive,
  avt,
  name,
  lastMessage,
  icon,
}) {
  const { setIdRoomChat, setShowSearchFriends, setShowChatList } =
    useStateValue();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const setShow = () => {
    setIdRoomChat(room);
    setShowSearchFriends(false);
    setActive(room);
    setShowChatList(false);
    user.role === "CREATOR"
      ? navigate(`/creator-manage/room/${room}`)
      : navigate(`/room-messages/${room}`);
  };

  return (
    <div
      className={`item ${active === room ? "active" : ""}`}
      onClick={setShow}
    >
      <img src={avt || "abc"} alt="" />
      <div className="item__detail">
        <h4>{name}</h4>
        <span>
          {icon}
          {lastMessage}
        </span>
      </div>
    </div>
  );
}

export default RoomMessage;
