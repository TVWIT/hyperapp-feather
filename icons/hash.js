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
    className: "feather feather-hash",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" })
);