import { z } from "zod";

const configSchema = z.object({
  MODE: z.enum(["dev", "prod"]).default("dev"),
  BASE_URL: z.string(),
  ARENA_UID: z.string(),
  ARENA_USER_SLUG: z.string(),
  ARENA_SECRET: z.string(),
  ARENA_PERSONAL_ACCESS_TOKEN: z.string(),
});

type Config = z.infer<typeof configSchema>;

function getConfig(): Config {
  try {
    return configSchema.parse({
      MODE: import.meta.env.MODE,
      BASE_URL: import.meta.env.BASE_URL,
      ARENA_UID: import.meta.env.ARENA_UID,
      ARENA_USER_SLUG: import.meta.env.ARENA_USER_SLUG,
      ARENA_SECRET: import.meta.env.ARENA_SECRET,
      ARENA_PERSONAL_ACCESS_TOKEN: import.meta.env.ARENA_PERSONAL_ACCESS_TOKEN,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((issue) => issue.path.join(".")).join(", ");
      throw new Error(`Missing or invalid environment variables: ${missingVars}. Please check your .env file.`);
    }
    throw error;
  }
}

export const config = getConfig();
