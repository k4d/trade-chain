/**
 * Combines multiple class name strings, safely removing any falsy values.
 *
 * This utility function is useful for dynamically composing Tailwind or CSS classes
 * in a clean and maintainable way. It filters out empty strings, null, undefined,
 * and false values before joining the valid class names into a single space-separated string.
 *
 * @param {...(string | null | undefined)} classes - A list of class names to combine.
 * Each value can be a string, null, or undefined.
 *
 * @returns {string} A single string containing all valid class names separated by spaces.
 *
 * @example
 * cx('p-4', null, 'text-lg', undefined, 'bg-red-100');
 * // → "p-4 text-lg bg-red-100"
 *
 * @example
 * const isActive = true;
 * cx('button', isActive && 'active'); // Safe usage with conditionals
 * // → "button active"
 */
export function cx(...classes: (string | null | undefined)[]): string {
	return classes.filter(Boolean).join(" ");
}
