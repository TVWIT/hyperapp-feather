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
    className: "feather feather-bluetooth",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" })
);