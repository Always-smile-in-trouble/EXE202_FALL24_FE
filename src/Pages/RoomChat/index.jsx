import React, { useEffect, useState } from "react";
import "./RoomChat.scss";
import { useMediaQuery } from "react-responsive";
import { Outlet, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import ChatList from "../ChatList";
import FormSearchFriends from "../formSearchFriends/FormSearchFriends";

function RoomChat() {
  const { theme, showSearchFriends, showChatList } = useStateValue();
  const isQuery = useMediaQuery({ maxWidth: 800 });
  const { param } = useParams();

  return (
    <div
      className="roomChat"
      style={{
        backgroundColor: theme ? "#202020" : "#fff",
        color: theme ? "#fff" : "#202020",
      }}
    >
      {isQuery ? (
        <>
          {showChatList && <ChatList />}
          {!showChatList && <Outlet />}

          {showSearchFriends && <FormSearchFriends />}
        </>
      ) : (
        <>
          <ChatList />
          <Outlet />
          {showSearchFriends && <FormSearchFriends />}
        </>
      )}
    </div>
  );
}

export default RoomChat;
