import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const navigate = useNavigate();
  const storage = getStorage();

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/user/v1/getUserInfo");
        const userData = response.data.data;
        if (userData.dob) {
          const dob = new Date(userData.dob);
          userData.dob = dob.toISOString().split("T")[0];
        }
        setUser(userData);
        setEditedUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  const handlePhotoUpload = async (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = ref(storage, `users/${user.id}/photo-${index}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      const updatedPhotos = [...editedUser.photos];
      updatedPhotos[index] = downloadURL;
      setEditedUser({ ...editedUser, photos: updatedPhotos });
    }
  };

  const handlePhotoDelete = async (index) => {
    const photoUrl = editedUser.photos[index];
    const photoRef = ref(storage, photoUrl);
    await deleteObject(photoRef);

    const updatedPhotos = [...editedUser.photos];
    updatedPhotos[index] = null;
    setEditedUser({ ...editedUser, photos: updatedPhotos });
  };

  const handleUpdateProfile = async () => {
    try {
      await api.put("/user/v1/update", editedUser);
      setUser({ ...editedUser });
      setIsEditing(false); // Tắt chế độ chỉnh sửa
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Show loading
  if (!user)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
        <button
          onClick={() => navigate("/history")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          <i className="fa-solid fa-clock-rotate-left mr-2"></i> Transaction
        </button>
      </div>

      {/* User Profile Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 border">
          <img
            src={editedUser.photos[0] || user.photos[0]}
            alt="User profile"
            className="object-cover w-full h-full"
          />
          {isEditing && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <input
                type="file"
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                onChange={(e) => handlePhotoUpload(e, 0)}
              />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {editedUser.fullName}, {editedUser.age}
          </h1>
          <p className="text-gray-500">
            {editedUser.occupation} - {editedUser.level}
          </p>
          {!isEditing && (
            <button onClick={toggleEditMode} className="text-gray-500 ml-2">
              <i className="fa-solid fa-pencil-alt"></i> Edit
            </button>
          )}
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {["phone", "email", "dob", "gender", "location", "availableTime"].map(
          (field) => (
            <div key={field}>
              <strong className="text-gray-600 capitalize">
                {field.replace("_", " ")}:
              </strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  className="border-b border-gray-400 focus:outline-none"
                  value={editedUser[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              ) : (
                user[field]
              )}
            </div>
          )
        )}
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">About</h2>
        {isEditing ? (
          <textarea
            className="w-full border rounded p-2"
            value={editedUser.description || ""}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        ) : (
          <p className="text-gray-600">{user.description}</p>
        )}
      </div>

      {/* Photos Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Photos</h2>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative w-full h-32 bg-gray-200 border rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
            >
              {editedUser.photos[index] ? (
                <img
                  src={editedUser.photos[index]}
                  alt={`User photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">Empty Slot</span>
              )}
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <input
                    type="file"
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    onChange={(e) => handlePhotoUpload(e, index)}
                  />
                  <button
                    onClick={() => handlePhotoDelete(index)}
                    className="absolute top-2 right-2 text-white"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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

      {/* Update Button */}
      {isEditing && (
        <button
          onClick={handleUpdateProfile}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Update Profile
        </button>
      )}
    </div>
  );
};

export default UserProfile;
