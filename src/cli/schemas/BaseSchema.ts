import { z } from "zod";

export const BaseSchema = z.object({
  headers: z.object({
    pluginName: z.string().trim().nonempty().default("My Plugin!"),
  }),
  build: z
    .object({
      entry: z.string().trim().nonempty().optional(),
    })
    .default({}),
});

