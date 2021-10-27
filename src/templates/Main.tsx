import React, { ReactNode, useState } from "react";
import Spotify from "../components/Spotify";
import Activity from "../components/Activity";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [presenceActive, setPresenceActive] = useState(false);
  return (
    <>
      <Navigation />
      {props.meta}
      <PageTransition>
        <div className="flex flex-col justify-center px-8">
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
            {props.children}
            <br />
            <div className="flex items-center sticky bottom-0 bg-gray-200 dark:bg-gray-900 bg-opacity-20 dark:bg-opacity-20 md:bg-transparent rounded-2xl p-4 md:w-2/4 w-full">
              <div className="grid items-center justify-center">
                <Activity
                  setActive={setPresenceActive}
                  style={{ display: presenceActive ? "block" : "none" }}
                />
                <Spotify />
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export { Main };
