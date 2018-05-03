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
    className: "feather feather-refresh-cw",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "23 4 23 10 17 10" }),
  h("polyline", { points: "1 20 1 14 7 14" }),
  h("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
);