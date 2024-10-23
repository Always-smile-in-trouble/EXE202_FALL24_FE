import React, { useEffect, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { IoMdInformationCircle } from "react-icons/io";
import { IoFlag, IoShieldSharp } from "react-icons/io5";
import api from "../../config/axios";
import { Image } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/features/userSlice";
import { FaLocationDot } from "react-icons/fa6";

const profiles = [
  {
    name: "Cy Cy",
    age: 23,
    images: [
      "https://i.pinimg.com/736x/0b/64/af/0b64afdbb1c8a951c18649cc1cc46f6a.jpg",
      "https://your-image-url.com/2",
      "https://your-image-url.com/3",
      "https://your-image-url.com/4",
      "https://your-image-url.com/5",
    ],
    tags: [
      "Self Care",
      "House Parties",
      "Travel",
      "Self Development",
      "Expositions",
    ],
  },
  {
    name: "Nhung",
    age: 21,
    images: [
      "https://thethaovanhoa.mediacdn.vn/372676912336973824/2023/3/11/pinkkkopat3343031907530255828959243814965382366081533n-1678543861089455570321.jpg",
      "https://your-image-url.com/2",
      "https://your-image-url.com/3",
      "https://your-image-url.com/4",
      "https://your-image-url.com/5",
    ],
    tags: ["Art", "Movies", "Music", "Sports", "Photography"],
  },
  {
    name: "Thao",
    age: 21,
    images: [
      "https://cdnphoto.dantri.com.vn/g95vyXd5eHiR0fpHU-kNN1bab4U=/thumb_w/1155/2022/05/18/1216556543587931719867453231343574466568644n1-1652849563857.jpg",
      "https://your-image-url.com/2",
      "https://your-image-url.com/3",
      "https://your-image-url.com/4",
      "https://your-image-url.com/5",
    ],
    tags: ["Art", "Movies", "Music", "Sports", "Photography"],
  },
  // {
  //   name: "Bich",
  //   age: 21,
  //   images: [
  //     "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291730269_1354821661692267_2493002724347922926_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7XBqkW5Cd_djgb24-ZT3ilRCPVAfbbdSVEI9UB9tt1Hc3tl8ekXDtffRtQB92Wvpvkuqx6bM8H-xE37Y2qRtx&_nc_ohc=uVcaTY3vYAQQ7kNvgHgAcxo&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Aj8e_8nxmCSUNUynpRwQLYi&oh=00_AYBYSJ0aKdQvyk92rCHYhneqt8MV7SVQGQoCxa-kyAVudA&oe=670EE487",
  //     "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291730269_1354821661692267_2493002724347922926_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7XBqkW5Cd_djgb24-ZT3ilRCPVAfbbdSVEI9UB9tt1Hc3tl8ekXDtffRtQB92Wvpvkuqx6bM8H-xE37Y2qRtx&_nc_ohc=uVcaTY3vYAQQ7kNvgHgAcxo&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Aj8e_8nxmCSUNUynpRwQLYi&oh=00_AYBYSJ0aKdQvyk92rCHYhneqt8MV7SVQGQoCxa-kyAVudA&oe=670EE487",
  //     "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291730269_1354821661692267_2493002724347922926_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7XBqkW5Cd_djgb24-ZT3ilRCPVAfbbdSVEI9UB9tt1Hc3tl8ekXDtffRtQB92Wvpvkuqx6bM8H-xE37Y2qRtx&_nc_ohc=uVcaTY3vYAQQ7kNvgHgAcxo&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Aj8e_8nxmCSUNUynpRwQLYi&oh=00_AYBYSJ0aKdQvyk92rCHYhneqt8MV7SVQGQoCxa-kyAVudA&oe=670EE487",
  //     "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291730269_1354821661692267_2493002724347922926_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7XBqkW5Cd_djgb24-ZT3ilRCPVAfbbdSVEI9UB9tt1Hc3tl8ekXDtffRtQB92Wvpvkuqx6bM8H-xE37Y2qRtx&_nc_ohc=uVcaTY3vYAQQ7kNvgHgAcxo&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Aj8e_8nxmCSUNUynpRwQLYi&oh=00_AYBYSJ0aKdQvyk92rCHYhneqt8MV7SVQGQoCxa-kyAVudA&oe=670EE487",
  //     "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291730269_1354821661692267_2493002724347922926_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7XBqkW5Cd_djgb24-ZT3ilRCPVAfbbdSVEI9UB9tt1Hc3tl8ekXDtffRtQB92Wvpvkuqx6bM8H-xE37Y2qRtx&_nc_ohc=uVcaTY3vYAQQ7kNvgHgAcxo&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Aj8e_8nxmCSUNUynpRwQLYi&oh=00_AYBYSJ0aKdQvyk92rCHYhneqt8MV7SVQGQoCxa-kyAVudA&oe=670EE487",
  //   ],
  //   tags: ["Art", "Movies", "Music", "Sports", "Photography"],
  // },
];

function Matching() {
  const [currentTab, setCurrentTab] = useState("matches");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportUserId, setReportUserId] = useState(null);
  const [reportReason, setReportReason] = useState("");
  const openModal = (id) => {
    setReportUserId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSwipe = (direction, name) => {
    console.log("You swiped: " + direction + " on " + name);
  };

  // const handleSeeProfile = (profile) => {
  //   getInforById(profile.id);
  // };

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setSelectedImage(null); // Reset ảnh đã chọn khi đóng modal
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Cập nhật ảnh đã chọn
  };

  const swipeLeft = (index) => {
    cardRefs.current[index].swipe("left");
  };

  const swipeRight = (index) => {
    cardRefs.current[index].swipe("right");
  };

  async function reportUser(toUserId, reason) {
    const response = await api.post("/report/v1/report", {
      toUserId,
      reason,
    });
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

  useEffect(() => {
    fetchDataUser();
    fetchProfile();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-2/6 bg-gray-100 flex flex-col">
        <div className="flex items-center justify-between mb-3 bg-green-400 p-4">
          <div className="flex items-center">
            {userProfile?.photos?.[0] && (
              <img
                src={userProfile.photos[0]}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-500 mr-2"
              />
            )}
            <span className="text-sm font-bold text-white ml-1">
              {userProfile.fullName}
            </span>
          </div>
          <div className="flex space-x-4">
            <i className="fas fa-cog text-gray-600 cursor-pointer rounded-full p-2 hover:bg-gray-200"></i>
            <i className="fas fa-bell text-gray-600 cursor-pointer rounded-full p-2 hover:bg-gray-200"></i>
            <i
              className="fas fa-sign-out-alt text-gray-600 cursor-pointer rounded-full p-2 hover:bg-gray-200"
              onClick={() => {
                dispatch(clear()), navigate("/home");
              }}
            ></i>
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
            <div className="text-center text-gray-600">
              <h2 className="text-xl font-bold mb-4">Start Matching</h2>
              <p>Matches will appear here once you start to Like people.</p>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <h2 className="text-xl font-bold mb-4">Your Messages</h2>
              <p>Your conversations will appear here.</p>
            </div>
          )}
        </div>
      </div>

      <div className="w-3/4 flex justify-center items-center bg-gray-50">
        <div className="relative w-[380px] h-[620px]">
          {users.map((profile, index) => (
            <TinderCard
              key={profile.id}
              onSwipe={(dir) => onSwipe(dir, profile.name)}
              className="absolute w-full h-full"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div
                key={profile.id}
                className="bg-white rounded-lg shadow-lg w-full h-full overflow-hidden relative"
                style={{
                  backgroundImage: `url(${profile.photos[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Information Icon and Modal Trigger */}
                <button
                  key={profile.id}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-600 bg-white p-2 rounded-full shadow-lg"
                  onClick={() => {
                    openModal(profile.id);
                  }}
                >
                  <IoFlag className="text-xl" />
                </button>
                {/* Name, age, and See Profile button */}
                <div className="mt-[390px]">
                  <div className="p-4 flex justify-between items-center bg-transparent bg-opacity-80">
                    <div className="flex flex-col gap-2">
                      {/* Profile Name and Age */}
                      <div className="flex items-center gap-5">
                        <h2 className="text-2xl font-bold text-white">
                          {profile.fullName}, {profile.age}
                        </h2>
                        <button
                          key={profile.id}
                          onClick={() => getInforById(profile.id)}
                          className="text-green-500 border border-transparent hover:border-green-500 hover:bg-opacity-10 bg-transparent px-3 py-1 rounded-full ml-2"
                        >
                          See Profile...
                        </button>
                      </div>

                      {/* Location and Icon */}
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
                          <input
                            type="text"
                            placeholder="Enter reason for reporting"
                            value={reportReason}
                            onChange={(e) => setReportReason(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                          />
                          <div className="flex justify-between items-center">
                            <button
                              className="text-gray-500 hover:text-white hover:bg-blue-500 px-6 py-2 border border-gray-300 rounded-full transition duration-200"
                              onClick={() => {
                                reportUser(profile.id, reportReason); // Gọi hàm reportUser với lý do nhập
                                setReportReason(""); // Reset lý do sau khi báo cáo
                                closeModal(); // Đóng modal
                              }}
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

                {/* Action buttons */}
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
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 w-[600px] relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition duration-200 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4 text-center text-green-600">
              {selectedProfile.data.fullName}, {selectedProfile.data.age}
            </h2>

            <div className="flex flex-col gap-4 mb-4">
              {/* First row of images */}
              <div className="flex justify-between">
                {selectedProfile.data.photos?.length > 0 ? (
                  selectedProfile.data.photos.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-[170px] h-60 object-cover rounded-lg border border-gray-300 shadow-sm hover:shadow-lg transition duration-200"
                      onClick={() => handleImageClick(image)}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No photos available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            {/* Nút đóng ảnh lớn */}
            <button
              onClick={() => setSelectedImage(null)} // Đóng modal ảnh lớn
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
