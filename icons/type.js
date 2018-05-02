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
    className: "feather feather-type",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 7V4h16v3M9 20h6M12 4v16" })
);