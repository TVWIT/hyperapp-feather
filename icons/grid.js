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
    className: "feather feather-grid",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 3, y: 3, width: 7, height: 7 }),
  h("rect", { x: 14, y: 3, width: 7, height: 7 }),
  h("rect", { x: 14, y: 14, width: 7, height: 7 }),
  h("rect", { x: 3, y: 14, width: 7, height: 7 })
);