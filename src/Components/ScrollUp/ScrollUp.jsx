import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /* scroll to top of the page */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8  text-white px-3 py-3 text-xl  rounded bg-gradient-to-r from-black/70 to-green-500"
          onClick={scrollToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollUp;
