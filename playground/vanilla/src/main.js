import { defineWebComponents } from 'split-circle'

defineWebComponents()

const parts = Array.from({ length: 5 }, (_, i) => i + 1)
const radius = '150px'

const splitCircle = document.createElement('split-circle')
splitCircle.setAttribute('parts', JSON.stringify(parts))
splitCircle.setAttribute('radius', radius)
splitCircle.addEventListener('partclick', (e) => {
  alert(`partclick: ${JSON.stringify(e.detail)}`)
})

const app = document.querySelector('#app')
app.appendChild(splitCircle)
