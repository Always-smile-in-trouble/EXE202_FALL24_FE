import React, { useEffect, useState } from "react";
import "./membership.scss";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";

function MemberShip() {
  const [memberships, setMemberships] = useState([]);
  const navigate = useNavigate();

  async function paymentPayOS(subscriptionId) {
    const res = await api.post("/payos/v1/subscriptionPayment", {
      subscriptionId,
      redirectUrl: "https://shuttle-smash.vercel.app/paymentReturn",
    });
    console.log(res.data.data.paymentUrl);
    window.location.href = res.data.data.paymentUrl;
  }

  // Lấy thông tin gói đăng ký từ API
  async function fetchMembership() {
    const response = await api.get("/subscription/v1/getAll");
    console.log(response.data.data);
    setMemberships(response.data.data);
  }

  useEffect(() => {
    fetchMembership();
  }, []);

  return (
    <section className="pricing-table">
      <div className="container">
        <div className="block-heading">
          <h2>Gói Đăng Ký</h2>
          <p>
            Chọn gói đăng ký phù hợp để nâng cấp trải nghiệm cộng đồng cầu lông
            của chúng tôi và tìm kiếm đồng đội.
          </p>
        </div>
        <div className="row">
          {memberships.map((membership) => (
            <div key={membership.id} className="col-md-5 col-lg-4">
              <div className="item">
                {/* Hiển thị ribbon cho gói DIAMOND */}
                {membership.name === "DIAMOND" && (
                  <div className="ribbon">Best Values</div>
                )}
                <div className="heading">
                  <h3>
                    {/* Tùy chỉnh tên gói nếu cần */}
                    {membership.name === "FREE"
                      ? "GÓI MIỄN PHÍ"
                      : membership.name === "DIAMOND"
                      ? "GÓI CAO CẤP"
                      : "GÓI NGẮN HẠN"}
                  </h3>
                </div>
                <p>
                  {/* Tùy chỉnh giới thiệu cho từng gói */}
                  {membership.name === "FREE"
                    ? "Gói miễn phí cho người mới."
                    : membership.name === "DIAMOND"
                    ? "Gói cao cấp với nhiều ưu đãi."
                    : "Gói cho người dùng ngắn hạn."}
                </p>
                <div className="features">
                  <h4>
                    <span className="feature">Giá</span>:{" "}
                    <span className="value">${membership.price}</span>
                  </h4>
                  <h4>
                    <span className="feature">Thời gian</span>:{" "}
                    <span className="value">
                      {membership.durationDays} Ngày
                    </span>
                  </h4>
                  <h4>
                    <span className="feature">Số lượt thích mỗi ngày</span>:{" "}
                    <span className="value">{membership.likesPerDay}</span>
                  </h4>
                </div>
                <div className="price">
                  <h4>
                    ${membership.price === 0 ? "MIỄN PHÍ" : membership.price}
                  </h4>
                </div>
                <button
                  className="btn btn-block btn-outline-primary"
                  type="submit"
                  onClick={() => {
                    paymentPayOS(membership.id);
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberShip;
