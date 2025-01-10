import livepolling from "../assets/portfolio/livepolling.png";
import finshark from "../assets/portfolio/finshark.png";
import retailer from "../assets/portfolio/retailer.png";
import excel from "../assets/portfolio/excel.png";
import canvas from "../assets/portfolio/canvas.png";
import food from "../assets/portfolio/food.png";

const Projects = () => {
  const projectsList = [
    {
      id: 3,
      name: "Live Polling",
      src: livepolling,
      hrefLive: "https://live-polling.netlify.app",
      hrefCode: "https://github.com/Md-Abdul-Hameed/Live-polling",
    },
    {
      id: 4,
      name: "Food Ordering Application",
      src: food,
      hrefLive: "https://food-md.netlify.app",
      hrefCode: "https://github.com/Md-Abdul-Hameed/Food",
    },
    {
      id: 1,
      name: "Finshark",
      src: finshark,

      hrefCode: "https://github.com/Md-Abdul-Hameed/FinShark",
    },
    {
      id: 2,
      name: "Retailer book",
      src: retailer,
      hrefLive: "https://retailer-book.netlify.app",
      hrefCode: "https://github.com/Md-Abdul-Hameed/Retailers-Management",
    },
    {
      id: 5,
      name: "Excel Book",
      src: excel,
      hrefLive: "https://excel-book.netlify.app",
      hrefCode: "https://github.com/Md-Abdul-Hameed/excel",
    },
    {
      id: 6,
      name: "Canvas Rectangles",
      src: canvas,
      hrefLive: "https://canvas-rectangles.netlify.app",
      hrefCode: "https://github.com/Md-Abdul-Hameed/CanvasRectangles",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:pt-6"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full lg:p-20">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 font-semibold">
            Following are my personal projects that I have worked on, showcasing
            my skills and expertise.
          </p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefLive, hrefCode }) => (
            <div
              key={id}
              className="shadow-xl rounded-b-md duration-300 hover:scale-150"
            >
              <div className="">
                <img src={src} alt="" className="rounded-t-md " />
                <p className="bg-gray-900  font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                {hrefLive && (
                  <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                    <a href={hrefLive} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </button>
                )}
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefCode} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
