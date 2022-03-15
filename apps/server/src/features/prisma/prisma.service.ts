// src/prisma/prisma.service.ts
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    // pass PrismaClientOptions e.g. logging levels or error formatting
    super();
  }
}
