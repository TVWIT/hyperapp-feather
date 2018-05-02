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
    className: "feather feather-git-merge",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 18, cy: 18, r: 3 }),
  h("circle", { cx: 6, cy: 6, r: 3 }),
  h("path", { d: "M6 21V9a9 9 0 0 0 9 9" })
);