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
    className: "feather feather-git-branch",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 6, y1: 3, x2: 6, y2: 15 }),
  h("circle", { cx: 18, cy: 6, r: 3 }),
  h("circle", { cx: 6, cy: 18, r: 3 }),
  h("path", { d: "M18 9a9 9 0 0 1-9 9" })
);