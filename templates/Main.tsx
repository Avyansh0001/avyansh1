import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { variants } from "../export/animation";
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <Navigation />
      {props.meta}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
        className="flex flex-col justify-center px-8"
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          {props.children}
        </div>
      </motion.div>
    </>
  );
};

export { Main };
