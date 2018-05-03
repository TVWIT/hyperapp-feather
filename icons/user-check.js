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
    className: "feather feather-user-check",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
  h("circle", { cx: 8.5, cy: 7, r: 4 }),
  h("polyline", { points: "17 11 19 13 23 9" })
);