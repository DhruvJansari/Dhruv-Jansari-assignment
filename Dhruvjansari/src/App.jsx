import { useState } from "react";
import "./App.css";
import Caraousel from "./Caraousel";

function App() {
  const [count, setCount] = useState(0);
  const images = { img1: "reactLogo", img2: "vitelogo", img3: "heroImg" };
  return (
    <>
      <Caraousel />
      {/* <section id="center">
        <div className="flex items-center justify-center h-[80vh] w-full bg-gray-300 ">
          <img
            src={heroImg}
            className="object-cover"
            width="170"
            height="170"
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Left
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Right
          </button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  );
}
export default App;
