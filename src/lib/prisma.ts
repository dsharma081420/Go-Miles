import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/** True when DATABASE_URL is set to a Postgres connection string (used to decide if we attempt Prisma writes). */
export function isDatabaseConfigured(): boolean {
  const u = process.env.DATABASE_URL?.trim();
  return !!u && /^postgres(ql)?:\/\//i.test(u);
}
