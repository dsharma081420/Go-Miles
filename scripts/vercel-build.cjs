#!/usr/bin/env node
/**
 * Vercel production build: prisma generate → migrate (if DATABASE_URL is valid) → next build.
 * Skips migrate when DATABASE_URL is unset (deploy succeeds; add env + redeploy for DB).
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
    "\n[build] DATABASE_URL is not set — skipping prisma migrate deploy. Add a Postgres URL in Vercel → Environment Variables, then redeploy.\n",
  );
} else if (!/^postgres(ql)?:\/\//i.test(url)) {
  console.error(
    "\n[build] DATABASE_URL must start with postgresql:// or postgres:// (got invalid value).\n",
  );
  process.exit(1);
} else {
  run("npx prisma migrate deploy");
}

run("npx next build");
