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
    className: "feather feather-percent",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M19 5L5 19" }),
  h("circle", { cx: 6.5, cy: 6.5, r: 2.5 }),
  h("circle", { cx: 17.5, cy: 17.5, r: 2.5 })
);