import { z } from 'zod'
import dotenv from 'dotenv'
dotenv.config()

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string().default("8080"),
})

export type Env = z.infer<typeof envSchema>

export const env = envSchema.parse(process.env)