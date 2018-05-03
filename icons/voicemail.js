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
    className: "feather feather-voicemail",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 5.5, cy: 11.5, r: 4.5 }),
  h("circle", { cx: 18.5, cy: 11.5, r: 4.5 }),
  h("line", { x1: 5.5, y1: 16, x2: 18.5, y2: 16 })
);