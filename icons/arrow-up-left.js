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
    className: "feather feather-arrow-up-left",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M17 17L7 7M7 17V7h10" })
);