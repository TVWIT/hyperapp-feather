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
    className: "feather feather-arrow-up",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M12 19V5M5 12l7-7 7 7" })
);