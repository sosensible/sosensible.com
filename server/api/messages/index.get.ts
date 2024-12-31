import { useDrizzle, tables } from "~~/server/utils/drizzle"
import { desc } from 'drizzle-orm'

export default eventHandler(async () => {
  const db = useDrizzle()

  const results = await db.select().from(tables.messages).orderBy(desc(tables.messages.created_at))

  return results
})