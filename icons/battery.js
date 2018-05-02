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
    className: "feather feather-battery",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 1, y: 6, width: 18, height: 12, rx: 2, ry: 2 }),
  h("path", { d: "M23 13v-2" })
);