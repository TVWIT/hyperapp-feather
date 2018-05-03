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
    className: "feather feather-minimize-2",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "4 14 10 14 10 20" }),
  h("polyline", { points: "20 10 14 10 14 4" }),
  h("line", { x1: 14, y1: 10, x2: 21, y2: 3 }),
  h("line", { x1: 3, y1: 21, x2: 10, y2: 14 })
);