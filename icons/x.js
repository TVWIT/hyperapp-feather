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
h('line', {
    x1: '18',
    y1: '6',
    x2: '6',
    y2: '18',
}),
h('line', {
    x1: '6',
    y1: '6',
    x2: '18',
    y2: '18',
})
])