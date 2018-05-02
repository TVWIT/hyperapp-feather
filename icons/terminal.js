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
    className: "feather feather-terminal",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 17l6-6-6-6M12 19h8" })
);