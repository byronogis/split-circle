import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
    'src/components/index',
  ],
  declaration: false,
  rollup: {
    emitCJS: true,
  },
})
