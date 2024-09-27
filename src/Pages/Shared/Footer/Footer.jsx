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
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-14 px-10 bg-gray-600 dark:bg-gray-700 text-base-content">
        <aside className="space-y-4">
          <div className="flex flex-col justify-center items-center">
            <img
              loading="lazy"
              className="w-20 md:w-28"
              src={game}
              alt="ShuttleSmash Logo"
            />
            <p className="text-green-600 font-second_font">ShuttleSmash</p>
            <p className="text-sm font-semibold text-slate-300 dark:text-white">
              Let's Connect Together
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="#">
              <img className="w-8" src={facebook} alt="Facebook" />
            </Link>
            <Link to="#">
              <img className="w-8" src={instagram} alt="Instagram" />
            </Link>
            <Link to="#">
              <img className="w-8" src={whatsapp} alt="WhatsApp" />
            </Link>
            <Link to="#">
              <img className="w-8" src={linkedin} alt="LinkedIn" />
            </Link>
            <Link to="#">
              <img className="w-8" src={youtube} alt="YouTube" />
            </Link>
          </div>
        </aside>

        <nav className="space-y-3">
          <header className="font-bold text-xl text-white">Contact Us</header>
          <div className="flex flex-col space-y-2 text-base text-white">
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt /> Thu Duc City, Ho Chi Minh City
            </p>
            <p className="flex items-center gap-1">
              <FaPhoneAlt /> +84 01711-22334455
            </p>
            <p className="flex items-center gap-1">
              <FaHeadset /> +84 09811-222333
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope /> duylase171618@fpt.edu.vn
            </p>
          </div>
        </nav>

        <nav className="space-y-3">
          <header className="font-bold text-xl text-white">Quick Links</header>
          <div className="flex flex-col space-y-2 text-base text-white">
            <Link className="hover:text-amber-500">Home</Link>
            <Link className="hover:text-amber-500">About Us</Link>
            <Link className="hover:text-amber-500">Programmes</Link>
            <Link className="hover:text-amber-500">Instructors</Link>
          </div>
        </nav>

        <form>
          <header className="font-bold text-xl text-white mb-4">
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
              <button className="btn bg-amber-500 hover:bg-amber-600 text-white absolute top-0 right-0 rounded-l-none border-2 border-amber-500 hover:border-amber-600">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className="footer-center p-6 bg-gray-800 dark:bg-gray-900 text-slate-300 border-t border-slate-500 text-sm">
        <p>Copyright © {year} - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
