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
    className: "feather feather-trending-down",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M23 18l-9.5-9.5-5 5L1 6" }),
  h("path", { d: "M17 18h6v-6" })
);