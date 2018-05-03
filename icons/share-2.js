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
    className: "feather feather-share-2",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 18, cy: 5, r: 3 }),
  h("circle", { cx: 6, cy: 12, r: 3 }),
  h("circle", { cx: 18, cy: 19, r: 3 }),
  h("line", { x1: 8.59, y1: 13.51, x2: 15.42, y2: 17.49 }),
  h("line", { x1: 15.41, y1: 6.51, x2: 8.59, y2: 10.49 })
);