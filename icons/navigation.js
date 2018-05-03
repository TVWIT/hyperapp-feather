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
    className: "feather feather-navigation",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "3 11 22 2 13 21 11 13 3 11" })
);