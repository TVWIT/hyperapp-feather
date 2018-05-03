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
    className: "feather feather-loader",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 12, y1: 2, x2: 12, y2: 6 }),
  h("line", { x1: 12, y1: 18, x2: 12, y2: 22 }),
  h("line", { x1: 4.93, y1: 4.93, x2: 7.76, y2: 7.76 }),
  h("line", { x1: 16.24, y1: 16.24, x2: 19.07, y2: 19.07 }),
  h("line", { x1: 2, y1: 12, x2: 6, y2: 12 }),
  h("line", { x1: 18, y1: 12, x2: 22, y2: 12 }),
  h("line", { x1: 4.93, y1: 19.07, x2: 7.76, y2: 16.24 }),
  h("line", { x1: 16.24, y1: 7.76, x2: 19.07, y2: 4.93 })
);