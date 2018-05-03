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
    className: "feather feather-maximize-2",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "15 3 21 3 21 9" }),
  h("polyline", { points: "9 21 3 21 3 15" }),
  h("line", { x1: 21, y1: 3, x2: 14, y2: 10 }),
  h("line", { x1: 3, y1: 21, x2: 10, y2: 14 })
);