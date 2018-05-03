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
    className: "feather feather-move",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "5 9 2 12 5 15" }),
  h("polyline", { points: "9 5 12 2 15 5" }),
  h("polyline", { points: "15 19 12 22 9 19" }),
  h("polyline", { points: "19 9 22 12 19 15" }),
  h("line", { x1: 2, y1: 12, x2: 22, y2: 12 }),
  h("line", { x1: 12, y1: 2, x2: 12, y2: 22 })
);