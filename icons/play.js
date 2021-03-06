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
    className: "feather feather-play",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "5 3 19 12 5 21 5 3" })
);