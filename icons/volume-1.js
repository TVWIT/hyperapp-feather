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
    className: "feather feather-volume-1",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
  h("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" })
);