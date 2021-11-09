module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Avyansh0001",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/avyanshralph",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/Avyansh.pvttt",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/Avyansh Ralph",
        permanent: true,
      },
      {
        source: "/lastfm",
        destination: "https://last.fm/user/",
        permanent: true,
      },
      {
        source: "/eth",
        destination: "https://keybase.io/avyansh",
        permanent: true,
      },
    ];
  },
};
