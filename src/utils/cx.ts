/**
 * Combines multiple class name strings, safely removing any falsy values.
 *
 * This utility function is useful for dynamically composing Tailwind or CSS classes
 * in a clean and maintainable way. It filters out empty strings, null, undefined,
 * and false values before joining the valid class names into a single space-separated string.
 *
 * @param {...ClassValue} classes - A list of class names to combine. Each value can be a string, falsy value, an object `{ className: boolean }`, or an array of such values.
 *
 * @returns {string} - A single string containing all valid class names separated by spaces.
 *
 * @example
 * cx('p-4', null, 'text-lg', undefined, 'bg-red-100');
 * // → "p-4 text-lg bg-red-100"
 *
 * @example
 * const isActive = true;
 * cx('button', isActive && 'active'); // Safe usage with conditionals
 * // → "button active"
 *
 * @example
 * cx(base, [size, variant, color, state]);
 * // → "base size variant color state"
 *
 * @example
 * cx('btn', { primary: true, large: true }, [size, variant, isDisabled && 'disabled']);
 * // → "btn primary large md disabled"
 */

type ClassValue =
	| string
	| null
	| undefined
	| false
	| { [key: string]: boolean }
	| ClassValue[];

export function cx(...classes: ClassValue[]): string {
	return classes
		.flat()
		.map((c) =>
			typeof c === "object" && c !== null && !Array.isArray(c)
				? Object.keys(c).filter((k) => c[k])
				: c,
		)
		.flat()
		.filter(Boolean)
		.join(" ");
}
