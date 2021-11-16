import React, { useState } from "react";
import Icons from "./Icons";

export default function Projects() {
  const [loading] = useState(false);
  const projects = [
    {
      image: "/static/images/me.jpg",
      name: "Flynt",
      link: "https://flynt.vercel.app",
      resume: "Flynt is the only app which is made for lazy people...",
      svg: "",
    },
    {
      image: "/static/images/me.jpg",
      name: "Airdown",
      link: "https://airdown.glitch.me",
      resume:
        "The Typing Test",
      svg: "ddtv",
    },
    {
      image: "/static/images/me.jpg",
      name: "Airbuy",
      link: "##",
      resume:
        "Airbuy is still under development so will probably come out in late 2022",
      svg: "ddtv",
    },
  ];
  return (
    <>
      {!loading ? (
        <>
          <div className="grid w-full grid-cols-1 gap-4 my-2 subpixel-antialiased sm:grid-cols-2">
            {projects.map((project) => {
              return (
                <div className="w-full p-4 dark:bg-gray-900 bg-gray-100 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 rounded-2xl max-w-72">
                  {project.image ? (
                    <div className="flex items-center">
                      <img className="rounded-2xl" src={project.image} />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <Icons icon={project.svg} />
                    </div>
                  )}
                  <p className="mt-2 text-xl font-medium text-gray-900 text-normal spacing-sm dark:text-white">
                    {project.name}
                    <a href={project.link} target="_blank">
                      <svg
                        className="inline w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  </p>
                  <span className="text-sm font-light text-gray-800 dark:text-gray-50">
                    {project.resume}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h1>loading..</h1>
      )}
    </>
  );
}
