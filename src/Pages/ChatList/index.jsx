import React, { useEffect, useState } from "react";
import "./ChatList.scss";
import RoomMessage from "../roomMessage/RoomMessage";
import api from "../../config/axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import useRealtime from "../../Hooks/useRealTime";

function ChatList({ setFetchRoom }) {
  const { theme, setShowSearchFriends, active, setActive, realtime } =
    useStateValue();
  const [data, setData] = useState([]);
  const [isSet, setIsSet] = useState(false);
  // const [user, setUser] = useState([]);
  const [user, setUser] = useState("");
  const { id } = useParams();

  useRealtime(async (body) => {
    if (body.body === "New message") {
      await fetch();
    }
  });
  const fetch = async () => {
    try {
      const res = await api.get("/chat");
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  async function fetchUser() {
    const response = await api.get("/user/v1/getUserInfo");
    setUser(response.data.data);
  }

  useEffect(() => {
    fetch();
  }, [realtime]);

  useEffect(() => {
    fetch();
    fetchUser;
  }, []);

  return (
    <>
      <div className="chat-list">
        <div className="chat-list__information">
          <div className="chat-list__information__left">
            <img src={user?.avt} alt="" />
            <span>{user?.name}</span>
          </div>
          <div
            className="chat-list__information__right"
            onClick={() => setShowSearchFriends(true)}
          ></div>
        </div>
        <h3>Message</h3>
        <div className="chat-list__items">
          {data.map((room) => (
            <RoomMessage
              key={room.roomID}
              room={room.roomID}
              active={active}
              setActive={setActive}
              avt={room.users.filter((item) => item.id != user.id)[0].avt}
              name={room.users.filter((item) => item.id != user.id)[0].name}
              lastMessage={room.lastMessage}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatList;
