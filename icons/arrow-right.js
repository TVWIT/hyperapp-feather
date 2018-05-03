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
    className: "feather feather-arrow-right",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 5, y1: 12, x2: 19, y2: 12 }),
  h("polyline", { points: "12 5 19 12 12 19" })
);