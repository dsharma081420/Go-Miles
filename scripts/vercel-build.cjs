#!/usr/bin/env node
/**
 * Vercel production build: prisma generate → sync schema (MongoDB: db push, Postgres: migrate deploy) → next build.
 */
const { execSync } = require("child_process");

function run(cmd) {
  execSync(cmd, {
    stdio: "inherit",
    env: { ...process.env, CI: "true" },
  });
}

run("npx prisma generate");

const raw = process.env.DATABASE_URL;
const url = typeof raw === "string" ? raw.trim() : "";

if (!url) {
  console.warn(
    "\n[build] DATABASE_URL is not set — skipping Prisma schema sync. Add DATABASE_URL in Vercel → Environment Variables, then redeploy.\n",
  );
} else if (/^mongodb(\+srv)?:\/\//i.test(url)) {
  // Prisma requires the database name to be present in the path portion of the URL.
  // Example: mongodb+srv://user:pass@cluster.mongodb.net/gomiles?retryWrites=true&w=majority
  try {
    const parsed = new URL(url);
    const dbName = (parsed.pathname || "").replace(/^\//, "");
    if (!dbName) {
      console.error(
        "\n[build] Invalid MongoDB DATABASE_URL: missing database name in the URL path.\n" +
          "Fix it in Vercel by adding a database name after the host, e.g.\n" +
          "  mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/gomiles?retryWrites=true&w=majority\n",
      );
      process.exit(1);
    }
  } catch {
    console.error(
      "\n[build] Invalid MongoDB DATABASE_URL. Ensure it starts with mongodb:// or mongodb+srv:// and contains a database name.\n",
    );
    process.exit(1);
  }

  console.log("\n[build] MongoDB detected — running prisma db push (non-interactive)\n");
  // --skip-generate: already ran generate above
  // --accept-data-loss: required on Vercel (no TTY); avoids hanging on Prisma prompts
  run("npx prisma db push --skip-generate --accept-data-loss");
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
