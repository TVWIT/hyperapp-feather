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
    className: "feather feather-rewind",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "11 19 2 12 11 5 11 19" }),
  h("polygon", { points: "22 19 13 12 22 5 22 19" })
);