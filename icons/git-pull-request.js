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
    className: "feather feather-git-pull-request",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 18, cy: 18, r: 3 }),
  h("circle", { cx: 6, cy: 6, r: 3 }),
  h("path", { d: "M13 6h3a2 2 0 0 1 2 2v7M6 9v12" })
);