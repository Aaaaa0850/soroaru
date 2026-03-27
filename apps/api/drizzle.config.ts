import { defineConfig } from "drizzle-kit";

const isDevelopment = process.env.NODE_ENV === "development";

if (!isDevelopment && !process.env.DATABASE_URL) {
	throw new Error(
		"DATABASE_URL is not defined in non-development environment",
	);
} else {
	console.log("Using DATABASE_URL:", isDevelopment ? "development database" : process.env.DATABASE_URL);
}

export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	dialect: "mysql",
	dbCredentials: isDevelopment
		? {
			url: "mysql://root:@localhost:4000/test",
		}
		: {
			url: `${process.env.DATABASE_URL}?ssl={"rejectUnauthorized":true}`,
		},
	verbose: true,
	strict: true,
});