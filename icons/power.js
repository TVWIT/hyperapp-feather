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
    className: "feather feather-power",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
  h("line", { x1: 12, y1: 2, x2: 12, y2: 12 })
);