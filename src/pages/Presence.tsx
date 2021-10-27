import { Helmet } from "react-helmet";
import PageWrapper from "./PageWrapper";

const Presence = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Presence</title>
    </Helmet>
    <h1>👀 Presence</h1>
    <p>
      Can you see that this website shows what I am doing rn on Discord... Thanks to the Phineas to make an open source project called {" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://github.com/phineas/lanyard"}
      >
        Lanyard
      </a>{" "}
      which pulls live presences from Discord and updates an API and WebSocket
      service. It takes {"<"}10 seconds to set up, you just have to join a
      Discord server!
    </p>
  </PageWrapper>
);

export default Presence;
