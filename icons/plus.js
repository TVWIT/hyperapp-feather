const { h } = require('hyperapp')

module.exports = ({ size = 24, color = 'currentColor', weight = 2 }) => h('svg', {
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
    x1: '12',
    y1: '5',
    x2: '12',
    y2: '19',
}),
h('line', {
    x1: '5',
    y1: '12',
    x2: '19',
    y2: '12',
})
])