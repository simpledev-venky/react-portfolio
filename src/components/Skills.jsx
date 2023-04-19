import React from "react";
import tick from "../assets/tick.png"
import { skills } from "../data";
export default function Skills() {

   

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Hello and welcome to my portfolio! 🌟 As a frontend developer, I have extensive experience with HTML, CSS, JavaScript, and React. 🚀 I'm skilled in creating responsive and visually appealing user interfaces with HTML and CSS, as well as building interactive and dynamic web applications using JavaScript and React. 💻 If you're interested in working with me, please don't hesitate to reach out! 📧 Let's collaborate to bring your project to life!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src= {tick} alt="tick" className="w-7 rounded-2xl mx-2 cursor-pointer " />
                <span className="title-font font-medium text-white">
                  {skill}
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}