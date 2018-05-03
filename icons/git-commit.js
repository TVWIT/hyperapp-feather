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
    className: "feather feather-git-commit",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 4 }),
  h("line", { x1: 1.05, y1: 12, x2: 7, y2: 12 }),
  h("line", { x1: 17.01, y1: 12, x2: 22.96, y2: 12 })
);