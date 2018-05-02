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
    className: "feather feather-credit-card",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 1, y: 4, width: 22, height: 16, rx: 2, ry: 2 }),
  h("path", { d: "M1 10h22" })
);