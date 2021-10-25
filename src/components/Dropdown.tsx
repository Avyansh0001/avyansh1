import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "./PageTransition";
export const Dropdown = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const toggleActive = () => setActive((active) => !active);
  useClickAway(ref, () => setActive(false));

  return (
    <>
      <button
        onClick={() => toggleActive()}
        aria-label="Dropdown"
        className="p-1 font-medium transition duration-300 ease-in-out cursor-pointer focus:outline-none text-gray-400 text-opacity-50 dark:text-gray-600 dark:text-opacity-50"
      >
        {active ? (
          <svg
            className="inline w-10 h-10 m-0 mt-2 fill-current"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.1343 35.9999H30.7911C29.0093 35.9999 28.117 33.8457 29.3769 32.5857L38.5485 23.4142C39.3295 22.6331 40.5959 22.6331 41.3769 23.4142L50.5485 32.5857C51.8084 33.8457 50.9161 35.9999 49.1343 35.9999Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="inline w-10 h-10 m-0 mt-2 stroke-current"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.1343 35.9999H30.7911C29.0093 35.9999 28.117 33.8457 29.3769 32.5857L38.5485 23.4142C39.3295 22.6331 40.5959 22.6331 41.3769 23.4142L50.5485 32.5857C51.8084 33.8457 50.9161 35.9999 49.1343 35.9999Z"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {active && (
          <>
            <div className="flex justify-end mr-28">
              <PageTransition>
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setActive(false)}
                  className="absolute grid flex-col items-end gap-3 py-3 pl-4 pr-12 ml-5 text-xs font-normal bg-gray-100 bg-opacity-50 rounded-2xl dark:bg-gray-700 dark:bg-opacity-50"
                >
                  <div>
                    <a
                      onClick={() => router.push("/setup")}
                      className="flex flex-row p-2 rounded-2xl items-center transition duration-300 ease-in-out focus:outline-none hover:bg-gray-100 hover:bg-opacity-50 dark:hover:bg-gray-700 dark:hover:bg-opacity-50"
                    >
                      Setup
                    </a>
                  </div>
                </motion.div>
              </PageTransition>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
