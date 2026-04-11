import { defineConfig } from "drizzle-kit";

// Database config - optional for this project since we're using in-memory storage
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://127.0.0.1:5432/portfolio";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
