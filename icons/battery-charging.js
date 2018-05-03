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
    className: "feather feather-battery-charging",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }),
  h("line", { x1: 23, y1: 13, x2: 23, y2: 11 }),
  h("polyline", { points: "11 6 7 12 13 12 9 18" })
);