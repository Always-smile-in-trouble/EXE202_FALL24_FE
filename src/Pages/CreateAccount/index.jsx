import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import logo from "../../assets/logo/game.png";

const CreateAccount = () => {
  // State để quản lý việc hiển thị form và lưu trữ thông tin
  const [showRelationshipForm, setShowRelationshipForm] = useState(false);
  const [relationshipIntent, setRelationshipIntent] = useState("");
  const [relationshipTags, setRelationshipTags] = useState([
    "Long-term partner",
  ]); // danh sách các tag

  const [showInterestForm, setShowInterestForm] = useState(false);
  const [inputInterest, setInputInterest] = useState("");
  const [interestTags, setInterestTags] = useState([
    "Harry Potter",
    "Spotify",
    "Movies",
    "Tattoos",
  ]); // các tag mặc định

  // Hàm xử lý khi submit Relationship Intent
  const handleRelationshipSubmit = (e) => {
    e.preventDefault();
    if (relationshipIntent) {
      setRelationshipTags([...relationshipTags, relationshipIntent]); // thêm tag mới vào danh sách
      setShowRelationshipForm(false);
      setRelationshipIntent("");
    }
  };

  // Hàm xử lý khi submit Interests
  const handleInterestSubmit = (e) => {
    e.preventDefault();
    if (inputInterest) {
      setInterestTags([...interestTags, inputInterest]);
      setShowInterestForm(false);
      setInputInterest("");
    }
  };

  const [showFormRule, setShowFormRule] = useState(true);

  const handleAgree = () => {
    setShowFormRule(false);
  };

  return (
    <div className="relative z-50">
      {showFormRule && <FormRule onAgree={handleAgree} />}
      {showFormRule && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" />
      )}
      {!showFormRule && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2"
                    placeholder="Input your first name..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-2"
                    placeholder="Examle@gmail.com..."
                  />
                </div>

                {/* Birthday */}
                <div className="space-y-1">
                  <label className="block text-gray-700 font-bold mb-2">
                    Birthday
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Day"
                    />
                    <input
                      type="text"
                      className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Month"
                    />
                    <input
                      type="text"
                      className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Year"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="block text-gray-700 font-bold mb-2">
                    Gender
                  </label>
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400">
                      Man
                    </button>
                    <button className="flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400">
                      Woman
                    </button>
                    <button className="flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400">
                      More
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
                    Interested in
                  </label>
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400">
                      Man
                    </button>
                    <button className="flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400">
                      Woman
                    </button>
                    <button className="flex-1 py-2 border border-gray-300 rounded-full text-center focus:outline-none hover:border-green-400">
                      Everyone
                    </button>
                  </div>
                </div>

                {/* Looking for */}
                <div className="space-y-1">
                  <label className="block text-gray-700 font-bold mb-2">
                    Looking for
                  </label>
                  <div className="flex items-center justify-between space-x-2 ">
                    <button
                      className="py-2 px-4 border border-gray-300 rounded-full flex gap-2 items-center focus:outline-none hover:border-green-400 mb-2"
                      onClick={() => setShowRelationshipForm(true)}
                    >
                      <FaPencil />
                      Edit Relationship Intent
                    </button>
                    {/* Hiển thị danh sách Relationship Intent */}
                  </div>

                  {/* Form nhập Relationship Intent */}
                  {showRelationshipForm && (
                    <form onSubmit={handleRelationshipSubmit} className="mt-4">
                      <input
                        type="text"
                        value={relationshipIntent}
                        onChange={(e) => setRelationshipIntent(e.target.value)}
                        className="py-2 px-4 border border-gray-300 rounded-full focus:outline-none w-full"
                        placeholder="Enter relationship intent"
                      />
                      <button
                        type="submit"
                        className="py-2 px-4 mt-2 bg-black text-white rounded-full"
                      >
                        Submit
                      </button>
                    </form>
                  )}

                  {/* Hiển thị danh sách Relationship Intent */}
                  <div className="mt-2">
                    {relationshipTags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-green-400 text-sm border border-green-400 px-3 py-1 rounded-full mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side: Profile Photos */}
              <div className="w-full max-w-md md:w-1/3 md:ml-8 mt-4 md:mt-0">
                <label className="block text-gray-700 mb-2 font-bold">
                  Profile photos
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-full h-24 bg-gray-100 border border-gray-300 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="profile pic"
                    />
                  </div>
                  <div className="w-full h-24 bg-gray-100 border border-gray-300 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="profile pic"
                    />
                  </div>
                  <div className="w-full h-24 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-3xl">+</span>
                  </div>
                  <div className="w-full h-24 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-3xl">+</span>
                  </div>
                  <div className="w-full h-24 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-3xl">+</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Upload 2 photos to start. Add 4 or more to make your profile
                  stand out.
                </p>
              </div>
            </div>

            {/* Optional Section with Lines */}
            <div className="flex items-center justify-center my-8">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-lg font-bold text-gray-700">
                Optional
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Interests */}
            <div className="space-y-1">
              <label className="block text-gray-700 font-bold mb-2">
                Interests
              </label>
              <div className="flex items-center justify-between space-x-2">
                <button
                  className="py-2 px-4 border border-gray-300 rounded-full flex gap-2 items-center focus:outline-none hover:border-green-400
            mb-2"
                  onClick={() => setShowInterestForm(true)}
                >
                  <FaPencil />
                  Edit Interests
                </button>
              </div>

              {/* Form nhập Interests */}
              {showInterestForm && (
                <form onSubmit={handleInterestSubmit} className="mt-4">
                  <input
                    type="text"
                    value={inputInterest}
                    onChange={(e) => setInputInterest(e.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-full focus:outline-none w-full"
                    placeholder="Enter interest"
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 mt-2 bg-black text-white rounded-full"
                  >
                    Submit
                  </button>
                </form>
              )}

              {/* Hiển thị danh sách Interests */}
              <div className="mt-2">
                {interestTags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-green-400 text-sm border border-green-400 px-3 py-1 rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sexual Orientation */}
            <div className="space-y-1 mt-4">
              <label className="block text-gray-700 font-bold mb-2">
                Sexual Orientation
              </label>
              <button className="py-2 px-4 border border-gray-300 rounded-full focus:outline-none hover:border-green-400">
                + Add Sexual Orientation
              </button>
            </div>

            {/* Continue Button */}
            <div className="mt-10">
              <button className="w-auto px-8 py-3 mx-auto bg-gradient-to-r from-green-300 to-green-500 text-white font-semibold rounded-full focus:outline-none block">
                Continue
              </button>
            </div>

            <p className="text-center text-blue-500 mt-9 cursor-pointer">
              Already have an account? Log in.
            </p>
          </div>
        </div>
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
