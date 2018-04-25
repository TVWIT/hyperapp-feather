const { h } = require('hyperapp')

module.exports = ({ size = 24, color = 'currentColor', weight = 2 } = {}) => h('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  'stroke-width': weight + '',
}, [
h('path', {
    d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z',
}),
h('circle', {
    cx: '12',
    cy: '12',
    r: '3',
})
])