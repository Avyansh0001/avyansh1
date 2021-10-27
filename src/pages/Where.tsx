import PageWrapper from "./PageWrapper";
import Co from "../components/Co";
import styled from "styled-components";
import HivenAppIcon from "../assets/images/hiven-app-icon.png";
import GigglAppIcon from "../assets/images/giggl-app-icon.jpg";
import HonkAppIcon from "../assets/images/honk-app-icon.jpg";
import Repo from "../components/Repo";
import { Helmet } from "react-helmet";

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Ownership hehe</title>
      </Helmet>
      <h1>Companies I own</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="https://flynt.vercel.app"
          name="Flynt"
          iconReference={HivenAppIcon}
          tagline="Developer"
          role={"Founder & Developer"}
          what={
            "I made this project in 2021 to help children save time during there assignments..."
          }
        />
        <Co
          url="https://b1end.gq"
          name="Airbus"
          iconReference={GigglAppIcon}
          tagline="Developer"
          role={"Founder & Developer"}
          what={
            "It is a pretty ded project"
          }
        />
        
      </CoWrapper>

        </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
