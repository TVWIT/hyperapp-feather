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
    className: "feather feather-rss",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 11a9 9 0 0 1 9 9" }),
  h("path", { d: "M4 4a16 16 0 0 1 16 16" }),
  h("circle", { cx: 5, cy: 19, r: 1 })
);