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
    x1: '16',
    y1: '13',
    x2: '16',
    y2: '21',
}),
h('line', {
    x1: '8',
    y1: '13',
    x2: '8',
    y2: '21',
}),
h('line', {
    x1: '12',
    y1: '15',
    x2: '12',
    y2: '23',
}),
h('path', {
    d: 'M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25',
})
])