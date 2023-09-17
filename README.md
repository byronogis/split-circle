# web-component-starter

A starter kit for building web components with [lit](https://lit.dev/).

## Start

### Clone with degit

```bash
npx degit byronogis/web-component-starter my-component
cd my-component
pnpm i
```

### Github Template

[Create a repo from this template on GitHub.](https://github.com/byronogis/web-component-starter/generate)

## Checklist

- Change `web-component-starter`, `WebComponentStarter` with your component name.
- Rename `packages/core/src/components/WebComponentStarter.js` with your component name.
- Change the author name in LICENSE.
- Clean up the READMEs.

## Repo Usage

### Multi-Component

Add more components by creating new files in `packages/core/src/components` and aggregating them in `packages/core/src/components/index.js`.

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## Component Usage

### define all components

```js
import { defineWebComponents } from 'web-component-starter'

defineWebComponents()
```

### or define a single component

```js
import { defineWebComponent } from 'web-component-starter'
import { WebComponentStarter } from 'web-component-starter/components'

defineWebComponent('web-component-starter', WebComponentStarter)
```

### use in html

```html
<web-component-starter></web-component-starter>
```

## License

[MIT](./LICENSE)
