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
    className: "feather feather-toggle-right",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 1, y: 5, width: 22, height: 14, rx: 7, ry: 7 }),
  h("circle", { cx: 16, cy: 12, r: 3 })
);