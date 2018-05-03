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
    className: "feather feather-arrow-down",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 12, y1: 5, x2: 12, y2: 19 }),
  h("polyline", { points: "19 12 12 19 5 12" })
);