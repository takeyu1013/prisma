// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "@prisma/client";

import { PrismaClient } from "@prisma/client";

const handler = async (_req: NextApiRequest, res: NextApiResponse<User[]>) => {
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  res.status(200).json(allUsers);
};

export default handler;
