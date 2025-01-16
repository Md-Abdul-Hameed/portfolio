import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');
      </style>
      <section
        name="experience"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-24"
      >
        <section className="design-section">
          <div className="pb-2 lg:pl-52 pl-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Work Experience
            </p>
            <p className="py-6">I have total 2 years of experience</p>
          </div>
          <div className="timeline">
            <div className="timeline-empty"></div>
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>{" "}
            <div className="timeline-component timeline-content">
              {
                <div>
                  <h1>
                    <span className="font-bold text-sky-400 text-lg">
                      Front-End Developer
                    </span>{" "}
                    -{" "}
                    <span className="font-bold text-sky-400">
                      CLICKNFINANCE
                    </span>
                  </h1>
                  <p className="inline border-b-2 border-gray-500 text-sm pb-1">
                    NOV 2022 - NOV 2023 | India
                  </p>
                  <ul className="list-disc mt-2">
                    <li>
                      Developed reusable components and implemented ES6 features
                      in React and React Native, improving code maintainability
                      and reducing development time by 20%.
                    </li>
                    <li>
                      Collaborated with the backend team to integrate APIs,
                      enhancing data synchronization and boosting application
                      performance.
                    </li>
                    <li>
                      Ensured responsiveness across devices and optimized
                      performance for fast transaction processing.
                    </li>

                    <li>
                      Integrated JWT authentication, upload/download files,
                      multiple dashboards, server side data tables and
                      pagination, complex forms, infinite scrolling, background
                      and foreground services, data searching, etc
                    </li>
                  </ul>
                </div>
              }
            </div>
            <div className="timeline-component timeline-content">
              <h1>
                <span className="font-bold text-sky-400 text-lg">
                  Front-End Developer
                </span>{" "}
                - <span className="font-bold text-sky-400">PARALLELDOTS</span>
              </h1>
              <p className="inline border-b-2 border-gray-500 text-sm pb-1">
                SEPT 2021 - NOV 2022 | Delhi, India
              </p>
              <ul className="list-disc mt-2">
                <li>
                  Optimized images for faster load times, resulting in a 25%
                  reduction in initial page load and enhanced overall app
                  performance.
                </li>
                <li>
                  Collaborated with cross-functional teams, including project
                  managers and designers, while following Agile/Scrum
                  methodologies, enhancing user experience and functionality.
                </li>
                <li>
                  Integrated camera functionality and utilized Konva to enable
                  users to capture images and draw interactive rectangles,
                  enhancing user interaction and visual data representation.
                  Additionally, implemented OneSignal notifications for
                  real-time updates, resulting in a 15% increase in user
                  retention.
                </li>
                <li>
                  Debugged and resolved front-end issues, improving app
                  stability and reducing error rates by 15%, led the
                  implementation of internationalization (i18n) for multiple
                  languages, expanding app accessibility and increasing
                  international user engagement by 20%.
                </li>
              </ul>
            </div>
            
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            
            <div className="timeline-empty"></div>
            <div className="timeline-empty"></div>
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content">
              <h1>
                <span className="font-bold text-sky-400 text-lg">
                  Teaching Assistant
                </span>{" "}
                -{" "}
                <span className="font-bold text-sky-400">
                  PEPCODING EDUCATION PVT. LTD.
                </span>
              </h1>
              <p className="inline border-b-2 border-gray-500 text-sm pb-1">
                OCT 2020 - JAN 2021 | Delhi, India
              </p>
              <ul className="list-disc mt-2">
                <li>
                  Assisted 100+ students in learning coding concepts, providing
                  support with problem-solving, front-end development, and
                  JavaScript logic building.
                </li>
                <li>
                  Conducted doubt-solving sessions, clarifying concepts and
                  ensuring students’ successful progress through the course
                  material.
                </li>
              </ul>
              
            </div>
            
            <div className="timeline-empty"></div>
            
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            {/* <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div> */}
            
            
            {/* <div class="timeline-middle">
              <div class="timeline-circle"></div>
            </div>
            <div class=" timeline-component timeline-content">
              <h3>Javascript</h3>
              <p>Some Text.</p>
            </div> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Experience;
