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
    className: "feather feather-terminal",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "4 17 10 11 4 5" }),
  h("line", { x1: 12, y1: 19, x2: 20, y2: 19 })
);