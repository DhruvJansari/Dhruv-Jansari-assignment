import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Caraousel() {
  const [index, setIndex] = useState(0);
  const images = [
    "/favicon.svg",
    "/hero.png",
    "/react.svg",
    "/favicon.svg",
    "/hero.png",
    "/react.svg",
    "/favicon.svg",
    "/hero.png",
    "/react.svg",
  ];

  useEffect(() => {
    setTimeout(() => {
      index = index + 1;
    }, 3000);
  }, [index]);

  return (
    <>
      <section id="center">
        <div className="flex items-center justify-center h-[80vh] w-full bg-gray-300 ">
          <img
            src={images[index]}
            className="object-cover"
            width="170"
            height="170"
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            className="counter"
            onClick={() => setIndex((index) => index - 1)}
          >
            Left
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setIndex((index) => index + 1)}
          >
            Right
          </button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default Caraousel;
