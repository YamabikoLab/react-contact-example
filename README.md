# React Contact Example

```
npm install -D tailwindcss
npx tailwindcss init
```

frontend/tailwind.config.cjs

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

src/input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

https://headlessui.com/

```
npm install @headlessui/react@latest
```

https://heroicons.com/

```
npm install @heroicons/react
```

```
npm install -D @tailwindcss/typography
```
