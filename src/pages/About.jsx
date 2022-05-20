import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center p-2 md:p-12 min-h-screen">
      <h1 className="text-4xl md:text-6xl text-center font-semibold mt-6">
        About ME !!
      </h1>
      <div className="flex justify-center">
        <div className="divider w-[80vw]"></div>
      </div>
      <div className="flex-1 md:flex md:justify-center md:items-center p-2">
        <div className="flex flex-col md:flex-row border bg-base-100 shadow-xl max-w-7xl md:h-[70vh] rounded-xl">
          <img src="/img/dp.jpg" alt="profile pic" className="rounded-xl"/>

          <div className="flex justify-center items-center flex-1">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-medium mb-3 text-center p-4 pb-0">
                Hi! <br /> I am Pranjal Vaishnav
              </h2>
              <div className="divider"></div>
              <p className="text-lg md:text-2xl p-4">
                I am a passionate Web Developer from India. Currently I'm Under
                Graduating in Computer Science Field. <br /> I Mostly like to
                work at frontend stuffs in React.js and using various libraries
                including Tailwindcss, MaterialUI, React-Router, Vite, Framer
                Motion etc. And REST api's to fetch data like Axios. <br /> I
                also have some knowledge of backend which involve Node.js /
                Express.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
