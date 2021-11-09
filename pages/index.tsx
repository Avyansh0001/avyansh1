import { Meta } from "../components/Meta";
import { Main } from "../layouts/Main";
import { age } from "../data/age";
import { toast } from "react-hot-toast";
import { getCodingTime } from "../data/coding";
import { Activity } from "../components/Activity";
import { Social } from "../components/Social";
import {
  GitHub,
  Headphones,
  Inbox,
  Instagram,
  Linkedin,
  Twitter,
  Key,
} from "react-feather";

const handleClick = async () => {
  const id = toast.loading("Loading...");

  const time = await getCodingTime();

  toast(`I have spent ${time} coding this month!`, {
    icon: "🕗",
    id,
  });
};

export default function Home() {
  return (
    <>
      <Meta
        title="Avyansh Ralph"
        description="13 Year old boi who loves programming"
      />

      <Main>
        <h1 className="dark:text-white text-black text-4xl font-semibold">
          Avyansh Ralph
        </h1>
        <p className="text-lg text-gray-500 max-w-sm mt-2 ">
          {age} year old student &{" "}
          <button
            onClick={handleClick}
            className="hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:ring dark:text-gray-300 text-gray-800"
          >
            web developer
          </button>
          , Graphic designer and .
        </p>
        <div className={"flex flex-wrap space-x-4 mt-3"}>
          <Social href={"/github"} icon={<GitHub></GitHub>} />
          <Social href={"/twitter"} icon={<Twitter></Twitter>} />
          <Social href={"/linkedin"} icon={<Linkedin></Linkedin>} />
          <Social href={"/instagram"} icon={<Instagram></Instagram>} />
          <Social href={"/eth"} icon={<Key></Key>} />
          <Social href={"/lastfm"} icon={<Headphones></Headphones>} />
          <Social href={"mailto:dev@avyanshralph.xyz"} icon={<Inbox></Inbox>} />
        </div>
        <Activity />
      </Main>
    </>
  );
}
