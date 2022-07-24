import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    todos: {
      create: [
        {
          content: "https://slack.prisma.io",
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    todos: {
      create: [
        {
          content: "https://www.twitter.com/prisma",
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
    todos: {
      create: [
        {
          content: "https://www.github.com/prisma/prisma/discussions",
        },
        {
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
