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
    className: "feather feather-filter",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" })
);