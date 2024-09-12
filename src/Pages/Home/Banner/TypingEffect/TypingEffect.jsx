import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const [texts] = useTypewriter({
    words: [
      "Find Teammates Easily.",
      "Connect with Players.",
      "Boost Your Badminton Skills.",
      "Challenge New Players.",
      "Smash Your Limits.",
      "Grow Your Badminton Network.",
    ],
    loop: {},
    typeSpeed: 300,
    delaySpeed: 80,
  });
  return (
    <div className="text-white">
      <h2 className="md:text-6xl text-4xl font-bold">
        ShuttleSmash Match Teamates
      </h2>
      <h4 className="md:text-4xl text-3xl my-5 font-semibold bg-red-500 md:w-4/6 w-11/12 rounded mx-auto py-2.5 px-1">
        Admission Going On
      </h4>
      <div className="md:text-3xl text-2xl font-semibold">
        <span>{texts}</span>
        <Cursor cursorStyle="." cursorColor="white" />
      </div>
      <p className="my-3">
        Tired of searching for the perfect badminton partner? Now, finding a
        teammate that matches your skill and playstyle is just a click away!
      </p>
      <button className="btn bg-transparent border-2 border-amber-500 text-white px-5 transition-all hover:scale-95 hover:bg-amber-500 hover:border-amber-500">
        Create account!
      </button>
    </div>
  );
};

export default TypingEffect;
