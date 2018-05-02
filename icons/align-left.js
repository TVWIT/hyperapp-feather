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
    className: "feather feather-align-left",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M17 10H3M21 6H3M21 14H3M17 18H3" })
);