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
    className: "feather feather-anchor",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 5, r: 3 }),
  h("line", { x1: 12, y1: 22, x2: 12, y2: 8 }),
  h("path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" })
);