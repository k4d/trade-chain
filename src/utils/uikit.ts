// Define a generic type for an Astro component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AstroComponent = (props: Record<string, any>) => any;

type AstroModule = {
	default: AstroComponent;
};

/**
 * Checks if the given module is a valid Astro component module.
 *
 * @param mod - The imported module to check.
 * @returns {boolean} Whether the module exports an Astro component via `default`.
 */
function isAstroModule(mod: unknown): mod is AstroModule {
	return (
		!!mod &&
		typeof mod === "object" &&
		"default" in mod &&
		typeof (mod as AstroModule).default === "function"
	);
}

/**
 * This glob ONLY targets the UI Kit demonstration components.
 * Excludes files starting with "UIKit" like UIKitBox.astro.
 */
const uikitComponents = import.meta.glob([
	"/src/components/uikit/UI*.astro",
	"!/src/components/uikit/UIKit*.astro",
]);

/**
 * Dynamically loads a UI Kit component by name from the `/uikit` directory.
 * This function is intended for use on the UI Kit documentation page only.
 *
 * @param {string} name - The name of the component without the `.astro` extension.
 * @returns {Promise<AstroComponent | null>} - The loaded component or null if not found.
 */
export async function getComponent(
	name: string,
): Promise<AstroComponent | null> {
	const path = `/src/components/uikit/${name}.astro`;

	if (path in uikitComponents) {
		const componentModule = await uikitComponents[path]();
		if (isAstroModule(componentModule)) {
			return componentModule.default;
		}
	}

	console.warn(`UI Kit Component "${name}" not found.`);
	return null;
}
