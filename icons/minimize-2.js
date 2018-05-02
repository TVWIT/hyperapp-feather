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
    className: "feather feather-minimize-2",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" })
);