import { z } from "zod";

const configSchema = z.object({
  MODE: z.enum(["dev", "prod"]).default("dev"),
  BASE_URL: z.string().url(),
});

type Config = z.infer<typeof configSchema>;

function getConfig(): Config {
  try {
    return configSchema.parse({
      MODE: import.meta.env.MODE,
      BASE_URL: import.meta.env.BASE_URL,
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
