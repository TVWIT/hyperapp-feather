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
h('rect', {
    x: '1',
    y: '3',
    width: '15',
    height: '13',
}),
h('polygon', {
    points: '16 8 20 8 23 11 23 16 16 16 16 8',
}),
h('circle', {
    cx: '5.5',
    cy: '18.5',
    r: '2.5',
}),
h('circle', {
    cx: '18.5',
    cy: '18.5',
    r: '2.5',
})
])