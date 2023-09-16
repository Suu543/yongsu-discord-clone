import { PrismaClient } from "@prisma/client";

// Hot Reload 마다 PrismaClient Instance 생성을 방지하기 위해서 사용함

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
