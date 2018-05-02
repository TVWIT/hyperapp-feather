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
    className: "feather feather-bar-chart",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M12 20V10M18 20V4M6 20v-4" })
);