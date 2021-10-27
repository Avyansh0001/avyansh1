import PageWrapper from "./PageWrapper";

const Home = () => {
  return (
    <PageWrapper forceReadableWidth>
      <h1>Who am I?</h1>
      <p>Avyansh Ralph. 13 year old. Web dev and graphic designer</p>
      <p>
        Persistent designs and neat codes written by me.
        Currently, I'm the founder of{" "}
        <a href="https://flynt.vercel.app" target="norel noopen">
          Flynt
        </a>
        .
      </p>

      <p>
       I love to read books, play soccer and chat with my buddies!!! I love to make press kits for start ups for free!
      </p>

      <h3>About Flynt</h3>
      <p>
        Flynt is basically the future of assignments with its sleak assignmnet type PDF making projects... the best thing is that u dont need to sign up to do ur assignmnets. It is absolutely free!!!
      </p>
    </PageWrapper>
  );
};

export default Home;
