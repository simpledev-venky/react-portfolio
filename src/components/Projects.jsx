import React from "react";
import { projects } from "../data";

// import image1 from "../assets/1.png";
// import image2 from "../assets/2.png";
// import image3 from "../assets/3.png";
// import image4 from "../assets/4.png";

export default function Projects() {

  // const images = [
  //   { id: 1, src: image1 },
  //   { id: 2, src: image2 },
  //   { id: 3, src: image3 },
  //   { id: 4, src: image4 },
  //   // Add more images here as needed
  // ];

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In the journey of Fronted developer made so many useful applications
            using the technologies html,css,javascript,reactjs
          </p>
        </div>
        <div className="flex flex-wrap -m-4">

          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex"></div>
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-90% object-cover object-center"
                  src={project.image}
                />
              
              <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 ">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
