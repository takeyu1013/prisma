// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  (async () => {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
  })()
    .catch((error) => {
      throw error;
    })
    .finally(async () => {
      prisma.$disconnect;
    });
  res.status(200).json({ name: "John Doe" });
}
