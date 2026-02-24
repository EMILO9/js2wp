import { z } from "zod";

export const HeaderSchema = z.object({
	/**
	 * Plugin Name (required)
	 * The name of your plugin, which will be displayed in the Plugins list
	 * in the WordPress Admin.
	 * @default "My Plugin!"
	 * @example "SEO Booster"
	 */
	pluginName: z.string().trim().nonempty().default("My Plugin!"),
	/**
	 * Plugin URI
	 * The home page of the plugin, which should be a unique URL,
	 * preferably on your own website. This must be unique to your plugin.
	 * You cannot use a WordPress.org URL here.
	 * @default null
	 * @example "https://example.com/my-plugin"
	 */
	pluginURI: z.url().nullable().default(null),
	/**
	 * Description
	 * A short description of the plugin, as displayed in the Plugins
	 * section in the WordPress Admin. Keep this description to fewer
	 * than 140 characters.
	 * @default null
	 * @example "Adds advanced SEO tools to your WordPress site."
	 */
	description: z.string().trim().nonempty().max(140).nullable().default(null),
	/**
	 * Version
	 * The current version number of the plugin, such as 1.0 or 1.0.3.
	 * @default null
	 * @example "1.0.0"
	 */
	version: z.string().trim().nonempty().nullable().default(null),
	/**
	 * Requires at least
	 * The lowest WordPress version that the plugin will work on.
	 * @default null
	 * @example "6.4"
	 */
	requiresAtLeast: z.string().trim().nonempty().nullable().default(null),
	/**
	 * Requires PHP
	 * The minimum required PHP version.
	 * @default null
	 * @example "8.1"
	 */
	requiresPHP: z.string().trim().nonempty().nullable().default(null),
	/**
	 * Author
	 * The name of the plugin author. Multiple authors may be listed
	 * using commas.
	 * @default []
	 * @example ["Jane Doe"]
	 * @example ["Jane Doe", "John Smith"]
	 */
	author: z.array(z.string().trim().nonempty()).default([]),
	/**
	 * Author URI
	 * The author’s website or profile on another website,
	 * such as WordPress.org.
	 * @default null
	 * @example "https://example.com"
	 */
	authorURI: z.url().nullable().default(null),
	/**
	 * License
	 * The short name (slug) of the plugin’s license (e.g. GPLv2).
	 * More information about licensing can be found in the
	 * WordPress.org guidelines.
	 * @default null
	 * @example "GPLv2"
	 */
	license: z.string().trim().nonempty().nullable().default(null),
	/**
	 * License URI
	 * A link to the full text of the license
	 * (e.g. https://www.gnu.org/licenses/gpl-2.0.html).
	 * @default null
	 * @example "https://www.gnu.org/licenses/gpl-2.0.html"
	 */
	licenseURI: z.url().nullable().default(null),
	/**
	 * Text Domain
	 * The gettext text domain of the plugin.
	 * @default "auto"
	 * @example "auto"
	 */
	textDomain: z.literal("auto").default("auto"),
	/**
	 * Domain Path
	 * The domain path lets WordPress know where to find the translations.
	 * @default "/languages"
	 * @example "/languages"
	 */
	domainPath: z.string().trim().nonempty().default("/languages"),
	/**
	 * Network
	 * Whether the plugin can only be activated network-wide.
	 * Can only be set to true, and should be left out when not needed.
	 * @default null
	 * @example true
	 */
	network: z.literal(true).nullable().default(null),
	/**
	 * Update URI
	 * Allows third-party plugins to avoid accidentally being overwritten
	 * with an update of a plugin of a similar name from the
	 * WordPress.org Plugin Directory.
	 * @default null
	 * @example "https://example.com/my-plugin/updates.json"
	 */
	updateURI: z.url().nullable().default(null),
	/**
	 * Requires Plugins
	 * A comma-separated list of WordPress.org-formatted slugs for its
	 * dependencies.
	 * @default []
	 * @example ["woocommerce"]
	 * @example ["woocommerce", "advanced-custom-fields"]
	 */
	requiresPlugins: z.array(z.string().trim().nonempty()).default([]),
});
