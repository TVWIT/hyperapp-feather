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
h('circle', {
    cx: '12',
    cy: '12',
    r: '10',
}),
h('line', {
    x1: '10',
    y1: '15',
    x2: '10',
    y2: '9',
}),
h('line', {
    x1: '14',
    y1: '15',
    x2: '14',
    y2: '9',
})
])