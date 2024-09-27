import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import Lottie from "lottie-react";
import mail from "../../../assets/mail.json";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";

const ContactUs = () => {
  return (
    <div
      className="dark:bg-gray-700 bg-amber-200 pb-10 lg:pb-20"
      id="contactus"
    >
      <SectionHeader heading={"Contact Us"}></SectionHeader>
      <Container>
        <FadeInAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 shadow p-8 border-2 border-white gap-4">
            <div className="flex justify-center items-center">
              <Lottie className="max-w-sm" animationData={mail} loop={true} />
            </div>
            <form className="contact-form pt-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-base font-semibold dark:text-white mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white dark:bg-slate-500"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-base font-semibold dark:text-white mb-1"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white dark:bg-slate-500"
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-base font-semibold dark:text-white mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white dark:bg-slate-500"
                  rows="3"
                  id="message"
                  placeholder="Write your message"
                  style={{ boxSizing: "border-box" }}
                ></textarea>
              </div>
              <button className=" bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform duration-300 hover:scale-95">
                Submit
              </button>
            </form>
          </div>
        </FadeInAnimation>
      </Container>
    </div>
  );
};

export default ContactUs;
