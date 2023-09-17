# split-circle

[![NPM version](https://img.shields.io/npm/v/pkg-name?color=a1b858&label=)](https://www.npmjs.com/package/split-circle)

> Split a circle into a number of equal parts
> web component, so you can use it in any framework

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `parts` | `array` | `[1,2,3,4,5,6,7,8]` | data of circle, used in show and event |
| `radius` | `string` | `100px` | the radius of circle |

### Events

| Name | Description |
| --- | --- |
| `partclick` | click event, return a CustomEvent Object, you can find part data in `event.detail.part` |

## Demo

### Vue

[playground-vue](./playground//vue/src/App.vue)

## License

[MIT](./LICENSE)
