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
    className: "feather feather-aperture",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("line", { x1: 14.31, y1: 8, x2: 20.05, y2: 17.94 }),
  h("line", { x1: 9.69, y1: 8, x2: 21.17, y2: 8 }),
  h("line", { x1: 7.38, y1: 12, x2: 13.12, y2: 2.06 }),
  h("line", { x1: 9.69, y1: 16, x2: 3.95, y2: 6.06 }),
  h("line", { x1: 14.31, y1: 16, x2: 2.83, y2: 16 }),
  h("line", { x1: 16.62, y1: 12, x2: 10.88, y2: 21.94 })
);