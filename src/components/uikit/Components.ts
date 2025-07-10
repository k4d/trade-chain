/**
 * UI Components
 *
 * This module exports the component map and metadata for the TradeChain UI Kit.
 */

/**
 * @interface
 * @description Metadata for a UI component.
 * Contains name and description used in documentation and UI Kit dashboard.
 */
export interface ComponentMeta {
	/**
	 * Name of the component (without the "UI" prefix)
	 * @example 'Typography', 'Link', 'Button', 'Badges', 'Alerts', 'Spinner', 'Card', 'FormInput', 'Tooltip', 'List', 'Table', 'Toast', 'Modal'
	 */
	name: string;
	/**
	 * Brief description of the component's purpose and functionality
	 * @example 'Reusable button component with multiple styles'
	 */
	description: string;
}

/**
 * List of available UI components in the TradeChain design system.
 *
 * Used in `/uikit.astro` to dynamically render UI component cards.
 */
export const Components: ComponentMeta[] = [
	{
		name: "Typography",
		description: "Comprehensive typography system for TradeChain UI Kit.",
	},
	{
		name: "Link",
		description:
			"Reusable link component with support for multiple styles and custom classes.",
	},
	{
		name: "NavLink",
		description:
			"Navigation link component that supports active states and dynamic route highlighting.",
	},
	{
		name: "Button",
		description:
			"Reusable button component with support for multiple styles and custom classes.",
	},
	{
		name: "Badges",
		description:
			"Reusable badge component with support for multiple styles and custom classes.",
	},
	{
		name: "Alerts",
		description:
			"Reusable alert component with support for multiple styles and custom classes.",
	},
	{
		name: "Spinner",
		description: "Demonstration of Spinner variants and sizes.",
	},
	{
		name: "Progress",
		description: "Demonstration of Progress variants and sizes.",
	},
	{
		name: "Card",
		description:
			"Reusable card component with support for multiple styles and custom classes.",
	},
	{
		name: "FormInput",
		description:
			"Reusable form input component with support for multiple styles and custom classes.",
	},
	{
		name: "Tooltip",
		description:
			"Reusable tooltip component with support for multiple styles and custom classes.",
	},
	{
		name: "List",
		description:
			"Reusable list component with support for multiple styles and custom classes.",
	},
	{
		name: "Table",
		description:
			"Reusable table component with support for multiple styles and custom classes.",
	},
	{
		name: "Toast",
		description:
			"Reusable toast component with support for multiple styles and custom classes.",
	},
	{
		name: "Modal",
		description:
			"Reusable modal component with support for multiple styles and custom classes.",
	},
];
