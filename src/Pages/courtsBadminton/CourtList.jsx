import React, { useState } from "react";
import CourtItems from "./CourtItems";
import { useNavigate } from "react-router-dom";

function CourtList({ courts }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourts = courts.filter((court) =>
    court.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => navigate("/matching")}
        className="fixed top-4 left-40 px-4 py-2 mt-3 text-white bg-green-600 rounded hover:bg-green-700 z-50"
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        ← Quay lại
      </button>

      <div className="court-list max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-green-600 my-5 text-center">
          Tìm sân của bạn
        </h1>
        <input
          type="text"
          placeholder="Tìm kiếm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div>
          {filteredCourts.length > 0 ? (
            filteredCourts.map((court) => (
              <CourtItems key={court.id} court={court} />
            ))
          ) : (
            <p className="text-gray-500">Không tìm thấy sân phù hợp.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourtList;
