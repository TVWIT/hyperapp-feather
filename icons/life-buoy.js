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
    className: "feather feather-life-buoy",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("circle", { cx: 12, cy: 12, r: 4 }),
  h("line", { x1: 4.93, y1: 4.93, x2: 9.17, y2: 9.17 }),
  h("line", { x1: 14.83, y1: 14.83, x2: 19.07, y2: 19.07 }),
  h("line", { x1: 14.83, y1: 9.17, x2: 19.07, y2: 4.93 }),
  h("line", { x1: 14.83, y1: 9.17, x2: 18.36, y2: 5.64 }),
  h("line", { x1: 4.93, y1: 19.07, x2: 9.17, y2: 14.83 })
);