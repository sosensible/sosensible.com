import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'

export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema })
}

export type User = typeof schema.users.$inferSelect
export type Users = typeof schema.users.$inferSelect[]
export type UserInsert = typeof schema.users.$inferInsert

export type Message = typeof schema.messages.$inferSelect
export type Messages = typeof schema.messages.$inferSelect[]
export type MessageInsert = typeof schema.messages.$inferInsert
