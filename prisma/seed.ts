// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const userOne = await prisma.user.upsert({
    where: { email: 'ragibibnehossain@gmail.com' },
    update: {},
    create: {
      firstName: 'Ragib',
      lastName: 'Ibne Hossain',
      email:
        "ragibibnehossain@gmail.com",
      password: 'pAssw0rd!',
    },
  });

  const userTwo = await prisma.user.upsert({
    where: { email: 'ragib.hossain@sazim.io' },
    update: {},
    create: {
      firstName: 'Ragib',
      lastName: 'Hossain',
      email:
        "ragib.hossain@sazim.io",
      password: 'pAssw0rd',
    },
  });

  console.log({ userOne, userTwo });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });