import z from "zod";
import { BaseSchema } from "@cli/schemas/BaseSchema";

export const MenuPageSchema = BaseSchema.extend({
  template: z.literal("menu_page"),
  options: z.object({}),
});
