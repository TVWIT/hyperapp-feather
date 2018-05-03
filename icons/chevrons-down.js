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
    className: "feather feather-chevrons-down",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "7 13 12 18 17 13" }),
  h("polyline", { points: "7 6 12 11 17 6" })
);