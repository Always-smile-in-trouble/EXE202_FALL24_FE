import React, { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import logo from "../../assets/logo/game.png";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Image, Upload } from "antd";
import "./index.scss";
import uploadFile from "../../config/upload";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
  // State để quản lý việc hiển thị form và lưu trữ thông tin
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [times, setTimes] = useState([]);
  const selectedEmail = useSelector((store) => store.userRegister.email);
  const selectedPassword = useSelector((store) => store.userRegister.password);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: selectedEmail,
    phone: "",
    password: selectedPassword,
    name: "",
    dob: "",
    gender: "",
    occupation: "",
    level: "",
    description: "",
    location: "",
    availableTime: [],
    photo: [],
  });
  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
    setUserData({ ...userData, gender: selectedGender }); // Update the gender state
  };
  const handleLevelSelection = (selectedLevel) => {
    setLevel(selectedLevel);
    setUserData({ ...userData, level: selectedLevel });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };
  const handleTimeSelection = (time) => {
    const updatedTimes = times.includes(time)
      ? times.filter((t) => t !== time) // Remove if already selected
      : [...times, time]; // Add if not selected

    setTimes(updatedTimes);
    setUserData((prevData) => ({ ...prevData, availableTime: updatedTimes }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (fileList.length < 2) {
      toast.error("Please upload at least 2 photos.");
      return;
    }
    try {
      const uploadedUrls = await Promise.all(
        fileList.map((file) => uploadFile(file.originFileObj))
      );

      const updatedUserData = { ...userData, photo: uploadedUrls };
      setUserData(updatedUserData);

      const response = await api.post("/user/v1/register", updatedUserData);
      console.log(response.data);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const [showFormRule, setShowFormRule] = useState(true);

  const handleAgree = () => {
    setShowFormRule(false);
  };
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    try {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
    } catch (error) {
      console.error("Image preview failed: ", error);
    }
  };

  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    const updatedPhotos = newFileList
      .map((file) => {
        if (file.status === "done") {
          return file.response?.url || file.url || file.preview;
        }
        return null;
      })
      .filter(Boolean);

    setUserData((prevData) => ({
      ...prevData,
      photo: updatedPhotos,
    }));
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/matching"); // Nếu có token, điều hướng đến trang matching
    }
  }, [navigate]);

  return (
    <div className="relative z-50">
      {showFormRule && <FormRule onAgree={handleAgree} />}
      {showFormRule && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" />
      )}
      {!showFormRule && (
        <form
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
          onSubmit={registerUser}
        >
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl md:w-2/3">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Upload profile
            </h1>

            <div className="flex justify-between">
              {/* Left side: Form */}
              <div className="w-2/3 space-y-4">
                {/* First Name & Email */}
                <div>
                  <label className="block text-gray-700 font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="Input your first name..."
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="Input your telephone number...."
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="Examle@gmail.com..."
                    value={selectedEmail}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="Input your occupation...."
                    value={userData.occupation}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="More about Yourself...."
                    value={userData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    name="dob"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="YYYY-MM-DD"
                    value={userData.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 bg-transparent"
                    placeholder="Your Address"
                    value={userData.location}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="block text-gray-700 font-bold mb-2">
                    Gender
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      name="gender"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        gender === "MALE" ? "border-green-400 bg-green-100" : ""
                      }`}
                      onClick={() => handleGenderSelection("MALE")}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      name="gender"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        gender === "FEMALE"
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleGenderSelection("Woman")}
                    >
                      Female
                    </button>
                  </div>
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox border-gray-300 focus:outline-none"
                      />
                      <span className="ml-2 text-gray-600 mt-2">
                        Show my gender on my profile
                      </span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-700 font-bold mb-2">
                    Level
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      name="level"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        level === "BEGINNER"
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleLevelSelection("BEGINNER")}
                    >
                      BEGINNER
                    </button>
                    <button
                      type="button"
                      name="level"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        level === "CASUAL"
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleLevelSelection("CASUAL")}
                    >
                      CASUAL
                    </button>
                    <button
                      type="button"
                      name="level"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        level === "PROFESSIONAL"
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleLevelSelection("PROFESSIONAL")}
                    >
                      PROFESSIONAL
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-700 font-bold mb-2">
                    Available Time
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      name="availableTime"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        times.includes("MORNING")
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleTimeSelection("MORNING")}
                    >
                      MORNING
                    </button>
                    <button
                      type="button"
                      name="availableTime"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        times.includes("AFTERNOON")
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleTimeSelection("AFTERNOON")}
                    >
                      AFTERNOON
                    </button>
                    <button
                      type="button"
                      name="availableTime"
                      className={`flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400 ${
                        times.includes("EVENING")
                          ? "border-green-400 bg-green-100"
                          : ""
                      }`}
                      onClick={() => handleTimeSelection("EVENING")}
                    >
                      EVENING
                    </button>
                  </div>
                </div>

                {/* Looking for */}
              </div>

              {/* Right side: Profile Photos */}
              <div className="w-full max-w-md md:w-2/4 md:ml-8 mt-4 md:mt-0">
                <label className="block text-gray-700 mb-2 font-bold">
                  Profile photos
                </label>

                {/* Grid for displaying uploaded images */}
                <div className="upload-grid">
                  <Upload
                    name="photo"
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    // Control to limit max images to 6
                    beforeUpload={(file) => {
                      if (fileList.length >= 6) {
                        return Upload.LIST_IGNORE; // Prevents more than 6 uploads
                      }
                      return true;
                    }}
                  >
                    {/* Hide upload button when 6 images are uploaded */}
                    {fileList.length < 6 && uploadButton}
                  </Upload>

                  {/* Preview image modal */}
                  {previewImage && (
                    <Image
                      wrapperStyle={{
                        display: "none",
                      }}
                      preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                          !visible && setPreviewImage(""),
                      }}
                      src={previewImage}
                    />
                  )}
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  Upload 2 photos to start. Add 4 or more to make your profile
                  stand out.
                </p>

                {/* Display an error message if less than 2 images are uploaded */}
                {fileList.length < 2 && (
                  <p className="text-red-500 text-sm mt-2">
                    Please upload at least 2 images.
                  </p>
                )}
              </div>
            </div>

            {/* Continue Button */}
            <div className="mt-10">
              <button className="w-auto px-8 py-3 mx-auto bg-gradient-to-r from-green-300 to-green-500 text-white font-semibold rounded-full focus:outline-none block">
                Continue
              </button>
            </div>

            <p
              className="text-center text-blue-500 mt-9 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Already have an account? Log in.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
const FormRule = ({ onAgree }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50 z-40" />{" "}
      {/* Lớp overlay */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm w-full z-50 transition-transform transform scale-95 hover:scale-100">
        <img src={logo} alt="Tinder Logo" className="mx-auto mb-4 w-12" />
        <h2 className="text-2xl font-bold mb-4">Welcome to ShuttleSmash</h2>
        <p className="text-gray-600 mb-6">Please follow these house rules:</p>
        <ul className="text-left space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <div>
              <strong>Be yourself:</strong>
              <p className="text-gray-600">
                Make sure your photos, age, and bio are accurate to who you are.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <div>
              <strong>Stay safe:</strong>
              <p className="text-gray-600">
                Don't be too quick to give out personal information.{" "}
                <a href="#" className="text-blue-500">
                  Date Safely
                </a>
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <div>
              <strong>Play it cool:</strong>
              <p className="text-gray-600">
                Respect others and treat them as you would like to be treated.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <div>
              <strong>Be proactive:</strong>
              <p className="text-gray-600">Always report bad behavior.</p>
            </div>
          </li>
        </ul>
        <button
          onClick={onAgree}
          className="mt-6 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full"
        >
          I agree
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
