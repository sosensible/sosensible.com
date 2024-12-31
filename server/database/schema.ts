import { sql } from 'drizzle-orm'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
  id: text().primaryKey().default(sql`(uuid())`),
  username: text().notNull(),
  email: text().notNull(),
  password: text().notNull(),
  created_at: integer().default(sql`(strftime('%s', 'now'))`),
  updated_at: integer().default(sql`(strftime('%s', 'now'))`),
})