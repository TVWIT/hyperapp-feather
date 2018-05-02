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
    className: "feather feather-arrow-up-right",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M7 17L17 7M7 7h10v10" })
);