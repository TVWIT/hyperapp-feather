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
    className: "feather feather-truck",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 1, y: 3, width: 15, height: 13 }),
  h("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }),
  h("circle", { cx: 5.5, cy: 18.5, r: 2.5 }),
  h("circle", { cx: 18.5, cy: 18.5, r: 2.5 })
);