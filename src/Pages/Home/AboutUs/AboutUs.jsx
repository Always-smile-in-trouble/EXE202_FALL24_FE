import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import game from "../../../assets/logo/game.png";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-700 bg-amber-200 pb-10 lg:pb-20" id="aboutus">
      <SectionHeader heading={"About Us"}></SectionHeader>
      <Container>
        <div className="grid grid-cols-1 gap-10">
          <FadeInAnimation>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
              <div className="">
                <img
                  className="md:max-w-md max-w-sm rounded-xl"
                  loading="lazy"
                  src="https://media.babolat.com/image/upload/v1632407627/Website_content/Badminton_News/02092020-Launch/collectif/collectif-centered2-v2.png"
                  alt=""
                />
              </div>
              <div>
                <div className="flex flex-col justify-center items-start mb-5 ml-80">
                  <img className="w-24" src={game} alt="logo" loading="lazy" />
                  <p className="text-green-700 font-second_font">
                    ShuttleSmash
                  </p>
                </div>
                <Reavel>
                  <p className="dark:text-white text-slate-700 ml-44 font-semibold">
                    Welcome to{" "}
                    <span className="font-semibold">
                      The Shuttle Smash Matching Teamates!
                    </span>
                  </p>
                </Reavel>
                <Reavel>
                  <p className="dark:text-white text-slate-700">
                    Are you passionate about badminton and looking to find the
                    perfect partners to enhance your game? Look no further! Our
                    web application is designed specifically to connect
                    badminton enthusiasts like you.
                  </p>
                </Reavel>
                <br />
                <Reavel>
                  <p className="dark:text-white text-slate-700">
                    It’s a platform where badminton players can discover and
                    connect with teammates who match their skill level and
                    playing style. Whether you're a casual player looking for
                    some friendly matches or a competitive athlete seeking
                    serious training partners, we’ve got you covered.
                  </p>
                </Reavel>
              </div>
            </div>
          </FadeInAnimation>
          <FadeInAnimation>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              <div>
                <img
                  className="md:max-w-md max-w-sm rounded-xl mx-auto"
                  loading="lazy"
                  src="https://media.babolat.com/image/upload/v1632407625/Website_content/Badminton_News/02092020-Launch/collectif/collectif-centered1-v2.png"
                  alt=""
                />
              </div>
              <div>
                <div className="dark:text-white text-slate-700">
                  <Reavel>
                    <p className="font-bold text-xl mb-2">What We Offer:</p>
                  </Reavel>
                  <ul className="list-disc ps-6">
                    <Reavel>
                      <li>
                        <span className="font-semibold">
                          Smart Teammate Matching:
                        </span>{" "}
                        Find your ideal badminton partners with ease. Our
                        advanced matching system pairs you with players who
                        share your skill level, play style, and availability.
                      </li>
                    </Reavel>
                    <Reavel>
                      {" "}
                      <li>
                        <span className="font-semibold">
                          Community Engagement:
                        </span>{" "}
                        {""}
                        oin a vibrant community of badminton players. Engage
                        with fellow enthusiasts, share tips, and get inspired by
                        others who share your passion for the game.
                      </li>
                    </Reavel>
                    <Reavel>
                      <li>
                        <span className="font-semibold">
                          Customizable Player Profiles:
                        </span>{" "}
                        Create and personalize your player profile to showcase
                        your skills, playing style, and achievements. Highlight
                        your strengths, share your goals, and let others know
                        what you’re looking for in a teammate.
                      </li>
                    </Reavel>
                    <Reavel>
                      <li>
                        <span className="font-semibold">
                          User-Friendly Interface:
                        </span>{" "}
                        {""}
                        Enjoy a seamless experience with our easy-to-navigate
                        platform. Our user-friendly design ensures that finding
                        and connecting with teammates is simple and enjoyable.
                      </li>
                    </Reavel>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInAnimation>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
