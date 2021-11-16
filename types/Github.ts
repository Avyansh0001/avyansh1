export type Github = {
  list: number;
  id: number;
  name: string;
  description: string;
  svn_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
};

export type Items = {
  items: Github[];
};

export type GithubUser = {
  avatar_url: string;
  url: string;
  html_url: string;
  login: string;
  location: string;
};
