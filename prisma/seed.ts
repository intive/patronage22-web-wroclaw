import { PrismaClient, Prisma } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

export const userData: Prisma.PresentationCreateInput[] = [
  {
    uuid: uuid(),
    createdAt: new Date(),
    description: "mollit magna aute consectetur eiusmod id cillum consequat",
    link: "patronage-web/external/presentation/6231096efc7c67523ece119d",
    questions: {
      create: [
        {
          answers: {
            create: [
              {
                uuid: uuid(),
                counter: 23,
                title: "consectetur velit"
              },
              {
                uuid: uuid(),
                counter: 4,
                title: "aliquip ut"
              }
            ]
          },
          currentTime: new Date(),
          maxAnswerTime: 200,
          startTime: null,
          title: "voluptate labore irure",
          type: "OPEN",
          uuid: uuid()
        },
        {
          answers: {
            create: [
              {
                uuid: uuid(),
                counter: 19,
                title: "cupidatat ex"
              },
              {
                uuid: uuid(),
                counter: 21,
                title: "minim mollit"
              }
            ]
          },
          currentTime: new Date(),
          maxAnswerTime: 186,
          startTime: null,
          title: "ex veniam deserunt",
          type: "CLOSED",
          uuid: uuid()
        }
      ]
    },
    timer: 180,
    title: "eiusmod ut",
    type: "PUBLIC",
    updatedAt: new Date()
  },
  {
    createdAt: new Date(),
    description: "nostrud sit veniam fugiat dolore sunt id ex",
    link: "patronage-web/external/presentation/6231096e9943aa384dd165d0",
    uuid: uuid(),
    questions: {
      create: [
        {
          answers: {
            create: [
              {
                uuid: uuid(),
                counter: 26,
                title: "exercitation fugiat"
              },
              {
                uuid: uuid(),
                counter: 1,
                title: "ex minim"
              }
            ]
          },
          uuid: uuid(),
          currentTime: new Date(),
          maxAnswerTime: 44,
          startTime: null,
          title: "ut aute elit",
          type: "CLOSED"
        },
        {
          answers: {
            create: [
              {
                uuid: uuid(),
                counter: 18,
                title: "do deserunt"
              },
              {
                uuid: uuid(),
                counter: 9,
                title: "et excepteur"
              }
            ]
          },
          currentTime: new Date(),
          maxAnswerTime: 124,
          startTime: new Date(),
          title: "ullamco ea ex",
          type: "CLOSED",
          uuid: uuid()
        }
      ]
    },
    timer: 95,
    title: "ex occaecat",
    type: "PUBLIC",
    updatedAt: new Date()
  }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of userData) {
    const pres = await prisma.presentation.create({
      data
    });
    console.log(`Created presentation with id: ${pres.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
