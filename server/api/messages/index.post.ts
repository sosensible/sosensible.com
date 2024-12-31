import { useDrizzle, tables } from "~~/server/utils/drizzle"

export default eventHandler(async (event) => {
  const { text } = await readBody(event)
  const msessage = await useDrizzle().insert(tables.messages).values({
    text
  }).returning().get()

  return msessage
})
