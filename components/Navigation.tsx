import { ThemeSwitcher } from "./ThemeSwitcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import { Router } from "next/router";

import { showMenu } from "../export/animation";

import useSWR from "swr";

import music from "/public/static/sounds/sound.mp3";

import "nprogress/nprogress.css";

import { GithubUser } from "../types/Github";
import fetcher from "../libs/fetcher";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Navigation = () => {
  const { data } = useSWR<GithubUser>(`/api/gituser`, fetcher);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    void new Audio(music).play().catch(() => null);
  }, [router.pathname]);
  return (
    <div
      className={`sticky rounded-2xl top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 ${
        showModal ? `bg-transparent` : "bg-white dark:bg-black"
      } md:my-8 dark:text-gray-100`}
    >
      <ThemeSwitcher />
      <div>
        <a
          onClick={() => router.push("/")}
          className="p-1 font-normal text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-25"
        >
          Home
        </a>
        <a
          onClick={() => router.push("/about")}
          className="p-1 font-normal text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-25"
        >
          About
        </a>
        <a
          onClick={() => router.push("/project")}
          className="p-1 font-normal text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-25"
        >
          Projects
        </a>
        <a
          onClick={() => setShowModal(true)}
          className={`${
            showModal ? "fade-in-image hidden space-y-1" : "fade-in-image"
          } p-1 font-normal text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-25`}
        >
          Open
        </a>
        <a
          onClick={() => setShowModal(false)}
          className={`${
            showModal ? "fade-in-image" : "fade-in-image hidden"
          } p-1 font-normal text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100dark:hover:bg-gray-700 dark:hover:bg-opacity-25`}
        >
          Close
        </a>
        <motion.div
          className="flex justify-between transition duration-300 absolute mx-14 sm:mx-48 md:mx-48 lg:mx-48 w-full"
          animate={showModal ? "enter" : "exit"}
          variants={showMenu}
        >
          {showModal ? (
            <>
              <div className="rounded-2xl pl-5 pr-5 pb-5 pt-5 mt-2 bg-gray-100 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 h-auto max-w-7xl">
                <div className="flex flex-col space-y-2">
                  <div>
                    {data ? (
                      <>
                        <img
                          src={data?.avatar_url}
                          className="w-32 h-32 rounded-2xl"
                          alt=""
                        />
                      </>
                    ) : (
                      <div className="w-32 h-32 rounded-2xl bg-gray-900 dark:bg-gray-400 animate-pulse"></div>
                    )}
                  </div>
                  <a href={data?.html_url}>
                    <p className="text-center font-bold">Avyansh Ralph</p>
                  </a>
                  <div className="flex flex-col space-y-2">
                    <button className="inline-flex items-center justify-center bg-gray-200 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 rounded-2xl p-2 hover:animate-wiggle font-medium">
                      <a href={data?.html_url} target="_blank" rel="noopener">
                        <svg
                          className="inline-block w-5 h-5 fill-current mb-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                        <span className="ml-1">{data?.login}</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;
