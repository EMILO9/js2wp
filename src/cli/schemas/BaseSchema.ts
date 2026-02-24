import { z } from "zod";
import { HeaderSchema } from "@cli/schemas/HeaderSchema";
import { BuildSchema } from "@cli/schemas/BuildSchema";

export const BaseSchema = z.object({
	headers: HeaderSchema.default(HeaderSchema.parse({})),
	build: BuildSchema.default(BuildSchema.parse({})),
});
