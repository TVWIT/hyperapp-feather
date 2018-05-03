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
    className: "feather feather-log-in",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
  h("polyline", { points: "10 17 15 12 10 7" }),
  h("line", { x1: 15, y1: 12, x2: 3, y2: 12 })
);