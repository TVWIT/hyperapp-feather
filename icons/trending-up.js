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
    className: "feather feather-trending-up",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
  h("polyline", { points: "17 6 23 6 23 12" })
);