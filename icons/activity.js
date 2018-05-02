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
    className: "feather feather-activity",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
);