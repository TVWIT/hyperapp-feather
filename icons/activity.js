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
    className: "feather feather-activity",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
);