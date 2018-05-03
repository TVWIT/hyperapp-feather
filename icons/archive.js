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
    className: "feather feather-archive",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "21 8 21 21 3 21 3 8" }),
  h("rect", { x: 1, y: 3, width: 22, height: 5 }),
  h("line", { x1: 10, y1: 12, x2: 14, y2: 12 })
);