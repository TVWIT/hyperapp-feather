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
    className: "feather feather-arrow-up-right",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 7, y1: 17, x2: 17, y2: 7 }),
  h("polyline", { points: "7 7 17 7 17 17" })
);