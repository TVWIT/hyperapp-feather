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
    className: "feather feather-send",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" })
);