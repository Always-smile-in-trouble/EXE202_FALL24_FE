import React, { useEffect, useState } from "react";
import "./ChatDetail.scss";
import { Button, message } from "antd";
import { LiaFacebookMessenger } from "react-icons/lia";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import RoomChatDetail from "../roomChatDetail/RoomChatDetail";

function ChatDetail() {
  const { setShowSearchFriends, theme, realtime } = useStateValue();
  const params = useParams();

  const sendMessage = () => {
    console.log("send");
  };

  return (
    <>
      {params.id != null ? (
        <RoomChatDetail />
      ) : (
        <div className="chatDetail">
          <div
            className="chatDetail__icon"
            style={{ border: theme ? "#fff 3px solid" : "#000 3px solid" }}
          >
            <LiaFacebookMessenger
              fontSize={"4rem"}
              color={theme ? "white" : "#000"}
            />
          </div>
          <h4>Your message</h4>
          <p>Send photos and private messages to friends</p>
          {/* <Button
            type="primary"
            onClick={() => setShowSearchFriends(true)}
            style={{ marginTop: "15px" }}
          >
            Send Message
          </Button> */}
        </div>
      )}
    </>
  );
}

export default ChatDetail;
