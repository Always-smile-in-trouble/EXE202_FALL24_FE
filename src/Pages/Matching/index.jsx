import React, { useEffect, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { IoMdCheckmark, IoMdInformationCircle } from "react-icons/io";
import { IoClose, IoFlag, IoShieldSharp } from "react-icons/io5";
import api from "../../config/axios";
import { Image } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/features/userSlice";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../../assets/logo/badminton.png";
import badmintonImage from "../../assets/logo/badminton1.png";

function Matching() {
  const [currentTab, setCurrentTab] = useState("matches");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMatches, setIsOpenMatches] = useState(false);
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState("");
  const [matchesData, setMatchesData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportUserId, setReportUserId] = useState(null);
  const [reportReasons, setReportReasons] = useState([]); // State để lưu danh sách lý do
  const [selectedReason, setSelectedReason] = useState("");
  const [showProfiles, setShowProfiles] = useState(false);

  const handleShowProfiles = () => {
    setShowProfiles(!showProfiles);
  };

  const openModal = (id) => {
    setReportUserId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSwipe = (direction, profileName, profileId) => {
    if (direction === "right") {
      swipeUser(profileId, "LIKE"); // Like swipe
    } else if (direction === "left") {
      swipeUser(profileId, "PASS"); // Pass swipe
    }
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setSelectedImage(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const swipeLeft = (index) => {
    cardRefs.current[index].swipe("left");
  };

  const swipeRight = (index) => {
    cardRefs.current[index].swipe("right");
  };

  async function swipeUser(toUserId, swipeType) {
    await api.post("/swipe/v1/swipe", { toUserId, swipeType });
    fetchUserLiked();
  }

  async function fetchUserLiked() {
    const response = await api.get("/swipe/v1/getAllLike");
    console.log(response.data.data);
    setMatchesData(response.data.data);
  }

  async function reportUser(toUserId, reason) {
    const response = await api.post("/report/v1/report", {
      toUserId,
      reason,
    });
    closeModal();
    setSelectedReason("");
  }

  async function getInforById(id) {
    try {
      const response = await api.get(`/user/v1/getInfo/${id}`);
      console.log(response.data);
      setSelectedProfile(response.data);
    } catch (e) {
      toast.error("Error");
    }
  }

  async function fetchDataUser() {
    const response = await api.get("/user/v1/getAll");
    console.log(response.data.data);
    const datas = response.data.data;
    console.log(datas);
    setUsers(datas);
  }

  async function fetchProfile() {
    const response = await api.get("/user/v1/getUserInfo");
    console.log(response.data.data);
    setUserProfile(response.data.data);
  }

  async function fetchReasons() {
    const response = await api.get("/report/v1/listReason");
    setReportReasons(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchDataUser();
    fetchProfile();
    fetchUserLiked();
    fetchReasons();
  }, []);

  const UserProfile = ({ user }) => {
    return (
      <div className="mt-2 border-2 border-gray-300 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            {user.photos?.[0] && (
              <img
                src={user.photos[0]}
                alt={user.fullName}
                className="w-16 h-16 rounded-full border-2 border-gray-500 mr-2"
              />
            )}
            <div>
              <h3 className="font-bold">{user.fullName}</h3>
              <p className="text-sm">About: {user.description}</p>
              <div className="flex gap-1">
                <MdOutlineLocationOn />
                <p className="text-xs text-gray-500">{user.location}</p>
              </div>
              <p className="text-xs text-gray-500">Age: {user.age}</p>
              <p className="text-xs text-gray-500">Level: {user.level}</p>
              <p className="text-xs text-gray-500">
                Available: {user.availableTime.join(", ")}
              </p>
            </div>
          </div>
          <div className="flex gap-12 mr-5">
            <div
              className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-md"
              onClick={() => {
                swipeUser(user.id, "LIKE");
              }}
            >
              <IoMdCheckmark size={20} />
            </div>
            <div
              className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:bg-red-600 hover:scale-105 shadow-md"
              onClick={() => {
                swipeUser(user.id, "PASS");
              }}
            >
              <IoClose size={20} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const mockChats = [
    {
      id: 1,
      sender: "Khải",
      lastMessage: "Hello! How are you?",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/shuttlesmash-23032.appspot.com/o/3528382f6a66d2388b774.jpg?alt=media&token=17a36a25-e809-4075-94fa-c7e60b67d9c2",
      messages: [
        { sender: "User1", message: "Hello! How are you?" },
        { sender: "You", message: "I am good, thanks!" },
      ],
    },
    {
      id: 2,
      sender: "Linh",
      lastMessage: "Are you coming to the game?",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/shuttlesmash-23032.appspot.com/o/a17ce0c7c88f70d1299e11.jpg?alt=media&token=1cfde36f-dc61-43e5-8d2a-beeab89abb43",
      messages: [
        { sender: "User2", message: "Are you coming to the game?" },
        { sender: "You", message: "Yes, I will be there!" },
      ],
    },
    {
      id: 3,
      sender: "Tiến",
      lastMessage: "Let’s meet up!",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/shuttlesmash-23032.appspot.com/o/_MG_8550-2.jpg?alt=media&token=d7577b2c-ad4c-4b3f-83e4-fa7edb6136f1",
      messages: [
        { sender: "User3", message: "Let’s meet up!" },
        { sender: "You", message: "Sure, when?" },
      ],
    },
  ];

  const ChatBox = ({ chat, onClick }) => {
    return (
      <div
        className="border-b border-gray-300 p-4 cursor-pointer hover:bg-green-100 transition duration-200 flex items-center rounded-lg shadow-sm"
        onClick={onClick}
      >
        {chat.photo && (
          <img
            src={chat.photo}
            alt={chat.sender}
            className="w-16 h-16 rounded-full border-2 border-green-500 mr-4 object-cover"
          />
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{chat.sender}</span>
          <span className="text-gray-500 text-sm truncate">
            {chat.lastMessage}
          </span>
        </div>
      </div>
    );
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Cập nhật cuộc trò chuyện với tin nhắn mới
    const updatedMessages = [
      ...selectedChat.messages,
      { sender: "You", message: newMessage },
    ];
    setSelectedChat({ ...selectedChat, messages: updatedMessages });
    setNewMessage("");

    // Cập nhật vào mockChats (cập nhật thực tế nếu lưu trong state)
    mockChats.forEach((chat) => {
      if (chat.id === selectedChat.id) {
        chat.messages = updatedMessages;
      }
    });
  };
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  return (
    <div className="flex h-screen overflow-x-hidden">
      <div className="w-2/6 bg-gray-100 flex flex-col">
        <div className="flex items-center justify-between mb-3 bg-green-400 p-4">
          <div className="flex items-center">
            {userProfile?.photos?.[0] && (
              <img
                src={userProfile.photos[0]}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-500 mr-2 object-cover"
              />
            )}
            <span className="text-sm font-bold text-white ml-1">
              {userProfile.fullName}
            </span>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex flex-col justify-center items-center">
              <i
                className="fas fa-solid fa-bag-shopping text-gray-600 cursor-pointer rounded-full p-2 hover:bg-gray-200"
                onClick={() => {
                  navigate(`/membership`);
                }}
              ></i>
              <p className="text-xs">Buy Now</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <i
                className="fas fa-solid fa-user text-gray-600 cursor-pointer rounded-full p-2 hover:bg-gray-200"
                onClick={() => {
                  navigate(`/profile`);
                }}
              ></i>
              <p className="text-xs">Profile</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <i
                className="fas fa-sign-out-alt text-gray-600 cursor-pointer rounded-full p-2 hover:bg-gray-200"
                onClick={() => {
                  dispatch(clear()), navigate("/home");
                }}
              ></i>
              <p className="text-xs">SignOut</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <button
            onClick={() => setCurrentTab("matches")}
            className={`font-bold text-lg ${
              currentTab === "matches"
                ? "text-green-500 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            Matches
          </button>
          <button
            onClick={() => setCurrentTab("messages")}
            className={`font-bold text-lg ${
              currentTab === "messages"
                ? "text-green-500 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            Messages
          </button>
        </div>

        <div className="mt-8">
          {currentTab === "matches" ? (
            <div>
              <div onClick={handleShowProfiles}>
                <div className="mt-1 ml-5 border-4 border-yellow-500 w-1/3 h-[200px] rounded-lg p-1 flex justify-center items-center relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 cursor-pointer">
                  <div className="bg-gradient-to-t from-green-50 via-neutral-400 to-neutral-600 p-2 rounded-lg flex justify-center items-center w-full h-full flex-col transition-all duration-300 ease-in-out">
                    <span className="text-2xl font-semibold text-gray-800 rounded-full bg-yellow-200 w-14 h-14 flex items-center justify-center transition-transform duration-300 ease-in-out hover:rotate-12">
                      {matchesData.length}
                    </span>
                    <div className="absolute bottom-[-23px] left-1/2 transform -translate-x-1/2">
                      <img
                        src={logo}
                        alt="My Icon"
                        className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-125"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showProfiles ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="overflow-y-auto mx-auto p-2 border rounded-lg shadow-lg">
                  {matchesData.length > 0 ? (
                    matchesData.map((user) => (
                      <UserProfile key={user.id} user={user} />
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[400px]">
                      <div className="animate-bounce mb-4">
                        <img
                          src={badmintonImage}
                          alt="No Matches"
                          className="w-32 h-32 mb-4"
                        />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        No Matches Found
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Danh sách hộp chat hoặc lịch sử tin nhắn */}
              {!selectedChat ? (
                <div className="grid gap-2">
                  {mockChats.map((chat) => (
                    <ChatBox
                      key={chat.id}
                      chat={chat}
                      onClick={() => setSelectedChat(chat)}
                      className="hover:bg-green-100 transition duration-200 rounded-lg p-2 shadow-md cursor-pointer"
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-gray-700">
                      {selectedChat.sender}'s Messages
                    </h3>
                    <button
                      className="text-sm text-blue-500 hover:text-blue-700 transition"
                      onClick={() => setSelectedChat(null)}
                    >
                      Back to Chats
                    </button>
                  </div>
                  <div className="max-h-60 overflow-y-auto bg-gray-100 p-2 rounded-lg shadow-inner space-y-2">
                    {selectedChat.messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          msg.sender === "You" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span
                          className={`inline-block px-4 py-2 rounded-lg text-sm shadow-sm ${
                            msg.sender === "You"
                              ? "bg-green-300 text-white"
                              : "bg-gray-300 text-gray-800"
                          }`}
                        >
                          {msg.sender === "You" ? "You" : msg.sender}:{" "}
                          {msg.message}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Ô nhập tin nhắn mới */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-full p-2 flex-grow shadow-sm focus:outline-none focus:ring focus:ring-green-200"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-4 py-2 shadow-md transition"
                      onClick={handleSendMessage}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="w-3/4 flex justify-center items-center bg-gray-50">
        <div className="relative w-[380px] h-[620px]">
          {users.map((profile, index) => (
            <TinderCard
              key={profile.id}
              onSwipe={(dir) => onSwipe(dir, profile.fullName, profile.id)}
              onCardLeftScreen={() => {
                cardRefs.current[index].restoreCard();
              }}
              className="absolute w-full h-full"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div
                className="bg-white rounded-lg shadow-lg w-full h-full overflow-hidden relative"
                style={{
                  backgroundImage: `url(${profile.photos[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <button
                  className="absolute top-2 right-2 text-red-500 hover:text-red-600 bg-white p-2 rounded-full shadow-lg"
                  onClick={() => openModal(profile.id)}
                >
                  <IoFlag className="text-xl" />
                </button>

                {/* Name, Age, and See Profile Button */}
                <div className="mt-[390px]">
                  <div className="p-4 flex justify-between items-center bg-transparent bg-opacity-80">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-5">
                        <h2 className="text-2xl font-bold text-white">
                          {profile.fullName.split(" ")[0]}, {profile.age}
                        </h2>
                        <button
                          onClick={() => getInforById(profile.id)}
                          className="text-green-500 border border-transparent hover:border-green-500 hover:bg-opacity-10 bg-transparent px-3 py-1 rounded-full ml-2"
                        >
                          See Profile...
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-white">
                        <FaLocationDot className="text-xl text-white" />
                        <span>{profile.location}</span>
                      </div>
                    </div>

                    {isOpen && reportUserId === profile.id && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] max-w-lg">
                          <h2 className="text-2xl font-semibold text-center text-red-500 mb-6">
                            Report {profile.fullName}
                          </h2>
                          <select
                            value={selectedReason}
                            onChange={(e) => setSelectedReason(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                          >
                            <option value="" disabled>
                              Select a reason
                            </option>
                            {reportReasons.map((reason) => (
                              <option key={reason.name} value={reason.name}>
                                {reason.reason}
                              </option>
                            ))}
                          </select>
                          <div className="flex justify-between items-center">
                            <button
                              className="text-gray-500 hover:text-white hover:bg-blue-500 px-6 py-2 border border-gray-300 rounded-full transition duration-200"
                              onClick={() =>
                                reportUser(profile.id, selectedReason)
                              } // Bọc hàm trong arrow function
                            >
                              Confirm
                            </button>
                            <button
                              onClick={closeModal}
                              className="text-gray-500 hover:text-white hover:bg-black px-6 py-2 border border-gray-300 rounded-full transition duration-200"
                            >
                              CANCEL
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <button
                    className="bg-red-500 text-white w-10 h-10 rounded-full shadow-lg"
                    onClick={() => swipeLeft(index)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <button className="bg-blue-500 text-white w-10 h-10 rounded-full shadow-lg">
                    <i className="fas fa-star"></i>
                  </button>
                  <button
                    className="bg-green-500 text-white w-10 h-10 rounded-full shadow-lg"
                    onClick={() => swipeRight(index)}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>

      {selectedProfile && (
        <div
          key={selectedProfile.data.id}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out opacity-100"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-[600px] relative transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition duration-200 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4 text-center text-green-600">
              {selectedProfile.data.fullName}, {selectedProfile.data.age}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <div className="mb-2">
                  <strong className="text-gray-700">Occupation:</strong>{" "}
                  {selectedProfile.data.occupation}
                </div>
                <div className="mb-2">
                  <strong className="text-gray-700">Gender:</strong>{" "}
                  {selectedProfile.data.gender}
                </div>
                <div className="mb-2">
                  <strong className="text-gray-700">Level:</strong>{" "}
                  {selectedProfile.data.level}
                </div>
                <div className="mb-2">
                  <strong className="text-gray-700">Available Time:</strong>{" "}
                  {selectedProfile.data.availableTime.join(", ")}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <strong className="text-gray-700">Date of Birth:</strong>{" "}
                  {selectedProfile.data.dob.join("-")}
                </div>
                <div className="mb-2">
                  <strong className="text-gray-700">Description:</strong>{" "}
                  {selectedProfile.data.description}
                </div>
                <div className="mb-2">
                  <strong className="text-gray-700">Location:</strong>{" "}
                  {selectedProfile.data.location}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {Array.from({ length: 6 }, (_, index) =>
                selectedProfile.data.photos &&
                selectedProfile.data.photos[index] ? (
                  <img
                    key={index}
                    src={selectedProfile.data.photos[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg border border-gray-300 shadow-sm hover:shadow-lg transition duration-200 transform hover:scale-110"
                    onClick={() =>
                      handleImageClick(selectedProfile.data.photos[index])
                    }
                  />
                ) : (
                  <div
                    key={index}
                    className="w-full h-40 border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100"
                  >
                    <span className="text-gray-400">No Image</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-200"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Matching;
