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
    className: "feather feather-bluetooth",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" })
);