import React from "react";
import game from "../../../assets/logo/game.png";
import facebook from "../../../assets/social/facebook.png";
import instagram from "../../../assets/social/instagram.png";
import whatsapp from "../../../assets/social/whatsapp.png";
import linkedin from "../../../assets/social/linkedin.png";
import youtube from "../../../assets/social/youtube.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeadset,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer  py-14 px-10 bg-gray-600 dark:bg-gray-700 text-base-content">
        <aside>
          <div className="flex flex-col justify-center ml-10 mb-2">
            <img loading="lazy" className="w-20 md:w-28" src={game} />
            <p className="text-green-600 font-second_font">ShuttleSmash</p>
          </div>
          <p className="-mt-3 ps-3.5 text-sm font-semibold text-slate-300 dark:text-white">
            Let's Connect Together
          </p>
          <div className="flex justify-center space-x-4 mt-5 py-4">
            <Link to="#">
              <img className="w-8" src={facebook} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={instagram} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={whatsapp} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={linkedin} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={youtube} alt="" />
            </Link>
          </div>
        </aside>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Contact Us
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt />
              Lot E2a-7, Road D1, D1 Street, Long Thanh My, Thu Duc City, Ho Chi
              Minh City 700000
            </p>
            <p className="flex items-center gap-1">
              <FaPhoneAlt />
              +84 01711-22334455
            </p>
            <p className="flex items-center gap-1">
              <FaHeadset />
              +84 09811-222333
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope />
              duylase171618@fpt.edu.vn
            </p>
          </div>
        </nav>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Quick Links
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <Link className="link link-hover hover:text-amber-500">Home</Link>
            <Link className="link link-hover hover:text-amber-500">
              About Us
            </Link>
            <Link className="link link-hover hover:text-amber-500">
              Programmes
            </Link>
            <Link className="link link-hover hover:text-amber-500">
              Instructors
            </Link>
          </div>
        </nav>
        <form>
          <header className="font-bold text-xl mb-3 text-white">
            Newsletter
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="text-base text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full bg-white"
              />
              <button className="btn bg-amber-500 hover:bg-amber-600 text-white absolute top-0 right-0 rounded-l-none border-2 border-amber-500 hover:border-amber-600 ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="footer-center p-6 bg-gray-800 dark:bg-gray-900 text-slate-300 border-t border-slate-500 text-sm">
        <p>Copyright © {year} - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
