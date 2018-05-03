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
    className: "feather feather-code",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "16 18 22 12 16 6" }),
  h("polyline", { points: "8 6 2 12 8 18" })
);