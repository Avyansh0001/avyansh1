import React from "react";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { GithubUser } from "../types/Github";
const Index = () => {
  const { data } = useSWR<GithubUser>(`/api/gituser`, fetcher);
  return (
    <>
      {data ? (
        <div>
          <div className="relative h-64	flex justify-center align-center md:mb-16 mb-0">
            <img
              src={`/static/images/banner.gif`}
              className="bg-center rounded-2xl absolute"
              alt=""
            />
            <img
              src={data?.avatar_url}
              className="bg-center mt-20 md:mt-36 md:w-40 w-28 md:h-40 h-28 mb-1 mr-0 md:mr-2 rounded-full absolute"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="relative h-64	flex justify-center align-center md:mb-16 mb-0 dark:bg-warmGray-400 bg-gray-900 animate-pulse rounded-2xl">
            <div className="bg-center rounded-2xl absolute bg-gray-900 animate-pulse" />
            <div className="mt-20 md:mt-36 md:w-40 w-28 md:h-40 h-28 mb-1 mr-0 md:mr-2 rounded-full absolute dark:bg-warmGray-300 bg-gray-700 animate-wiggle" />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
