import * as components from './components'

function defineWebComponents() {
  Object.keys(components).forEach((key) => {
    const componentName = key.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)
    const component = components[key]
    window.customElements.define(componentName, component)
  })
}

function defineWebComponent(componentName, component) {
  window.customElements.define(componentName, component)
}

export {
  defineWebComponents,
  defineWebComponent,
}
