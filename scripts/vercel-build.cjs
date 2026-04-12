#!/usr/bin/env node
/**
 * Vercel production build: prisma generate → sync schema (MongoDB: db push, Postgres: migrate deploy) → next build.
 */
const { execSync } = require("child_process");

function run(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

run("npx prisma generate");

const raw = process.env.DATABASE_URL;
const url = typeof raw === "string" ? raw.trim() : "";

if (!url) {
  console.warn(
    "\n[build] DATABASE_URL is not set — skipping Prisma schema sync. Add DATABASE_URL in Vercel → Environment Variables, then redeploy.\n",
  );
} else if (/^mongodb(\+srv)?:\/\//i.test(url)) {
  console.log("\n[build] MongoDB detected — running prisma db push\n");
  run("npx prisma db push");
} else if (/^postgres(ql)?:\/\//i.test(url)) {
  console.log("\n[build] PostgreSQL detected — running prisma migrate deploy\n");
  run("npx prisma migrate deploy");
} else {
  console.error(
    "\n[build] DATABASE_URL must start with mongodb://, mongodb+srv://, postgresql://, or postgres://\n",
  );
  process.exit(1);
}

run("npx next build");
