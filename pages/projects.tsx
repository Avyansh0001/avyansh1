import { Meta } from "../components/Meta";
import { Main } from "../layouts/Main";
import { age } from "../data/age";
import Link from "next/link";
import { ProjectCard } from "../components/Project";
import { Headphones, Music } from "react-feather";

export default function Projects() {
  return (
    <>
      <Meta
        title="Avyansh Ralph"
        description="My running list of ongoing projects."
      />

      <Main>
        <h1 className="text-4xl font-semibold dark:text-white">Projects</h1>
        <br />
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:text-left gap-6">
          <ProjectCard
            title={"airbuy"}
            description={
              "The only place where Blogs are safe!"
            }
            href={"https://b1end.gq"}
          />
          <ProjectCard
            title={"This website"}
            description={
              "This website, seriously"
            }
            href={"https://avyanshralph.xyz"}
          />
          <ProjectCard
            title={"Flynt"}
            description={
              "Sign messages on the Ethereum blockchain"
            }
            href={"flynt.vercel.app"}
          />
          <ProjectCard
            title={"Rickroll"}
            description={
              "I do love to rickroll people HAHA"
            }
            href={"https://youtube.com"}
          />
          
        </div>
      </Main>
    </>
  );
}
