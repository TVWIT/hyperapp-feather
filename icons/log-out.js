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
    className: "feather feather-log-out",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
  h("polyline", { points: "16 17 21 12 16 7" }),
  h("line", { x1: 21, y1: 12, x2: 9, y2: 12 })
);