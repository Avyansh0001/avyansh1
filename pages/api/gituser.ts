import { NextApiResponse } from "next";
import { fetchUser } from "../../libs/github";
export default async (_, res: NextApiResponse) => {
  const response = await fetchUser();
  const users = response.data;
  return res.status(200).json(users);
};
