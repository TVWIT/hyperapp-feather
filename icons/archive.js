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
h('polyline', {
    points: '21 8 21 21 3 21 3 8',
}),
h('rect', {
    x: '1',
    y: '3',
    width: '22',
    height: '5',
}),
h('line', {
    x1: '10',
    y1: '12',
    x2: '14',
    y2: '12',
})
])