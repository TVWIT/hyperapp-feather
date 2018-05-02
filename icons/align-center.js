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
    className: "feather feather-align-center",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M18 10H6M21 6H3M21 14H3M18 18H6" })
);