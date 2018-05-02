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
    className: "feather feather-menu",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M3 12h18M3 6h18M3 18h18" })
);