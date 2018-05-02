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
    className: "feather feather-filter",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" })
);