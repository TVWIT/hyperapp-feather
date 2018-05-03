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
    className: "feather feather-pause",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 6, y: 4, width: 4, height: 16 }),
  h("rect", { x: 14, y: 4, width: 4, height: 16 })
);