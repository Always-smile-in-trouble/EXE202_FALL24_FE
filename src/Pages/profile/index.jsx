import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/user/v1/getUserInfo");
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Show a loading message while fetching data
  if (!user)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const handleTransactionHistory = () => {
    navigate("/history");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
        <button
          onClick={handleTransactionHistory}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          <i className="fa-solid fa-clock-rotate-left mr-2"></i>
          Transaction
        </button>
      </div>

      {/* Display User Information */}
      <div>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border">
              <img
                src={user.photos[0]}
                alt="User profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {user.fullName}
              </h1>
              <p className="text-gray-500">
                {user.occupation} - {user.level}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <strong className="text-gray-600">Phone:</strong> {user.phone}
          </div>
          <div>
            <strong className="text-gray-600">Email:</strong> {user.email}
          </div>
          <div>
            <strong className="text-gray-600">Date of Birth:</strong>{" "}
            {user.dob.join("-")}
          </div>
          <div>
            <strong className="text-gray-600">Age:</strong> {user.age}
          </div>
          <div>
            <strong className="text-gray-600">Gender:</strong> {user.gender}
          </div>
          <div>
            <strong className="text-gray-600">Location:</strong> {user.location}
          </div>
          <div>
            <strong className="text-gray-600">Available Time:</strong>{" "}
            {user.availableTime.join(", ")}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">About</h2>
          <p className="text-gray-600">{user.description}</p>
        </div>

        {/* Photos Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Photos</h2>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-32 bg-gray-200 border rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => openPhotoModal(user.photos[index])}
              >
                {user.photos[index] ? (
                  <img
                    src={user.photos[index]}
                    alt={`User photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Empty Slot</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Displaying Selected Photo */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closePhotoModal}
          >
            <div
              className="relative p-4 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt="Selected"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full"
                onClick={closePhotoModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
