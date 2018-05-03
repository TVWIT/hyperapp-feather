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
    className: "feather feather-chevrons-up",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "17 11 12 6 7 11" }),
  h("polyline", { points: "17 18 12 13 7 18" })
);