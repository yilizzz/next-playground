import { createDirectus, rest } from "@directus/sdk";
export const directusClient = createDirectus(
  `${process.env.NEXT_PUBLIC_BACKEND_URL}`
).with(rest());
