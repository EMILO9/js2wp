import type { ConfigSchemaOutput } from "@cli/schemas/ConfigSchema";

const templates = {
  menu_page: import("@cli/templates/MenuPage.hbs"),
  submenu_page: import("@cli/templates/SubmenuPage.hbs"),
};

export async function GetTemplate(template: ConfigSchemaOutput["template"]) {
  const selectedTemplate = (await templates[template]).default;
  return selectedTemplate;
}
