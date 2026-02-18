import type { Config } from "@cli/core/GetConfig";

const templates = {
  menu_page: import("@cli/templates/MenuPage.hbs"),
  submenu_page: import("@cli/templates/SubmenuPage.hbs"),
};

export async function GetTemplate(template: Config["template"]) {
  const selectedTemplate = (await templates[template]).default;
  return selectedTemplate;
}
