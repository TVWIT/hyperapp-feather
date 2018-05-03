const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    'stroke-width': 2,
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    className: "feather feather-zoom-out",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 11, cy: 11, r: 8 }),
  h("line", { x1: 21, y1: 21, x2: 16.65, y2: 16.65 }),
  h("line", { x1: 8, y1: 11, x2: 14, y2: 11 })
);