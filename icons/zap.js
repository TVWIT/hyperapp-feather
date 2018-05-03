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
    className: "feather feather-zap",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
);