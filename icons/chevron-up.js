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
    className: "feather feather-chevron-up",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "18 15 12 9 6 15" })
);