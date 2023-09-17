import { LitElement, html } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import SplitCircleStyle from './SplitCircleStyle'

export default class SplitCircle extends LitElement {
  static properties = {
    name: {},
    parts: { type: Array },
    radius: { type: String },
    styles: {},
  }

  // Define scoped styles right with your component, in plain CSS
  static styles = [
    SplitCircleStyle,
  ]

  constructor() {
    super()
    // Declare reactive properties
    this.name = 'World'
    this.parts = Array.from({ length: 8 }, (_, i) => i + 1)
    this.radius = '100px'
    this.styles = {}
  }

  // Render the UI as a function of component state
  render() {
    this.styles = {
      '--radius': this.radius,
      '--parts': this.parts.length,
    }

    return html`
      <ul class="circle" style=${styleMap(this.styles)}>
        ${this.parts.map((part, index) => html`
          <li
            class="circle-part"
            data-part=${JSON.stringify(part)}
            style=${styleMap({ '--part': index + 1 })}
            @click=${this._dispatchEvent}
          >
            <div class="circle-part-inner_wrapper">
              <div class="circle-part-inner">
                <slot name=${index}>${part}</slot>
              </div>
            </div>
          </li>
        `)}
      </ul>
    `
  }

  _dispatchEvent(e) {
    if (e.currentTarget?.classList.contains('circle-part')) {
      const part = JSON.parse(e.currentTarget.dataset.part)
      this.dispatchEvent(new CustomEvent('partclick', { detail: { part } }))
    }
  }
}
