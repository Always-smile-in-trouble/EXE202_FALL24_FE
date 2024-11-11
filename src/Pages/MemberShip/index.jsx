import React, { useEffect, useState } from "react";
import "./membership.scss";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { payment } from "../../redux/features/billPayment";

function MemberShip() {
  const [memberships, setMemberships] = useState([]);
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function paymentPayOS(subscriptionId) {
    const redirectUrl =
      process.env.NODE_ENV === "production"
        ? "https://shuttle-match.vercel.app/paymentReturn"
        : "http://localhost:5173/paymentReturn";

    const res = await api.post("/payos/v1/subscriptionPayment", {
      subscriptionId,
      redirectUrl,
    });

    console.log(res.data.data.paymentId);
    console.log(res.data.data.paymentUrl);
    dispatch(payment(res.data.data));
    window.location.href = res.data.data.paymentUrl;
  }

  // Lấy thông tin gói đăng ký từ API
  async function fetchMembership() {
    const response = await api.get("/subscription/v1/getAll");
    console.log(response.data.data);
    setMemberships(response.data.data);
  }

  async function fetchInforUser() {
    const response = await api.get("/user/v1/getUserInfo");
    console.log(response.data.data);
    setUser(response.data.data);
  }

  useEffect(() => {
    fetchMembership();
    fetchInforUser();
  }, []);

  return (
    <section className="pricing-table">
      <div className="container">
        <div className="block-heading">
          <div
            className="mr-[1180px]"
            onClick={() => {
              navigate("/matching");
            }}
          >
            <button className=" bg-green-400 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-500 transition duration-200 ease-in-out transform hover:scale-105">
              Back
            </button>
          </div>
          <div>
            <h2>Subscription Plans</h2>
            <p>
              Choose a suitable subscription plan to enhance your badminton
              community experience and find teammates.
            </p>
          </div>
        </div>
        <div className="row">
          {memberships.map((membership) => (
            <div key={membership.id} className="item">
              {/* Show ribbon for the DIAMOND plan */}
              {membership.name === "DIAMOND" && (
                <div className="ribbon">Best Values</div>
              )}
              <div className="heading">
                <h3>
                  {/* Customize the plan name if needed */}
                  {membership.name === "FREE"
                    ? "FREE PLAN"
                    : membership.name === "DIAMOND"
                    ? "PREMIUM PLAN"
                    : "SHORT-TERM PLAN"}
                </h3>
              </div>
              <p>
                {/* Customize the introduction for each plan */}
                {membership.name === "FREE"
                  ? "    Free plan for newcomers.    "
                  : membership.name === "DIAMOND"
                  ? "Premium plan with many benefits."
                  : "Plan for purchasing additional likes."}
              </p>
              <div className="features">
                <h4>
                  <span className="feature">Price</span>:{" "}
                  <span className="value">
                    {membership.price === 0
                      ? "FREE"
                      : `${membership.price.toLocaleString("en-US")} VND`}
                  </span>
                </h4>
                <h4>
                  <span className="feature">Duration</span>:{" "}
                  <span className="value">{membership.durationDays} Days</span>
                </h4>
                <h4>
                  <span className="feature">
                    {membership.name === "IN_DAY"
                      ? "Additional Likes"
                      : "Likes Per Day"}
                  </span>
                  : <span className="value">{membership.likesPerDay}</span>
                </h4>
              </div>
              <div className="price">
                <h4>
                  {membership.price === 0
                    ? "FREE"
                    : `${membership.price.toLocaleString("en-US")} VND`}
                </h4>
              </div>
              {membership.name === "FREE" ? (
                <div className="owned-message">
                  <button
                    className="btn btn-block btn-owned"
                    type="button"
                    disabled
                  >
                    Owned
                  </button>
                </div>
              ) : membership.name === "DIAMOND" && user.diamondMember ? (
                <div className="owned-message">
                  <button
                    className="btn btn-block btn-owned"
                    type="button"
                    disabled
                  >
                    Owned
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-block btn-not-owned"
                  type="submit"
                  onClick={() => {
                    paymentPayOS(membership.id);
                  }}
                >
                  BUY NOW
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberShip;
