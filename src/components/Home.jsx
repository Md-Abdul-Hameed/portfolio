import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocMediaLinks2 from "./SocMediaLinks2";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [achievements] = useState([
    "2 years of industry experience 💼",
    "Solved 300+ problems on Leetcode 🚀",
    "Rated 3 star on codechef 🌟",
    // "2 years of industry experience"
  ]);
  const [positions, setPositions] = useState([0, 1, 2]); // Tracks visual positions

  useEffect(() => {
    const timerId = setInterval(() => {
      setPositions((prev) => {
        // Rotate positions: [0, 1, 2] -> [1, 2, 0]
        return [prev[1], prev[2], prev[0]];
      });
    }, 3000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-400 text-2xl py-4 max-w-md">Hi, I'm</p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">ABDUL</h2>
          <h2 className="text-4xl sm:text-7xl font-bold  text-white">HAMEED</h2>
          <p
            className="text-gray-400 font-semibold text-lg py-4 max-w-md md:text-2xl text-white relative w-[max-content] font-mono
before:absolute before:inset-0 before:bg-black
before:animate-typewriter"
          >
            FRONT-END DEVELOPER 👨‍💻
          </p>
          <p className="text-gray-400 text-sm max-w-md md:text-2xl">
            I build complex Web & Hybrid Mobile Apps leveraging{" "}
            <span className="font-semibold">React.js & React Native</span>
          </p>
          <div className="flex lg:py-4">
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit font-bold px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="py-4 px-8">
              <SocMediaLinks2 />
            </div>
          </div>
        </div>

        {/* <div>
          <p className="text-white p-5">Rated 3 start on Leetcode</p>
          <p className="text-white p-5">Solved 300+ Leetcode problems</p>
          <p className="text-white p-5">Rated 3 star on Codechef</p>
        </div> */}
        <div
          className="relative h-full w-6/12 overflow-hidden"
          style={{ perspective: "500px",alignContent:'center' }}
        >
          {achievements.map((item, index) => {
            const position = positions[index];
            const isMiddle = position === 1; // Middle element
            const scale = isMiddle ? 1 : 0.5; // Smaller for distant items
            const zIndex = isMiddle ? 10 : 5; // Middle item appears above others
            const translateY = `${(position - 1) * 100}%`; // Middle at 0%, top at -100%, bottom at 100%
            const rotateX = isMiddle
              ? "0deg"
              : position === 0
              ? "-25deg"
              : "25deg"; // Rotate top and bottom items
            const opacity = isMiddle ? 1 : 0.6; // Fainter for top and bottom items

            return (
              <p
                key={item}
                className="absolute w-full h-24 flex items-center justify-center text-2xl font-bold text-white transition-transform duration-1000"
                style={{
                  transform: `translateY(${translateY}) scale(${scale}) rotateX(${rotateX})`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
