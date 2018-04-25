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
h('polygon', {
    points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5',
}),
h('path', {
    d: 'M15.54 8.46a5 5 0 0 1 0 7.07',
})
])