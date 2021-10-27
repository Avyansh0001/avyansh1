import { Helmet } from "react-helmet";
import PageWrapper from "./PageWrapper";

import Mai from "../assets/images/mai.gif";
import styled from "styled-components";

const Sakurajima = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Rickrolled</title>
    </Helmet>
    <h1>You just got Rickrolled!!!</h1>
    <MaiGifImg draggable={false} src={Mai} />
    <p>
      Looks like someone got Rickrolled!!! Rickrolls can be funny but sometimes not! Here is a quiz of the song <b>Never Gonna Give You Up</b>.
    </p>
    <h2>Which lyrics came first</h2>
    <p>
      Choose from the <b>2</b> options given below and mail me to get 1 VIP coupon for Polywork
      <ul>
        <li>Never Gonna Let You Down</li>
        <li>Never Gonna Give You Up</li>
      </ul>
    </p>
  </PageWrapper>
);

const MaiGifImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
`;

export default Sakurajima;
