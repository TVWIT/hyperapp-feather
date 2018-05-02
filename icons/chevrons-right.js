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
    className: "feather feather-chevrons-right",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M13 17l5-5-5-5M6 17l5-5-5-5" })
);