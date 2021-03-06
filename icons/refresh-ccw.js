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
    className: "feather feather-refresh-ccw",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "1 4 1 10 7 10" }),
  h("polyline", { points: "23 20 23 14 17 14" }),
  h("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
);