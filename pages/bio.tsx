import { Meta } from "../components/Meta";
import { Main } from "../layouts/Main";
import { age } from "../data/age";
import Link from "next/link";

export default function Bio() {
  return (
    <>
      <Meta title="Avyansh Ralph" description="Avyansh Ralph's short bio." />

      <Main>
        <h1 className="text-4xl font-semibold dark:text-white">
          Info
        </h1>
        <p className="text-lg text-gray-500 max-w-4xl mt-4">
          <span>
            Hi! I am Avyansh Ralph, an {age} year old developer and designer. I'm currently a student from the 8th class who loves to make
            projects and Logos for people...{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://freepik.com">Choosing some vectors from Freepik</Link>
            </span>
            , but in my free time I build and contribute to multiple{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="/projects">projects</Link>
            </span>{" "}
            online.
          </span>
          <br />
          <br />
          <span>
            Typescript is my preffered language as a beginner in Programming... Some people do prefer HTMl & CSS as a beginner language which I dont doubt cause I started with that only...
          </span>
          <br />
          <br />
          <span>
            You can check out my {" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://twitter.com/avyanshralph">Twitter</Link>
            </span>{" "}
            - Founder of{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://b1end.gq">Airbus</Link>
            </span>{" "}
            as the backend and frontend developer.
          </span>
          <br />
          <br />
          <span>
            CV can be requested via {" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="mailto:dev@avyanshralph.xyz">email</Link>
            </span>
            .
          </span>
        </p>
      </Main>
    </>
  );
}
