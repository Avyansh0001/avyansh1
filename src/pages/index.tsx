import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Repository from "../components/Repository";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import PageTransition from "../components/PageTransition";

const Index = () => {
  const [Repos, setRepo] = useState({
    repos: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/Avyansh0001/repos`)
      .then((res) => res.json())
      .then((repos) => {
        setRepo({ repos: repos });
      });
  }, [setRepo]);
  const { repos }: any = Repos;
  if (!repos || repos.length === 0)
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
      </div>
    );
  return (
    <Main
      meta={
        <Meta
          title="Avyansh"
          description="My Personal website made with NextJS & Tailwind."
        />
      }
    >
      <div className="flex-col items-center">
        <PageTransition>
          <Profile />
          <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-t dark:from-indigo-200 dark:to-indigo-400">
            Hello, I'm Avyansh Ralph
          </h1>
        </PageTransition>
        <div className="mb-8">
          <PageTransition>
            <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
              Welcome to my world! I am a 13 year old web dev & Graphic designer... I love to work on Database and Clouds...
              Junior developer. <span>&#128522;</span>
            </p>
          </PageTransition>
        </div>
      </div>
      <PageTransition>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
          <h1 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-t dark:from-indigo-200 dark:to-indigo-400">
            Github Repository
          </h1>
          <div className="mb-8">
            <p className="bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
              You can find all my repository from git{" "}
              <a
                className="transition hover:underline"
                href="https://github.com/Avyansh0001"
                target="_blank"
              >
                here
              </a>
              . <span>&#128578;</span>
              &nbsp;
            </p>
          </div>
          <PageTransition>
            <Repository repos={repos} />
          </PageTransition>
        </div>
      </PageTransition>
    </Main>
  );
};

export default Index;
