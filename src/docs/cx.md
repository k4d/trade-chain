# `cx()` — Utility for Combining Tailwind Classes

A lightweight utility function to dynamically compose class names in a clean and maintainable way.

## 📌 Features

- ✅ Supports strings, arrays, falsy values, and conditional objects
- 🧱 Works with Tailwind CSS or any utility-first CSS framework
- 📦 No external dependencies
- 💡 Fully TypeScript compatible

### This function is especially useful when building a design system  or UI Kit :

- Easy combination of base and themed classes
- Clean and readable way to dynamically manage styles
- Works well with components like Button, Card, Input and more
- Framework-agnostic — integrates into Astro, React, Vue, Svelte, Solid and other frameworks

## 📌 Why use cx()?

Using cx(...) improves readability and maintainability in your codebase, especially when dealing with dynamic styling:

Without cx():

```ts
className={`${base} ${variant === 'primary' ? 'bg-blue-500' : ''} ${className || ''}`}
```

With cx():

```ts
className={cx(base, variant === 'primary' && 'bg-blue-500', className)}
```

## 🧑‍💻 For Teams and Design Systems

- Avoids messy ternary logic in JSX/HTML
- Makes it easy to extract reusable style logic
- Helps maintain consistent naming and structure
- Enables better type safety with TypeScript
- Allows for auto-import and autocompletion in IDEs

---

## 📥 Import

```ts
import { cx } from "@utils/cx";
```

### Basic Examples

#### 1. Combine simple strings

```ts
cx('p-4', 'mt-2', null, 'bg-white');
// → "p-4 mt-2 bg-white"
```

#### 2. Conditional classes

```ts
const isActive = true;
cx('button', isActive && 'active');
// → "button active"
```

```ts
const isPrimary = false;
cx('card', isPrimary && 'primary');
// → "card"
```

#### 3. Object-based conditions

```ts
cx({ active: true, disabled: false, 'text-lg': true });
// → "active text-lg"
```

```ts
const size = 'lg';
cx({ btn: true, 'btn-lg': size === 'lg' });
// → "btn btn-lg"
```

#### 4. Arrays of classes

```ts
cx(['p-4', 'mt-2'], ['bg-white', 'text-gray-700']);
// → "p-4 mt-2 bg-white text-gray-700"
```

#### 5. Nested arrays (deep flattening)

```ts
cx(['p-4', ['mt-2', 'mb-2']], ['bg-white']);
// → "p-4 mt-2 mb-2 bg-white"
```

### Advanced Usage

#### 6. Combined object + string + array usage

```ts
cx(
  'btn',
  { primary: true, outlined: false },
  ['px-4', 'py-2'],
  'rounded'
);
// → "btn primary px-4 py-2 rounded"
```

#### 7. Conditional styling with theme support

```ts
const isDarkMode = true;
cx('card', { 'dark:bg-gray-800': isDarkMode, 'light:bg-white': !isDarkMode });
// → "card dark:bg-gray-800"
```

#### 8. Dynamic variant mapping

```ts
const variant = 'success';

cx('alert', {
  'border-green-500 text-green-900': variant === 'success',
  'border-red-500 text-red-900': variant === 'error',
});
// → "alert border-green-500 text-green-900"
```

#### 9. With component props (class passthrough)

```ts
interface Props {
  variant?: 'default' | 'primary' | 'secondary';
  class?: string;
}

function Button({ variant = 'default', class: className }: Props) {
  const buttonClasses = cx(
    'block px-4 py-2 rounded shadow-sm',
    variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
    variant === 'secondary' && 'bg-gray-500 text-white hover:bg-gray-600',
    className
  );

  return <button class={buttonClasses}><slot /></button>;
}
```
