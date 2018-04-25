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
h('polyline', {
    points: '20 12 20 22 4 22 4 12',
}),
h('rect', {
    x: '2',
    y: '7',
    width: '20',
    height: '5',
}),
h('line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '7',
}),
h('path', {
    d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z',
}),
h('path', {
    d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
})
])