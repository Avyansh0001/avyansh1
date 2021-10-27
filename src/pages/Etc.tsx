import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Thanks</h2>
    <p>
       for visiting my small world of creativity... Do check out my github profile{" "}
      <a href={"https://github.com/Avyansh0001"}>Avyansh0001</a>
    </p>
    <h2>Contact</h2>
    <p>
      You can DM me on Twitter if you want{" "}
      <a href={"https://twitter.com/avyanshralph"}>
        click here
      </a>{" "}
      to DM me on Twitter.
    </p>
    <p>
      If it is a formal query regarding any of my services, then do hit me up on my email address{" "}
      <a href="mailto:dev@avyanshralph.xyz">dev@avyanshralph.xyz</a>.
    </p>
    <h2>Other</h2>
    <ul>
      <li>
        <Link to={"/presence"}>/presence</Link>
      </li>
      <li>
        <a href={"https://p.avyanshralph.xyz"}>Polywork</a>
      </li>
      <li>
        PGP Fingerprint:{" "}
        <code>6216 397E 2F44 6650 8158 226C 6490 E715 E328 0C35</code>
      </li>
      <li>
         BTC Address:{" "}
        <code>Bitcoin (0xcdcc9311664b84a7e99ecc0c56d11e3ef04384c8)</code>
      </li>
      <li>
        Inspired by:{" "}
        <ul>
          <li>
            <a
              href={
                "https://github.com/Phineas/Phineas.io"
              }
            >
              Phineas
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;
