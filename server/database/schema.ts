import { sql } from 'drizzle-orm'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer().primaryKey(),
  username: text().notNull(),
  email: text().notNull(),
  password: text().notNull(),
  avatar: text().default(sql`('')`),
  created_at: integer().default(sql`(strftime('%s', 'now'))`),
  updated_at: integer().default(sql`(strftime('%s', 'now'))`),
})

export const messages = sqliteTable('messages', {
  id: integer('id').primaryKey(),
  text: text('text').notNull(),
  created_at: integer('created_at').default(sql`(strftime('%s', 'now'))`)
})