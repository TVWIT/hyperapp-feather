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
    className: "feather feather-fast-forward",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "13 19 22 12 13 5 13 19" }),
  h("polygon", { points: "2 19 11 12 2 5 2 19" })
);