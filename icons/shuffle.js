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
    className: "feather feather-shuffle",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "16 3 21 3 21 8" }),
  h("line", { x1: 4, y1: 20, x2: 21, y2: 3 }),
  h("polyline", { points: "21 16 21 21 16 21" }),
  h("line", { x1: 15, y1: 15, x2: 21, y2: 21 }),
  h("line", { x1: 4, y1: 4, x2: 9, y2: 9 })
);