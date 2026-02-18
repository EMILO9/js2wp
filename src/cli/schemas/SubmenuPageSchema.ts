import z from "zod";
import { BaseSchema } from "@cli/schemas/BaseSchema";

export const SubmenuPageSchema = BaseSchema.extend({
  template: z.literal("submenu_page"),
  options: z.object({}),
});
