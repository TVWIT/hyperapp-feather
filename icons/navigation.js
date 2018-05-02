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
    className: "feather feather-navigation",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M3 11l19-9-9 19-2-8-8-2z" })
);